import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ShopIconBtn() {
  return (
    <Link
      href="/your/shop/dashboard"
      className="relative ml-5 shrink-0 rounded-full bg-white p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View your events store</span>
      <BuildingStorefrontIcon className="h-6 w-6 text-slate-400" />
    </Link>
  );
}
