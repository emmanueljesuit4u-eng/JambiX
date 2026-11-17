import { useEffect, useState } from 'react';

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

// Module-level store ensures early beforeinstallprompt events fired on initial page load
// are never lost before lazily-mounted components (e.g., dropdown menus) mount.
let globalDeferredPrompt: BeforeInstallPromptEvent | null = null;
let globalIsInstalled = false;
const listeners = new Set<() => void>();

function checkIsStandalone(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return (
      Boolean(window.matchMedia?.('(display-mode: standalone)')?.matches) ||
      Boolean(window.matchMedia?.('(display-mode: window-controls-overlay)')?.matches) ||
      Boolean(window.matchMedia?.('(display-mode: minimal-ui)')?.matches) ||
      (window.navigator as unknown as { standalone?: boolean })?.standalone === true ||
      Boolean(typeof document !== 'undefined' && document.referrer?.includes('android-app://'))
    );
  } catch {
    return false;
  }
}

if (typeof window !== 'undefined') {
  globalIsInstalled = checkIsStandalone();

  window.addEventListener('beforeinstallprompt', (e: Event) => {
    try {
      e.preventDefault();
      globalDeferredPrompt = e as BeforeInstallPromptEvent;
      listeners.forEach((fn) => fn());
    } catch {
      // Ignore
    }
  });

  window.addEventListener('appinstalled', () => {
    globalIsInstalled = true;
    globalDeferredPrompt = null;
    listeners.forEach((fn) => fn());
  });
}

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(
    () => globalDeferredPrompt
  );
  const [isInstalled, setIsInstalled] = useState<boolean>(
    () => globalIsInstalled || checkIsStandalone()
  );
  const [platformInfo, setPlatformInfo] = useState<{
    isIOS: boolean;
    isAndroid: boolean;
    isMacOS: boolean;
    isDesktop: boolean;
  }>(() => {
    if (typeof window === 'undefined') {
      return { isIOS: false, isAndroid: false, isMacOS: false, isDesktop: true };
    }
    const ua = (window.navigator?.userAgent || '').toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua) && !(window as unknown as { MSStream?: unknown })?.MSStream;
    const isAndroid = /android/.test(ua);
    const isMacOS = /macintosh|mac os x/.test(ua) && !isIOS;
    return {
      isIOS,
      isAndroid,
      isMacOS,
      isDesktop: !isIOS && !isAndroid,
    };
  });

  useEffect(() => {
    const syncState = () => {
      setDeferredPrompt(globalDeferredPrompt);
      setIsInstalled(globalIsInstalled || checkIsStandalone());
    };

    syncState();
    listeners.add(syncState);

    try {
      const ua = (window.navigator?.userAgent || '').toLowerCase();
      const isIOS = /iphone|ipad|ipod/.test(ua) && !(window as unknown as { MSStream?: unknown })?.MSStream;
      const isAndroid = /android/.test(ua);
      const isMacOS = /macintosh|mac os x/.test(ua) && !isIOS;
      setPlatformInfo({
        isIOS,
        isAndroid,
        isMacOS,
        isDesktop: !isIOS && !isAndroid,
      });
    } catch {
      // Ignore
    }

    let mediaQuery: MediaQueryList | null = null;
    const handleMediaChange = (e: { matches?: boolean }) => {
      if (e && e.matches) {
        globalIsInstalled = true;
        globalDeferredPrompt = null;
        syncState();
      }
    };

    try {
      if (typeof window !== 'undefined' && window.matchMedia) {
        mediaQuery = window.matchMedia('(display-mode: standalone)');
        if (mediaQuery) {
          if (typeof mediaQuery.addEventListener === 'function') {
            mediaQuery.addEventListener('change', handleMediaChange as EventListener);
          } else if (
            typeof (mediaQuery as unknown as { addListener?: (fn: (e: { matches?: boolean }) => void) => void }).addListener === 'function'
          ) {
            (mediaQuery as unknown as { addListener: (fn: (e: { matches?: boolean }) => void) => void }).addListener(handleMediaChange);
          }
        }
      }
    } catch {
      // Ignore matchMedia errors
    }

    return () => {
      listeners.delete(syncState);
      try {
        if (mediaQuery) {
          if (typeof mediaQuery.removeEventListener === 'function') {
            mediaQuery.removeEventListener('change', handleMediaChange as EventListener);
          } else if (
            typeof (mediaQuery as unknown as { removeListener?: (fn: (e: { matches?: boolean }) => void) => void }).removeListener === 'function'
          ) {
            (mediaQuery as unknown as { removeListener: (fn: (e: { matches?: boolean }) => void) => void }).removeListener(handleMediaChange);
          }
        }
      } catch {
        // Ignore cleanup errors
      }
    };
  }, []);

  const install = async () => {
    const promptEvent = globalDeferredPrompt || deferredPrompt;
    if (!promptEvent) return false;
    try {
      await promptEvent.prompt();
      const { outcome } = await promptEvent.userChoice;
      if (outcome === 'accepted') {
        globalIsInstalled = true;
        globalDeferredPrompt = null;
        listeners.forEach((fn) => fn());
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
    isIOS: platformInfo.isIOS,
    isAndroid: platformInfo.isAndroid,
    isMacOS: platformInfo.isMacOS,
    isDesktop: platformInfo.isDesktop,
    install,
  };
}
