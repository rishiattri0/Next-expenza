import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const checkUser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      return null;
    }

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (existingUser) {
      return existingUser;
    }

    // Safely handle optional fields
    const name =
      [user.firstName, user.lastName].filter(Boolean).join(" ") || null;
    const email = user.emailAddresses[0]?.emailAddress;

    if (!email) {
      throw new Error("Clerk user does not have an email address.");
    }

    // Create new user
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        email,
        name,
        imageUrl: user.imageUrl ?? null,
      },
    });

    return newUser;
  } catch (error) {
    console.error("❌ Error in checkUser:", error);
    return null;
  }
};
