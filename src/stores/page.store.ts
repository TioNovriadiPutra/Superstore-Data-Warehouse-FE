import { create } from "zustand";
import type { LinearFilterType } from "../types/state.type";

export const useLinearFilter = create<LinearFilterType>((set) => ({
  data: {
    label: "Bulanan",
    value: "monthly",
  },
  onChange: (data) => set({ data }),
}));
