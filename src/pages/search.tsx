import { type NextPage } from "next";
import DesktopNav from "../components/Drawer/DesktopNav";
import Footer from "../components/Footer";
import MobileNav from "../components/Drawer/MobileNav";
const Search: NextPage = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <DesktopNav />
          <main className="relative min-h-screen">
            <div className="absolute top-0 right-0 z-10"></div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="mt-10 flex h-full w-full justify-center"
            >
              <input
                type="text"
                placeholder="🎵 Search 🎶"
                className="h-10 w-2/3 rounded-md border px-2 text-2xl focus:outline-none lg:w-1/2"
              />
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
