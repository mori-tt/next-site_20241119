import { create } from "zustand";

interface MenuState {
  isOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  isOpen: false,
  openMobileMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMobileMenu: () => set({ isOpen: false }),
}));
