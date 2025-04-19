import { undefined } from "zod";
import { create } from "zustand";

type CoverImageStore = {
  url?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onReplace: (url: string) => void;
};

export const useCoverImage = create<CoverImageStore>((set) => ({
  url: "",
  isOpen: false,
  onOpen: () => set({ isOpen: true, url: "" }),
  onClose: () => set({ isOpen: false, url: "" }),
  onReplace: (url: string) => set({ isOpen: true, url }),
}));
