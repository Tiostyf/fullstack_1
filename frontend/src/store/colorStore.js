import { create } from "zustand";

export const useColorStore = create((set) => ({
  bgColor: "#ffffff", // default background color
  setBgColor: (color) => set({ bgColor: color }),
}));
