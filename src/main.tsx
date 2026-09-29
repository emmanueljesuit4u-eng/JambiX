import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register PWA service worker with auto-update without interfering with Firebase
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.info('PWA update available.');
  },
  onOfflineReady() {
    console.info('JAMBiX is ready to work offline.');
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

