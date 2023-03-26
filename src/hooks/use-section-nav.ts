import { create } from "zustand";

type SectionNavState = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export const useSectionNav = create<SectionNavState>((set) => ({
  activeSection: "selected-works",
  setActiveSection: (activeSection) => set({ activeSection }),
}));
