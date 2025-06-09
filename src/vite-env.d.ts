/// <reference types="vite/client" />

// MSW関連の環境変数の型定義
interface ImportMetaEnv {
  readonly VITE_MSW_ENABLED: string;
  readonly VITE_MSW_LOG_LEVEL: string;
  readonly VITE_MSW_UNHANDLED_REQUESTS: string;
  readonly VITE_MSW_DELAY: string;
  readonly VITE_MSW_DEV_ONLY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
