/**
 * API Client Configuration
 *
 * 使用例:
 * import { api, setAccessToken } from './api/client';
 *
 * // ログイン
 * const response = await api.auth.apiAuthLoginPost({ email: 'user@example.com', password: 'password' });
 * setAccessToken(response.data.token);
 *
 * // ユーザー情報取得
 * const user = await api.users.apiUsersMeGet();
 *
 * // ログアウト
 * setAccessToken(null);
 */

import {
  Configuration,
  AttractionsApi,
  AuthApi,
  MatchingApi,
  MessagesApi,
  PlansApi,
  ProfilesApi,
  UsersApi,
} from './';
import axios from 'axios';

// デフォルト設定
const defaultBaseURL = 'http://localhost:8080';
const baseURL = import.meta.env.VITE_API_BASE_URL || defaultBaseURL;

// axios のデフォルト設定
axios.defaults.baseURL = baseURL;

// Configuration オブジェクトを経由してトークンやヘッダーもセット可
let apiConfig = new Configuration({
  basePath: baseURL,
  apiKey: () => localStorage.getItem('ACCESS_TOKEN') ?? '',
});

// 各APIクラスのインスタンスを作成する関数
const createApiInstances = (config: Configuration) => ({
  attractions: new AttractionsApi(config),
  auth: new AuthApi(config),
  matching: new MatchingApi(config),
  messages: new MessagesApi(config),
  plans: new PlansApi(config),
  profiles: new ProfilesApi(config),
  users: new UsersApi(config),
});

// 初期APIインスタンス
const apiInstances = createApiInstances(apiConfig);

// 統合APIクライアント
export const api = apiInstances;

// トークンを更新するヘルパー関数
export const setAccessToken = (token: string | null) => {
  if (token) {
    localStorage.setItem('ACCESS_TOKEN', token);
  } else {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  // 新しい設定でAPIインスタンスを再作成
  apiConfig = new Configuration({
    basePath: baseURL,
    apiKey: () => localStorage.getItem('ACCESS_TOKEN') ?? '',
  });

  const newInstances = createApiInstances(apiConfig);

  // apiオブジェクトのプロパティを更新
  Object.assign(api, newInstances);
};

// 個別エクスポート（後方互換性のため）
export const attractionsApi = api.attractions;
export const authApi = api.auth;
export const matchingApi = api.matching;
export const messagesApi = api.messages;
export const plansApi = api.plans;
export const profilesApi = api.profiles;
export const usersApi = api.users;
