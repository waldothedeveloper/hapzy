export type UserAccount = {
  id?: string;
  userId: string;
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
};
