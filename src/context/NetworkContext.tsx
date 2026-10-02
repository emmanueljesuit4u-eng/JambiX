/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import {
  flushSyncQueue,
  getSyncQueue,
  getSimulatedOffline,
  setSimulatedOffline as storeSimulatedOffline,
  getLastSyncTime,
} from '../lib/offlineStorage';
import { auth } from '../lib/firebase';

interface NetworkContextType {
  isOnline: boolean;
  isSimulatedOffline: boolean;
  effectiveOnline: boolean; // false if physical offline OR student toggled offline mode
  pendingSyncCount: number;
  lastSyncedAt: string | null;
  toggleSimulatedOffline: () => void;
  syncNow: () => Promise<{ syncedCount: number; errorsCount: number }>;
  isSyncing: boolean;
}

const NetworkContext = createContext<NetworkContextType | undefined>(undefined);

export const NetworkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOnline, setIsOnline] = useState<boolean>(() => {
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  });

  const [isSimulatedOffline, setIsSimulatedOfflineState] = useState<boolean>(() => {
    return getSimulatedOffline();
  });

  const [pendingSyncCount, setPendingSyncCount] = useState<number>(0);
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const isSyncingRef = React.useRef(false);

  // Refresh pending count
  const refreshPendingCount = useCallback(() => {
    const queue = getSyncQueue();
    setPendingSyncCount(queue.length);
    setLastSyncedAt(getLastSyncTime());
  }, []);

  // Sync execution - stable reference, guarded by isSyncingRef to prevent dependency loops
  const syncNow = useCallback(async () => {
    if (isSyncingRef.current) return { syncedCount: 0, errorsCount: 0 };
    isSyncingRef.current = true;
    setIsSyncing(true);
    try {
      const res = await flushSyncQueue();
      refreshPendingCount();
      return res;
    } finally {
      isSyncingRef.current = false;
      setIsSyncing(false);
    }
  }, [refreshPendingCount]);

  const syncNowRef = React.useRef(syncNow);
  syncNowRef.current = syncNow;

  // Listen to browser network state
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      if (!isSimulatedOffline) {
        syncNowRef.current();
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial check & periodic queue count poll
    refreshPendingCount();
    const interval = setInterval(refreshPendingCount, 5000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
    };
  }, [isSimulatedOffline, refreshPendingCount]);

  // Auto-sync once on auth change when online (tracks previous user to prevent re-triggering loops)
  const prevSyncedUidRef = React.useRef<string | null>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      const currentUid = user?.uid || null;
      if (user && currentUid !== prevSyncedUidRef.current && isOnline && !isSimulatedOffline) {
        prevSyncedUidRef.current = currentUid;
        syncNowRef.current();
      } else if (!user) {
        prevSyncedUidRef.current = null;
      }
    });
    return () => unsubscribe();
  }, [isOnline, isSimulatedOffline]);

  const toggleSimulatedOffline = () => {
    const newVal = !isSimulatedOffline;
    setIsSimulatedOfflineState(newVal);
    storeSimulatedOffline(newVal);
    if (!newVal && isOnline) {
      syncNow();
    }
  };

  const effectiveOnline = isOnline && !isSimulatedOffline;

  return (
    <NetworkContext.Provider
      value={{
        isOnline,
        isSimulatedOffline,
        effectiveOnline,
        pendingSyncCount,
        lastSyncedAt,
        toggleSimulatedOffline,
        syncNow,
        isSyncing,
      }}
    >
      {children}
    </NetworkContext.Provider>
  );
};

export function useNetwork() {
  const context = useContext(NetworkContext);
  if (!context) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }
  return context;
}
