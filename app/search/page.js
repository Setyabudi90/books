"use client";
import { SearchDataBooks } from "@/lib/data";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});
const Page = ({ searchParams: { query } }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const data = await SearchDataBooks(query);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <main className={poppins.className}>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold p-4">Result for: {query}...</h1>
        <Link href={`/`} className="underline text-yellow-500 font-bold p-4">
          Kembali
        </Link>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 p-4">
        {data.map((datas, index) => (
          <Link href={`/book/${datas?.id}`} key={index} className="md:px-2">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={datas?.imageUrl}
                alt={datas?.title}
                width={200}
                height={300}
                className="w-full max-h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                <h1 className="text-white text-lg font-semibold">
                  {datas?.title}
                </h1>
                <p className="text-white mt-2 text-[10px]">{datas?.authors}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Page;
