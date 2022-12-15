import { type NextPage } from "next";
import DesktopNav from "../components/Drawer/DesktopNav";
import Footer from "../components/Footer";
import MobileNav from "../components/Drawer/MobileNav";
import Upload from "../components/Upload";
const Contribute: NextPage = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <DesktopNav />
          <main className="relative min-h-screen">
            <div className="absolute top-0 right-0 z-10"></div>
            <h2>Contribute</h2>
            <Upload />
          </main>
          <Footer />
        </div>
        <MobileNav />
      </div>
    </div>
  );
};

export default Contribute;
