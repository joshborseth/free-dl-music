import { type NextPage } from "next";
import DesktopNav from "../components/Drawer/DesktopNav";
import Footer from "../components/Footer";
import MobileNav from "../components/Drawer/MobileNav";
const About: NextPage = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <DesktopNav />
          <main className="relative min-h-screen">
            <div className="absolute top-0 right-0 z-10"></div>
            <h2 className="my-2 text-center text-4xl">
              About Free Drumline Music
            </h2>
            <p className="mt-5 px-5">
              Free Drumline Music is a free, open-source database of drumline
              music. It is a project of the Free Drumline Music Foundation, The
              project is maintained by Jedsen and Joshua Borseth. The project is
              open-source, and the code is available on GitHub. The project is
              free to use, and all music is in the public domain. The project is
              not affiliated with any drumline organization.
            </p>
          </main>
          <Footer />
        </div>
        <MobileNav />
      </div>
    </div>
  );
};

export default About;
