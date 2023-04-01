import { create } from "zustand";

type UseVisibleElement = {
  visibleElementId: string | null;
  setVisibleElementId: (id: string | null) => void;
};

export const useVisibleElement = create<UseVisibleElement>((set) => ({
  visibleElementId: null,
  setVisibleElementId: (id) => set({ visibleElementId: id }),
}));
