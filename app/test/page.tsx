// app/test/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Test() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  return <h1>Hello {user.firstName}</h1>;
}
