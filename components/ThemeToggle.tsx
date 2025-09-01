"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-6 rounded-full bg-slate-800 border border-slate-700"></div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-12 h-6  rounded-full border transition-all duration-300 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        ${
          theme === "dark"
            ? "bg-slate-950 border-slate-800 shadow-sm shadow-slate-800/40"
            : "bg-slate-100 border-slate-300 hover:bg-slate-200"
        }
      `}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Toggle Knob */}
      <div
        className={`
          absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300 transform
          ${
            theme === "light"
              ? "left-0.5 bg-gradient-to-br from-amber-400 to-amber-500 shadow-md"
              : "left-6 bg-gradient-to-br from-slate-500 to-slate-600 shadow-md shadow-slate-700/30"
          }
        `}
      />

      {/* Optional subtle icons (visually hidden but accessible) */}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
