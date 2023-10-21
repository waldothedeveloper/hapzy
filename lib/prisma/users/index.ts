import { User } from "@clerk/nextjs/server";
import prismadb from "@/lib/prisma/prisma";

const createDBUser = async ({
  firstName,
  lastName,
  middleName,
  id,
  email,
}: {
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  id: string;
  email: string;
}) => {
  try {
    const user = await prismadb.userAccount.create({
      data: {
        userId: id,
        firstName: firstName || "",
        lastName: lastName || "",
        middleName: middleName || "",
        email,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
};

export const getOrCreateDBUser = async ({
  id,
  user,
}: {
  id: string | null;
  user: User | null;
}) => {
  try {
    if (!id || !user) return new Error("No user or id");
    const dbUser = await prismadb.userAccount.findUnique({
      where: {
        userId: id,
      },
    });

    if (!dbUser) {
      //  create a new database user
      const { firstName, lastName, emailAddresses } = user;
      const newDBUser = await createDBUser({
        firstName,
        lastName,
        middleName: "",
        id,
        email: emailAddresses[0].emailAddress,
      });
      return newDBUser;
    }
    return dbUser;
  } catch (error) {
    return error;
  }
};
