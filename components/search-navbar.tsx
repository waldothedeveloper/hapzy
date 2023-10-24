"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function SearchNavbar() {
  return (
    <div className="min-w-0 flex-1 md:px-8 lg:col-span-6">
      <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
        <div className="w-full">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-slate-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full rounded-full border-0 bg-white py-1.5 pl-10 pr-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              placeholder="Find magic moments..."
              type="search"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
