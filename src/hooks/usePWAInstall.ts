import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    try {
      // 1. Detect standalone mode (already installed or running in PWA window)
      const checkStandalone = () => {
        try {
          const isStandalone =
            (typeof window !== 'undefined' &&
              window.matchMedia &&
              window.matchMedia('(display-mode: standalone)')?.matches) ||
            (window.navigator as unknown as { standalone?: boolean })?.standalone === true ||
            (typeof document !== 'undefined' &&
              document.referrer &&
              document.referrer.includes('android-app://'));
          setIsInstalled(Boolean(isStandalone));
        } catch {
          setIsInstalled(false);
        }
      };

      checkStandalone();

      // 2. Listen for display-mode changes safely across all browsers
      let mediaQuery: MediaQueryList | null = null;
      const handleMediaChange = (e: { matches?: boolean }) => {
        if (e && e.matches) {
          setIsInstalled(true);
          setDeferredPrompt(null);
        }
      };

      try {
        if (typeof window !== 'undefined' && window.matchMedia) {
          mediaQuery = window.matchMedia('(display-mode: standalone)');
          if (mediaQuery) {
            if (typeof mediaQuery.addEventListener === 'function') {
              mediaQuery.addEventListener('change', handleMediaChange as EventListener);
            } else if (typeof (mediaQuery as unknown as { addListener?: (fn: (e: { matches?: boolean }) => void) => void }).addListener === 'function') {
              (mediaQuery as unknown as { addListener: (fn: (e: { matches?: boolean }) => void) => void }).addListener(handleMediaChange);
            }
          }
        }
      } catch (err) {
        console.warn('matchMedia setup error:', err);
      }

      // 3. Detect iOS devices safely
      try {
        const userAgent = (window.navigator?.userAgent || '').toLowerCase();
        const isIOSDevice =
          /iphone|ipad|ipod/.test(userAgent) &&
          !(window as unknown as { MSStream?: unknown })?.MSStream;
        setIsIOS(isIOSDevice);
      } catch {
        setIsIOS(false);
      }

      // 4. Chrome/Android PWA install prompt event
      const handleBeforeInstallPrompt = (e: Event) => {
        try {
          e.preventDefault();
          setDeferredPrompt(e as BeforeInstallPromptEvent);
        } catch {
          // Ignore
        }
      };

      const handleAppInstalled = () => {
        setIsInstalled(true);
        setDeferredPrompt(null);
      };

      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.addEventListener('appinstalled', handleAppInstalled);

      return () => {
        try {
          if (mediaQuery) {
            if (typeof mediaQuery.removeEventListener === 'function') {
              mediaQuery.removeEventListener('change', handleMediaChange as EventListener);
            } else if (typeof (mediaQuery as unknown as { removeListener?: (fn: (e: { matches?: boolean }) => void) => void }).removeListener === 'function') {
              (mediaQuery as unknown as { removeListener: (fn: (e: { matches?: boolean }) => void) => void }).removeListener(handleMediaChange);
            }
          }
        } catch {
          // Ignore cleanup errors
        }
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.removeEventListener('appinstalled', handleAppInstalled);
      };
    } catch (e) {
      console.warn('usePWAInstall effect error:', e);
    }
  }, []);

  const install = async () => {
    if (!deferredPrompt) return false;
    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
        setDeferredPrompt(null);
        return true;
      }
    } catch (err) {
      console.warn('PWA install prompt error:', err);
    }
    return false;
  };

  return {
    isInstallable: Boolean(deferredPrompt),
    isInstalled,
    isIOS,
    install,
  };
}
