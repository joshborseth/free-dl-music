import { type NextPage } from "next";
import Footer from "../components/Footer";
import DesktopNav from "../components/Drawer/DesktopNav";
import MobileNav from "../components/Drawer/MobileNav";
import Head from "next/head";
import Image from "next/image";

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>FDL | Home</title>
      </Head>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <DesktopNav />
          <main className="relative">
            <div className="absolute top-0 right-0 z-10"></div>
            <div className="grid min-h-screen w-full place-items-center">
              <div className="flex flex-col items-center">
                <h1 className="text-center text-4xl font-bold">
                  Free Drumline Music
                </h1>
                <p className="text-center">
                  A free, open-source database of drumline music.
                </p>
              </div>
            </div>
          </main>
          <Footer />
        </div>
        <MobileNav />
      </div>
    </div>
  );
};

export default Index;
