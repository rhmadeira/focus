import { create } from "zustand";
import { persist } from "zustand/middleware";

type TThemeApp = {
  isDarkTheme: boolean;
  toggleThemeApp: () => void;
};

export const useThemeApp = create(
  persist<TThemeApp>(
    (set) => ({
      isDarkTheme: false,
      toggleThemeApp: () =>
        set((state) => ({ isDarkTheme: !state.isDarkTheme })),
    }),
    {
      name: "themeApp",
    }
  )
);
