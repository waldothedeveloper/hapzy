import prismadb from "@/lib/prisma/prisma";
import { UserAccount } from "@/types/index";
import { User } from "@clerk/nextjs/server";

const createDBUser = async ({
  firstName,
  lastName,
  middleName,
  userId,
  email,
}: UserAccount) => {
  try {
    const user = await prismadb.userAccount.create({
      data: {
        userId,
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
    if (!id || !user) return;
    const dbUser = await prismadb.userAccount.findUnique({
      where: {
        userId: id,
      },
    });

    if (!dbUser) {
      //  create a new database user
      const { firstName, lastName, emailAddresses, id } = user;
      const newDBUser = await createDBUser({
        firstName,
        lastName,
        middleName: "",
        userId: id,
        email: emailAddresses[0].emailAddress,
      });
      return newDBUser;
    }
    return dbUser;
  } catch (error) {
    console.log(`PRISMA ERROR FINDING USER ${error}`);
    return error;
  }
};
