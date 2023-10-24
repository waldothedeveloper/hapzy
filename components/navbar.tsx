"use client";

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import ShoppingCartButton from "@/components/cartIconBtn";
import CategoriesIconBtn from "@/components/categoriesIconBtn";
import ClerkUserBtn from "@/components/clerkUserBtn";
import FavoritesIconBtn from "@/components/favoritesIconBtn";
import NotificationsIconButton from "@/components/notificationsIconBtn";
import SearchNavbar from "@/components/search-navbar";
import ShopIconBtn from "@/components/shopIconBtn";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:grid md:grid-cols-12 md:gap-8">
          {/* logo */}
          <div className="flex md:col-span-2">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <span className="text-base font-bold uppercase leading-tight">
                  <span>
                    Magic 💍 <br />
                    Moments
                  </span>
                </span>
              </Link>
            </div>
          </div>
          {/* navbar search input mid or large screens */}
          <div className="hidden md:col-span-7 md:flex">
            <SearchNavbar />
          </div>
          {/* navbar items */}
          <div className="flex items-center justify-end md:col-span-3">
            <SignedIn>
              <FavoritesIconBtn />
              <NotificationsIconButton />
              <ShopIconBtn />
              <ClerkUserBtn />
              <ShoppingCartButton />
            </SignedIn>
            {/* signed out elements */}
            <SignedOut>
              <SignInButton>
                <button
                  type="button"
                  className="inline-flex items-center rounded-2xl px-3 py-2 text-sm text-slate-400 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Sign In
                </button>
              </SignInButton>

              <ShoppingCartButton />
            </SignedOut>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between md:hidden">
          <CategoriesIconBtn />
          {/* navbar search input small devices only */}
          <div className="min-w-0 flex-1">
            <SearchNavbar />
          </div>
        </div>
      </div>
    </>
  );
}
