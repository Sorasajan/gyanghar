"use client";

import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "./context/themeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="bg-slate-200 dark:bg-slate-900 p-1 rounded-full cursor-pointer shadow-xl"
    >
      {theme === "light" ? <DarkMode /> : <LightMode />}
    </button>
  );
}
