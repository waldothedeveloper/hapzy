import { auth, currentUser } from "@clerk/nextjs";

export const checkAuth = async () => {
  const { userId } = auth();
  if (!userId) {
    return { id: null, user: null };
  }

  const clerkUser = await currentUser();

  return { id: userId, user: clerkUser };
};
