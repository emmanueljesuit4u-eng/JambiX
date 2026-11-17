import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Download, Share2, X, Smartphone, Monitor, Laptop } from 'lucide-react';
import { usePWAInstall } from '../../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'compact' | 'standard' | 'menu';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = '',
  variant = 'compact',
}) => {
  const { isInstallable, isInstalled, isIOS, isDesktop, isMacOS, install } = usePWAInstall();
  const [showGuideModal, setShowGuideModal] = useState(false);

  // If already installed or running in standalone mode, hide button completely
  if (isInstalled) {
    return null;
  }

  const handleClick = async () => {
    if (isInstallable) {
      const outcome = await install();
      if (!outcome) {
        setShowGuideModal(true);
      }
    } else {
      setShowGuideModal(true);
    }
  };

  const buttonClasses =
    variant === 'menu'
      ? `w-full px-3 py-2 rounded-xl text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50/90 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between gap-2 transition-colors cursor-pointer ${className}`
      : variant === 'standard'
      ? `inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 shadow-sm transition-all cursor-pointer shrink-0 border border-emerald-600/50 ${className}`
      : `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 shadow-xs transition-all cursor-pointer shrink-0 border border-emerald-600/50 ${className}`;

  const modalContent = showGuideModal ? (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pwa-install-guide-title"
      onClick={() => setShowGuideModal(false)}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-2xl space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-black text-sm shadow-xs shrink-0">
              J
            </div>
            <div>
              <h3 id="pwa-install-guide-title" className="text-sm font-bold text-slate-900 dark:text-white">
                Install JAMBiX App
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Works offline on Mobile &amp; Desktop
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowGuideModal(false)}
            aria-label="Close install instructions"
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isIOS ? (
          /* iOS Safari Guide */
          <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2.5 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-bold text-xs">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>iPhone / iPad (Safari):</span>
            </div>
            <p className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                1
              </span>
              <span>
                Tap the <strong>Share</strong> button <Share2 className="w-3.5 h-3.5 inline mx-0.5 text-emerald-600" /> in Safari&apos;s toolbar.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                2
              </span>
              <span>
                Scroll down and tap <strong>Add to Home Screen</strong>.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                3
              </span>
              <span>
                Tap <strong>Add</strong> to launch JAMBiX full-screen from your Home Screen.
              </span>
            </p>
          </div>
        ) : isDesktop ? (
          /* Desktop Chrome / Edge / Safari Guide */
          <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2.5 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-bold text-xs">
              <Laptop className="w-4 h-4 text-emerald-600" />
              <span>Desktop (Chrome, Edge{isMacOS ? ', or Safari' : ''}):</span>
            </div>
            <p className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                1
              </span>
              <span>
                Click the <strong>Install icon (⊕)</strong> on the right side of the browser address bar.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                2
              </span>
              <span>
                {isMacOS
                  ? 'Or in Safari, click File → Add to Dock (or Share → Add to Dock).'
                  : 'Or open the browser menu (⋮) and choose "Install JAMBiX…".'}
              </span>
            </p>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold text-[11px]">
              <Smartphone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>On Android/iPhone, open browser menu / Share → Add to Home Screen.</span>
            </div>
          </div>
        ) : (
          /* Android Chrome & Mobile Browser Guide */
          <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2.5 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-bold text-xs">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>Android (Chrome / Edge):</span>
            </div>
            <p className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                1
              </span>
              <span>
                Tap the <strong>three dots menu (⋮)</strong> at the top right of your browser.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                2
              </span>
              <span>
                Tap <strong>&ldquo;Install app&rdquo;</strong> or <strong>&ldquo;Add to Home screen&rdquo;</strong>.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                3
              </span>
              <span>
                JAMBiX will appear on your home screen and app drawer with full offline support.
              </span>
            </p>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold text-[11px]">
              <Monitor className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Desktop Chrome / Edge: Click the install icon (⊕) in the address bar.</span>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          {isInstallable && (
            <button
              type="button"
              onClick={async () => {
                await install();
                setShowGuideModal(false);
              }}
              className="flex-1 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install Now</span>
            </button>
          )}
          <button
            type="button"
            onClick={() => setShowGuideModal(false)}
            className={`py-2.5 text-xs font-semibold rounded-xl transition-colors cursor-pointer ${
              isInstallable
                ? 'px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                : 'w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold'
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        title="Install JAMBiX as an App on Mobile or Desktop"
        aria-label="Install JAMBiX App"
        className={buttonClasses}
      >
        <span className="flex items-center gap-2">
          <Download className="w-3.5 h-3.5 shrink-0" />
          <span>Install App</span>
        </span>
        {variant === 'menu' && (
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-600 text-white">
            PWA
          </span>
        )}
      </button>

      {modalContent && typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null}
    </>
  );
};
