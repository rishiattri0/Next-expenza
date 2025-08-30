"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "@/contexts/ThemeContext";

interface ClerkThemeProviderProps {
  children: React.ReactNode;
}

export default function ClerkThemeProvider({
  children,
}: ClerkThemeProviderProps) {
  const { theme } = useTheme();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === "dark" ? dark : undefined,
        variables: {
          // Emerald accent for both modes
          colorPrimary: theme === "dark" ? "#10b981" : "#059669",
          // Backgrounds
          colorBackground: theme === "dark" ? "#000000" : "#ffffff",
          // Inputs
          colorInputBackground: theme === "dark" ? "#111111" : "#f9fafb",
          colorInputText: theme === "dark" ? "#f3f4f6" : "#111111",
          // Rounded corners
          borderRadius: "0.75rem",
        },
        elements: {
          // Buttons
          formButtonPrimary: {
            backgroundColor: theme === "dark" ? "#10b981" : "#059669",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: theme === "dark" ? "#059669" : "#047857",
            },
          },
          // Cards (sign-in / sign-up)
          card: {
            backgroundColor:
              theme === "dark" ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.85)",
            border:
              theme === "dark"
                ? "1px solid rgba(255,255,255,0.1)"
                : "1px solid rgba(0,0,0,0.1)",
            boxShadow:
              theme === "dark"
                ? "0 10px 30px rgba(0,0,0,0.6)"
                : "0 10px 25px rgba(0,0,0,0.1)",
            backdropFilter: "blur(12px)",
          },
          // Titles / Subtitles
          headerTitle: {
            color: theme === "dark" ? "#ffffff" : "#111111",
            fontWeight: "600",
          },
          headerSubtitle: {
            color: theme === "dark" ? "#9ca3af" : "#6b7280",
          },
          // Social buttons (Google, GitHub etc.)
          socialButtonsBlockButton: {
            border:
              theme === "dark"
                ? "1px solid rgba(255,255,255,0.1)"
                : "1px solid rgba(0,0,0,0.1)",
            backgroundColor:
              theme === "dark" ? "rgba(20,20,20,0.6)" : "rgba(255,255,255,0.6)",
            backdropFilter: "blur(8px)",
          },
          // Divider
          dividerLine: {
            backgroundColor:
              theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
          },
          // Inputs
          formFieldInput: {
            backgroundColor:
              theme === "dark" ? "rgba(20,20,20,0.8)" : "rgba(249,250,251,0.9)",
            border:
              theme === "dark"
                ? "1px solid rgba(255,255,255,0.1)"
                : "1px solid rgba(0,0,0,0.1)",
            color: theme === "dark" ? "#f3f4f6" : "#111111",
          },
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
