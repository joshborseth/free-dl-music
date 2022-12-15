import { type NextPage } from "next";
import Footer from "../components/Footer";
import DesktopNav from "../components/Drawer/DesktopNav";
import MobileNav from "../components/Drawer/MobileNav";
import Head from "next/head";

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
            <section className="grid min-h-screen w-full place-items-center">
              <article className="flex flex-col items-center">
                <h1 className="text-center text-4xl font-bold">
                  Free Drumline Music
                </h1>
                <p className="text-center">
                  A free, open-source database of drumline music.
                </p>
              </article>
            </section>
            <section className="grid min-h-[20rem] grid-cols-3 bg-base-200">
              <h2 className="col-span-3 flex items-center justify-center text-center text-2xl">
                Our top songs
              </h2>
              <TopSong songName="Song 1" />
              <TopSong songName="Song 2" />
              <TopSong songName="Song 3" />
            </section>
          </main>
          <Footer />
        </div>
        <MobileNav />
      </div>
    </div>
  );
};
const TopSong = ({ songName }: { songName: string }) => {
  return (
    <div className="mx-5 rounded-md border bg-base-100">
      <h2 className="text-xl">{songName}</h2>
    </div>
  );
};

export default Index;
