/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, ArrowRight, Loader2 } from 'lucide-react';
import { GoogleIcon } from '../common/GoogleIcon';

interface GoogleAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: { name: string; email: string }) => void;
}

export const GoogleAuthModal: React.FC<GoogleAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [customEmail, setCustomEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const mockAccounts = [
    {
      name: 'Chukwudi Adeleke',
      email: 'adeleke.chukwudi@gmail.com',
      avatar: 'CA',
      color: 'bg-emerald-600',
    },
    {
      name: 'Amina Bello',
      email: 'amina.bello@gmail.com',
      avatar: 'AB',
      color: 'bg-teal-600',
    },
  ];

  const handleSelectAccount = (account: { name: string; email: string }) => {
    setSelectedUser(account.email);
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess(account);
      onClose();
    }, 900);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customEmail || !customEmail.includes('@')) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess({
        name: customEmail.split('@')[0],
        email: customEmail,
      });
      onClose();
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
            <GoogleIcon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Sign in with Google</h3>
          <p className="text-xs text-slate-500 mt-1">
            Choose an account to continue to <span className="font-semibold text-slate-800">JAMBix</span>
          </p>
        </div>

        {isProcessing ? (
          <div className="py-10 flex flex-col items-center justify-center text-center">
            <Loader2 className="w-8 h-8 text-emerald-600 animate-spin mb-3" />
            <p className="text-sm font-semibold text-slate-800">Connecting to Google...</p>
            <p className="text-xs text-slate-500 mt-1">Verifying your candidate credentials</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              {mockAccounts.map((account) => (
                <button
                  key={account.email}
                  type="button"
                  onClick={() => handleSelectAccount(account)}
                  className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/40 transition-all text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full ${account.color} text-white flex items-center justify-center text-xs font-bold shrink-0`}
                    >
                      {account.avatar}
                    </div>
                    <div className="truncate">
                      <p className="text-xs font-semibold text-slate-800 group-hover:text-emerald-900">
                        {account.name}
                      </p>
                      <p className="text-[11px] text-slate-500 truncate">{account.email}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>

            <div className="relative my-3 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100" />
              </div>
              <span className="relative bg-white px-3 text-[11px] text-slate-400 uppercase tracking-wider font-medium">
                Or use another email
              </span>
            </div>

            <form onSubmit={handleCustomSubmit} className="space-y-2">
              <input
                type="email"
                placeholder="your.email@gmail.com"
                value={customEmail}
                onChange={(e) => setCustomEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <button
                type="submit"
                disabled={!customEmail}
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white text-xs font-medium rounded-xl transition-colors"
              >
                Continue with email
              </button>
            </form>

            <p className="text-[10px] text-slate-400 text-center leading-normal pt-2">
              To continue, Google will share your name, email address, and language preference with JAMBix.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
