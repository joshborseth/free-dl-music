import { type NextPage } from "next";
import Footer from "../components/Footer";
import DesktopNav from "../components/Drawer/DesktopNav";
import MobileNav from "../components/Drawer/MobileNav";

const Index: NextPage = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <DesktopNav />
          <main className="relative">
            <div className="absolute top-0 right-0 z-10"></div>
            <div className="grid min-h-screen w-full place-items-center">
              hero image & stuff
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
