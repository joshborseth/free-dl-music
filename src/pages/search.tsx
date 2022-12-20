/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextPage } from "next";
import DesktopNav from "../components/Drawer/DesktopNav";
import Footer from "../components/Footer";
import MobileNav from "../components/Drawer/MobileNav";
import { useState } from "react";
import Results from "../components/Results";
import Head from "next/head";
const Search: NextPage = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Head>
        <title>FDL | Search</title>
      </Head>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <DesktopNav />
          <main className="relative grid min-h-screen">
            <form
              onSubmit={(e: any) => {
                e.preventDefault();
                setSearch(e.target[0].value);
              }}
              className="relative mt-10 flex h-screen w-5/6 flex-wrap justify-center justify-self-center lg:w-2/3"
            >
              <input
                type="text"
                placeholder="Search"
                className="z-20 h-10 w-full rounded-md border px-2 text-2xl shadow-lg focus:outline-none"
              />
              <button
                className="absolute top-0 right-0 z-20 mt-2 mr-1 rounded bg-base-200 px-1 text-xs text-base-content"
                onDoubleClick={(e: any) => {
                  e.preventDefault();
                  e.target.form[0].value = "";
                  setSearch("");
                }}
              >
                Clear
              </button>
              <Results input={search} />
            </form>
          </main>
          <Footer />
        </div>
        <MobileNav />
      </div>
    </div>
  );
};
export default Search;
