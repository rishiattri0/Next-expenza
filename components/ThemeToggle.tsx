"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="relative w-14 h-8 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md border border-gray-300 dark:border-gray-700">
        <div className="absolute top-0.5 left-0.5 w-7 h-7 bg-white dark:bg-gray-900 rounded-full shadow flex items-center justify-center">
          <span className="text-sm">🌙</span>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full shadow-md border border-gray-300 dark:border-gray-700 transition-all duration-300 group hover:shadow-[0_0_8px_rgba(168,85,247,0.6)]"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Toggle Knob */}
      <div
        className={`absolute top-0.5 w-7 h-7 rounded-full shadow-md flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 ${
          theme === "light"
            ? "left-0.5 bg-white text-yellow-500"
            : "left-6 bg-gray-900 text-purple-400"
        }`}
      >
        {theme === "light" ? "☀️" : "🌙"}
      </div>

      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none text-xs text-gray-500 dark:text-gray-400">
        <span className={`${theme === "light" ? "opacity-0" : "opacity-40"}`}>
          ☀️
        </span>
        <span className={`${theme === "light" ? "opacity-40" : "opacity-0"}`}>
          🌙
        </span>
      </div>
    </button>
  );
}
