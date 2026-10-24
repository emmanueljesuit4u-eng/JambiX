// Intercept benign Firestore offline timeout heuristics
if (typeof window !== 'undefined') {
  const origErr = console.error;
  const origWarn = console.warn;
  const isIgnored = (args: unknown[]) => {
    const text = args
      .map((a) => (typeof a === 'string' ? a : a instanceof Error ? a.message : (typeof a === 'object' && a !== null ? JSON.stringify(a) : String(a))))
      .join(' ');
    return text.includes('Could not reach Cloud Firestore backend') || text.includes("Backend didn't respond within 10 seconds");
  };
  console.error = (...args: unknown[]) => {
    if (isIgnored(args)) return;
    origErr.apply(console, args);
  };
  console.warn = (...args: unknown[]) => {
    if (isIgnored(args)) return;
    origWarn.apply(console, args);
  };
}

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

// 2. Register PWA service worker safely in production with immediate update delivery
if (typeof window !== 'undefined' && 'serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    // Listen for new service worker taking control to refresh page with updated code
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
    });

    import('virtual:pwa-register')
      .then(({ registerSW }) => {
        try {
          const updateSW = registerSW({
            immediate: true,
            onNeedRefresh() {
              console.info('JAMBiX update found. Activating newest version...');
              updateSW(true);
            },
            onOfflineReady() {
              console.info('JAMBiX is ready to work offline.');
            },
          });

          // Check for service worker updates immediately on page load
          navigator.serviceWorker.ready
            .then((registration) => {
              registration.update().catch(() => {});
            })
            .catch(() => {});
        } catch (swErr) {
          console.warn('PWA registerSW error:', swErr);
        }
      })
      .catch((err) => {
        console.warn('PWA virtual module load warning:', err);
      });
  });
}
