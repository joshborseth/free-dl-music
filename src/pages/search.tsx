/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextPage } from "next";
import DesktopNav from "../components/Drawer/DesktopNav";
import Footer from "../components/Footer";
import MobileNav from "../components/Drawer/MobileNav";
import { type FormEvent, useRef } from "react";
import Results from "../components/Results";
import Head from "next/head";
const Search: NextPage = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Head>
        <title>FDL | Search</title>
      </Head>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <DesktopNav />
          <main className="relative mx-auto grid min-h-screen w-2/3">
            <form
              onSubmit={(e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                if (searchRef.current) {
                  console.log("make request to get some sheets back");
                }
              }}
              className="flex items-center justify-center gap-2"
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-md border px-3 py-2 text-2xl shadow-lg"
                ref={searchRef}
              />
              <button
                className="rounded-md border bg-accent px-6 py-2 text-lg text-base-100 shadow-lg"
                type="button"
                onClick={() => {
                  if (searchRef.current) searchRef.current.value = "";
                }}
              >
                Clear
              </button>
            </form>
          </main>
          <Footer />
        </div>
        <MobileNav />
      </div>
    </>
  );
};
export default Search;
