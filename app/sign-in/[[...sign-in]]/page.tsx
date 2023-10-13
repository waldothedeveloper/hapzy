import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <div className="overflow-hidden flex items-center justify-center absolute top-0 z-[-2] h-screen w-full transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
    <SignIn />
  </div>
}