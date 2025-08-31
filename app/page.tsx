"use client";
import { useUser } from "@clerk/nextjs";
import Guest from "@/components/Guest";

export default function HomePage() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    return <Guest />;
  }

  return (
    <div>
      <h1>home page</h1>
    </div>
  );
}
