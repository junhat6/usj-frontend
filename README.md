# USJ Frontend

このプロジェクトはReact + TypeScript + Viteを使用したフロントエンドアプリケーションです。

## 前提条件

開発環境をセットアップする前に、以下のソフトウェアがインストールされていることを確認してください：

### 必須要件

1. **Node.js**

   - バージョン: 18.0.0 以上（推奨: 20.x LTS）
   - インストール方法: [公式サイト](https://nodejs.org/) からダウンロード

2. **npm**

   - Node.jsと一緒にインストールされます
   - バージョン: 9.0.0 以上

3. **Git**
   - バージョン管理システム
   - インストール方法: [公式サイト](https://git-scm.com/) からダウンロード

### 推奨ツール

- **Visual Studio Code**: 統合開発環境として推奨
- **Chrome DevTools**: デバッグとパフォーマンス分析用

## 環境構築

### 1. リポジトリのクローン

```bash
git clone [リポジトリのURL]
cd usj-frontend
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数の設定（任意）

プロジェクトルートに `.env` ファイルを作成し、必要に応じて以下の環境変数を設定してください：

```bash
# .env ファイルの例
VITE_MSW_ENABLED=true                    # MSWを有効にするか
VITE_MSW_LOG_LEVEL=info                  # MSWのログレベル
VITE_MSW_UNHANDLED_REQUESTS=bypass      # 未処理リクエストの扱い
VITE_MSW_DELAY=0                         # MSWのレスポンス遅延（ms）
VITE_MSW_DEV_ONLY=true                   # 開発時のみMSWを有効
VITE_API_BASE_URL=http://localhost:8080/api  # バックエンドAPIのURL
```

これらの環境変数はすべて任意で、デフォルト値が設定されています。

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスしてアプリケーションを確認できます。

## 利用可能なスクリプト

| コマンド               | 説明                             |
| ---------------------- | -------------------------------- |
| `npm run dev`          | 開発サーバーを起動               |
| `npm run build`        | 本番用ビルドを作成               |
| `npm run preview`      | ビルド結果をプレビュー           |
| `npm run lint`         | ESLintによるコード検査           |
| `npm run format`       | Prettierによるコード整形         |
| `npm run test`         | テストを実行                     |
| `npm run generate:api` | OpenAPIからAPIクライアントを生成 |

## 技術スタック

### フロントエンド

- **React 19**: UIライブラリ
- **TypeScript**: 静的型付け
- **Vite**: 高速なビルドツール
- **React Query (@tanstack/react-query)**: サーバーステート管理
- **Axios**: HTTP クライアント

### 開発ツール

- **ESLint**: コード品質チェック
- **Prettier**: コードフォーマッター
- **MSW (Mock Service Worker)**: API モッキング
- **OpenAPI Generator**: APIクライアント自動生成

## プロジェクト構成

```
src/
├── api/          # APIクライアント（自動生成）
├── assets/       # 静的ファイル
├── components/   # 再利用可能なコンポーネント
├── features/     # 機能別コンポーネント
├── hooks/        # カスタムフック
├── mocks/        # MSW モックデータ
├── pages/        # ページコンポーネント
├── styles/       # スタイルファイル
├── types/        # TypeScript 型定義
├── utils/        # ユーティリティ関数
├── App.tsx       # メインアプリケーションコンポーネント
├── main.tsx      # エントリーポイント
└── index.css     # グローバルスタイル
```

## 開発ガイドライン

### コーディング規約

1. **TypeScript**: 厳格な型チェックを有効にする
2. **ESLint**: 提供されたルールに従う
3. **Prettier**: 自動フォーマットを使用する
4. **コンポーネント命名**: PascalCase を使用
5. **ファイル命名**: camelCase または kebab-case を使用

### APIクライアントの更新

バックエンドのOpenAPI仕様が更新された場合：

```bash
npm run generate:api
```

### モックの使用

開発時にMSWを使用してAPIレスポンスをモックできます。
詳細は `MSW_SETUP.md` を参照してください。

## トラブルシューティング

### よくある問題

1. **npm install でエラーが発生する場合**

   ```bash
   # キャッシュをクリア
   npm cache clean --force
   # node_modules を削除して再インストール
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **開発サーバーが起動しない場合**

   - ポート5173が使用されていないか確認
   - Node.jsのバージョンが要件を満たしているか確認

3. **型エラーが発生する場合**

   ```bash
   # TypeScript の型チェック
   npx tsc --noEmit
   ```

### サポート

問題が解決しない場合は、チームのSlackチャンネルまたはIssueトラッカーで質問してください。

## ライセンス

このプロジェクトは社内利用のためのプライベートプロジェクトです。
