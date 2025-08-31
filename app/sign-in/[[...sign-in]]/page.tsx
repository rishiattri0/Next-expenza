// app/sign-in/[[...sign-in]]/page.tsx
"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-blue-900">
      <div className="p-6 w-full max-w-md rounded-2xl border border-neutral-800 shadow-xl bg-black/60 backdrop-blur-xl">
        <SignIn
          appearance={{
            elements: {
              card: "bg-transparent shadow-none",
              formButtonPrimary:
                "bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 transition",
              formFieldInput:
                "rounded-lg border border-neutral-700 bg-neutral-900 text-white focus:ring-2 focus:ring-blue-500",
              headerTitle: "text-2xl font-bold text-blue-400",
              headerSubtitle: "text-neutral-400",
            },
            layout: {
              logoImageUrl: "/logo.svg", // your logo
              socialButtonsPlacement: "bottom",
            },
          }}
        />
      </div>
    </main>
  );
}
