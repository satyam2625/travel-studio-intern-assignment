import create from "zustand";

type UiState = {
  search: string;
  setSearch: (s: string) => void;
};

export const useUiStore = create<UiState>((set) => ({
  search: "",
  setSearch: (s: string) => set({ search: s }),
}));
