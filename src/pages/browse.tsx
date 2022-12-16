import { type NextPage } from "next";
import Head from "next/head";
import DesktopNav from "../components/Drawer/DesktopNav";
import MobileNav from "../components/Drawer/MobileNav";
import Footer from "../components/Footer";

const Browse: NextPage = () => {
  return (
    <>
      <Head>
        <title>FDL | Search</title>
      </Head>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <DesktopNav />
          <main className="min-h-screen"></main>
          <Footer />
        </div>
        <MobileNav />
      </div>
    </>
  );
};

export default Browse;
