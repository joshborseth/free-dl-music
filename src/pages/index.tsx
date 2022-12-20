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
            <section className="flex min-h-[20rem] flex-wrap justify-evenly gap-2 bg-base-200 sm:pb-16">
              <h2 className="col-span-3 my-4 flex w-full items-center justify-center text-center text-2xl">
                Todays Top Songs
              </h2>
              <TopSong
                songName="Song 1"
                songImage="https://placeimg.com/200/400/nature/grayscale" // This is a placeholder image
              />
              <TopSong
                songName="Song 2"
                songImage="https://placeimg.com/200/400/nature/grayscale" // This is a placeholder image
              />
              <TopSong
                songName="Song 3"
                songImage="https://placeimg.com/200/400/nature/grayscale" // This is a placeholder image
              />
            </section>
            <section className="h-96">
              <h2 className="mt-5 text-center text-2xl">Top Categories</h2>
            </section>
          </main>
          <Footer />
        </div>
        <MobileNav />
      </div>
    </div>
  );
};
const TopSong = ({
  songName,
  songImage,
}: {
  songName: string;
  songImage: string;
}) => {
  return (
    <div className="mx-5 flex flex-col items-center rounded-md border bg-base-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
      <h2 className="text-xl">{songName}</h2>
      <Image
        src={songImage}
        width="150"
        height="250"
        alt="Image of popular song"
      />
    </div>
  );
};

export default Index;
