# MSW (Mock Service Worker) セットアップガイド

このプロジェクトでは、フロントエンド開発時にバックエンドAPIをモックするためにMSWを導入しています。

## 🚀 セットアップ完了済み

以下の設定がすでに完了しています：

### 1. MSWのインストール

```bash
npm install --save-dev msw@latest
```

### 2. Service Workerの初期化

```bash
npx msw init public/ --save
```

### 3. 設定ファイル

#### `src/mocks/browser.ts`

ブラウザー環境でのMSW設定

#### `src/mocks/handlers.ts`

APIエンドポイントのモック定義

### 4. アプリケーションでの有効化

`src/main.tsx`でMSWを開発環境でのみ有効化

## 📝 使用方法

### 新しいAPIエンドポイントを追加する

`src/mocks/handlers.ts`にハンドラーを追加：

```typescript
export const handlers = [
  // 既存のハンドラー...

  // 新しいエンドポイントを追加
  http.get('/api/posts', () => {
    return HttpResponse.json([{ id: 1, title: 'サンプル投稿', content: 'これはサンプルです' }]);
  }),

  http.post('/api/posts', async ({ request }) => {
    const newPost = (await request.json()) as { title: string; content: string };
    return HttpResponse.json({ id: Date.now(), ...newPost }, { status: 201 });
  }),
];
```

### レスポンスをカスタマイズする

```typescript
// エラーレスポンスを返す
http.get('/api/error-example', () => {
  return HttpResponse.json(
    { message: 'エラーが発生しました' },
    { status: 500 }
  )
}),

// 遅延を追加する
http.get('/api/slow-endpoint', async () => {
  await delay(2000) // 2秒の遅延
  return HttpResponse.json({ message: '遅いレスポンス' })
}),
```

## 🔧 環境変数による設定

### 環境変数ファイル

- **`.env`** - チーム共通のMSW設定（Gitにコミット）
- **`.env.local`** - 個人の開発環境設定（Gitにコミットしない、優先度高）

### 利用可能な環境変数

```bash
# MSWを有効にするかどうか (true/false)
VITE_MSW_ENABLED=true

# MSWのログレベル (info/warn/error)
VITE_MSW_LOG_LEVEL=info

# MSWで未処理のリクエストの扱い方 (bypass/warn/error)
VITE_MSW_UNHANDLED_REQUESTS=bypass

# APIレスポンスの遅延時間（ミリ秒）
VITE_MSW_DELAY=0

# 開発環境でのみMSWを有効にする (true/false)
VITE_MSW_DEV_ONLY=true
```

### 設定例

#### `.env`（チーム共通設定）

```bash
VITE_MSW_ENABLED=true
VITE_MSW_UNHANDLED_REQUESTS=bypass
VITE_MSW_DELAY=0
VITE_MSW_DEV_ONLY=true
```

#### `.env.local`（個人設定例）

```bash
# 個人環境では遅延を追加してリアルな環境をシミュレート
VITE_MSW_DELAY=500

# または、個人環境ではMSWを無効化
# VITE_MSW_ENABLED=false
```

## 🚀 開発時の動作

- **開発環境** (`npm run dev`)：環境変数の設定に基づいてMSWが制御される
- **本番環境** (`npm run build`)：通常はMSWは無効化される（VITE_MSW_DEV_ONLY=trueの場合）

## 📊 現在のサンプルAPI

以下のAPIエンドポイントがモックされています：

- `GET /api/users` - ユーザー一覧取得
- `GET /api/users/:id` - 特定ユーザー取得
- `POST /api/users` - ユーザー作成
- `PUT /api/users/:id` - ユーザー更新
- `DELETE /api/users/:id` - ユーザー削除

## 🎯 MSWの利点

1. **バックエンド不要**：フロントエンド開発を独立して進められる
2. **リアルな環境**：実際のHTTPリクエストをインターセプト
3. **型安全**：TypeScriptで型定義されたモック
4. **開発効率**：素早いイテレーション
5. **テスト対応**：テスト環境でも同じモックを使用可能

## 🛠️ トラブルシューティング

### MSWが動作しない場合

1. ブラウザーの開発者ツールでConsoleを確認
2. `[MSW] Mocking enabled.` メッセージが表示されているか確認
3. Service Workerが正しく登録されているか確認

### 新しいエンドポイントが認識されない場合

1. 開発サーバーを再起動：`npm run dev`
2. ブラウザーのキャッシュをクリア
3. ハンドラーの記述に誤りがないか確認
