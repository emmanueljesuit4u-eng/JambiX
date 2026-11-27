/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  BarChart3,
  Check,
  CheckCircle2,
  Copy,
  Share2,
  Users,
} from 'lucide-react';
import { auth } from '../../lib/firebase';
import {
  ReferralData,
  sanitizeActivationId,
  subscribeToMyReferrals,
} from '../../lib/firestoreService';
import { OfflineTestResult } from '../../lib/offlineStorage';

interface ReferralDashboardProps {
  user: {
    name?: string;
    email?: string;
    identifier?: string;
  };
  userTests: OfflineTestResult[];
  onBack: () => void;
  showToast: (msg: string) => void;
}

export const ReferralDashboard: React.FC<ReferralDashboardProps> = ({
  user,
  userTests,
  onBack,
  showToast,
}) => {
  const [referrals, setReferrals] = useState<ReferralData[]>([]);
  const [copied, setCopied] = useState(false);
  const [showPerformance, setShowPerformance] = useState(false);

  const referrerId = useMemo(() => {
    if (auth.currentUser?.uid) return auth.currentUser.uid;
    const raw = (user.email || user.identifier || user.name || 'student').trim();
    return sanitizeActivationId(raw);
  }, [user.email, user.identifier, user.name]);

  const referralLink = useMemo(() => {
    return `https://jambi-x.vercel.app/${encodeURIComponent(referrerId)}`;
  }, [referrerId]);

  useEffect(() => {
    if (!auth.currentUser?.uid) {
      setReferrals([]);
      return;
    }
    const unsubscribe = subscribeToMyReferrals(auth.currentUser.uid, (items) => {
      setReferrals(items);
    });
    return () => unsubscribe();
  }, [referrerId]);

  const countedReferrals = useMemo(
    () => referrals.filter((r) => Boolean(r.basicActivated)),
    [referrals]
  );

  const averagePerformancePct = useMemo(() => {
    if (!userTests || userTests.length === 0) return 0;
    const sumPct = userTests.reduce((acc, test) => {
      if (typeof test.percentage === 'number' && !Number.isNaN(test.percentage)) {
        return acc + test.percentage;
      }
      if (test.totalQuestions > 0) {
        return acc + (test.score / test.totalQuestions) * 100;
      }
      return acc;
    }, 0);
    return Math.round(sumPct / userTests.length);
  }, [userTests]);

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(referralLink);
      } else {
        const input = document.createElement('input');
        input.value = referralLink;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopied(true);
      showToast('Referral link copied to clipboard.');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      showToast('Could not copy link. Please copy it manually.');
    }
  };

  const handleShareLink = async () => {
    const shareText = `Register on JambiX and activate the UNIPORT Basic test drill using my referral link: ${referralLink}`;
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: 'Join JambiX',
          text: shareText,
          url: referralLink,
        });
        return;
      } catch {
        // User cancelled or share failed; fall back to copy
      }
    }
    await handleCopyLink();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-200 antialiased">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 py-3.5 sm:py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <h1 className="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight">
            Referral Dashboard
          </h1>
          <div className="w-16" aria-hidden="true" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto p-4 sm:p-6 space-y-5">
        {/* Unique Referral Link Card */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xs space-y-4">
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Your Unique Referral Link
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Share this link with a new person to register. A referral counts only when they activate the UNIPORT Basic test drill.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <input
              type="text"
              readOnly
              value={referralLink}
              onFocus={(e) => e.currentTarget.select()}
              aria-label="Unique referral link"
              className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 font-medium select-all focus:outline-hidden"
            />
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <button
                type="button"
                onClick={handleShareLink}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </section>

        {/* Performance Level Toggle Section */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Performance Level
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Calculated from your average test scores
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowPerformance((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer"
            >
              <BarChart3 className="w-4 h-4" />
              <span>{showPerformance ? 'Hide Performance Level' : 'View Performance Level'}</span>
            </button>
          </div>

          {showPerformance && (
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Average Test Score ({userTests.length} completed test{userTests.length === 1 ? '' : 's'})
                </span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 tabular-nums">
                  {averagePerformancePct}%
                </span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-emerald-600 transition-all duration-300"
                  style={{ width: `${Math.min(100, Math.max(0, averagePerformancePct))}%` }}
                />
              </div>
            </div>
          )}
        </section>

        {/* Referrals List Card */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xs space-y-4">
          <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Your Referrals
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 tabular-nums">
              Counted: {countedReferrals.length}
            </span>
          </div>

          {countedReferrals.length === 0 ? (
            <div className="py-8 text-center space-y-1">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                No activated referrals yet
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Share your link above. A referral counts as 1 and shows the person&apos;s name here once they register and activate the UNIPORT Basic test drill.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-slate-100 dark:divide-slate-800">
              {countedReferrals.map((item) => (
                <li
                  key={item.id}
                  className="py-3 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                      {item.referredName}
                    </p>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>+1 Activated</span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
};
