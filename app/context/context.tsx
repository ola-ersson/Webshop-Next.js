'use client';

import { useContext, createContext, useState, ReactNode } from 'react';

interface AppProviderProps {
  children: ReactNode;
}
type AppState = {};

type AppContextType = AppState & {};

const AppContext = createContext<AppContextType | undefined>(undefined);

export default function AppProvider({ children }: AppProviderProps) {
  const value: AppContextType = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
