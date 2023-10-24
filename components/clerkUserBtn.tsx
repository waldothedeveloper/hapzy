import { UserButton } from "@clerk/nextjs";

export default function ClerkUserBtn() {
  return (
    <div className="relative ml-5">
      <span className="absolute -inset-1.5" />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
