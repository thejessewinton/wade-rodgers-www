import { create } from "zustand";

type UseVisibleElement = {
  visibleElementId: string | null;
  setVisibleElementId: (id: string | null) => void;
};

export const useVisibleElement = create<UseVisibleElement>((set) => ({
  visibleElementId: "selected-works",
  setVisibleElementId: (id) => {
    window.location.hash = id as string;
    set({ visibleElementId: id });
  },
}));
