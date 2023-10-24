import NavBar from "@/components/navbar";
import Services from "@/components/services";
import { checkAuth } from "@/lib/auth";
import { getOrCreateDBUser } from "@/lib/prisma/users/index";
//
export default async function Home() {
  const { id, user } = await checkAuth();
  const dbUser = await getOrCreateDBUser({ id, user });
  console.log("dbUser: ", dbUser);
  return (
    <main>
      <NavBar />
      <div className="grid h-screen items-center justify-center">
        <Services />
      </div>
    </main>
  );
}
