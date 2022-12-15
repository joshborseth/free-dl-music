import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";

const error = (error: any) => {
  console.log(error);
  return (
    <>
      <div className="grid h-screen place-items-center">
        <h1 className="text-center text-xl">
          Oops Something Anti-Pog Happened <br />
          <Link href="/" className="block text-center text-2xl font-semibold">
            Return?
          </Link>
        </h1>

        <h2 className="fixed top-36 -z-10 text-[10rem] opacity-30 transition-all sm:text-[20rem] lg:text-[25rem]">
          404
        </h2>
      </div>
      <Footer />
    </>
  );
};

export default error;
