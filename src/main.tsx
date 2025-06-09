import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

async function enableMocking() {
  // 環境変数でMSWの有効/無効を制御
  const mswEnabled = import.meta.env.VITE_MSW_ENABLED !== 'false';
  const devOnly = import.meta.env.VITE_MSW_DEV_ONLY !== 'false';

  // 開発環境チェック
  const shouldEnable = devOnly ? import.meta.env.DEV : true;

  if (mswEnabled && shouldEnable) {
    const { worker } = await import('./mocks/browser');

    return worker.start({
      onUnhandledRequest:
        (import.meta.env.VITE_MSW_UNHANDLED_REQUESTS as 'bypass' | 'warn' | 'error') || 'bypass',
    });
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
});
