import { createContext, useContext } from 'react';
import { create } from 'zustand';

interface AuthState {
  userEmail: string | null;
  userRole: string | null;
  setUser: (email: string, role: string) => void;
  clearUser: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  userEmail: 'usuario@ejemplo.com',
  userRole: 'Operador',
  setUser: (email: string, role: string) => set({ userEmail: email, userRole: role }),
  clearUser: () => set({ userEmail: null, userRole: null }),
}));

const AuthContext = createContext<AuthState | null>(null);

export const useAuth = () => {
  const store = useAuthStore();
  if (!store) throw new Error('useAuth must be used within AuthProvider');
  return store;
};