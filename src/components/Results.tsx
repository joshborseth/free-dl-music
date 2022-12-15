import Image from "next/image";
import { useState } from "react";

const Results = ({ input }: { input: string }) => {
  return (
    <div
      className={`absolute top-8 z-10 h-[75%] w-full rounded bg-base-200 pt-4 transition-all duration-500 ease-in-out ${
        input === "" ? "opacity-0" : "opacity-100"
      } overflow-auto`}
    >
      <SearchItem itemData={{ name: "test" }} />
      <SearchItem itemData={{ name: input }} />
      <SearchItem itemData={{ name: input }} />
      <SearchItem itemData={{ name: input }} />
      <SearchItem itemData={{ name: input }} />
      <SearchItem itemData={{ name: input }} />
      <SearchItem itemData={{ name: input }} />
    </div>
  );
};
const SearchItem = ({ itemData }: { itemData: { name: string } }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div
      className={`m-2 h-24 rounded bg-white p-5 ${
        loading && "animate-[pulse_1s_ease-in-out_infinite]"
      } flex justify-between`}
    >
      <p>{itemData.name}</p>
      <Image
        src="https://placeimg.com/260/400/arch" //Placeholder Image !!
        width="200"
        height="200"
        alt="Image of music"
        className=""
      />
    </div>
  );
};

export default Results;
