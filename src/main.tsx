import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 1. Mount React App immediately so UI renders with zero blocking
const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

// 2. Register PWA service worker safely in production without blocking React rendering
if (typeof window !== 'undefined' && 'serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    import('virtual:pwa-register')
      .then(({ registerSW }) => {
        try {
          registerSW({
            immediate: true,
            onNeedRefresh() {
              console.info('PWA update available.');
            },
            onOfflineReady() {
              console.info('JAMBiX is ready to work offline.');
            },
          });
        } catch (swErr) {
          console.warn('PWA registerSW error:', swErr);
        }
      })
      .catch((err) => {
        console.warn('PWA virtual module load warning:', err);
      });
  });
}
