"use client";
import { getDataById } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

const Page = ({ params: { id } }) => {
  const [data, setData] = useState();
  const fetchBookById = async () => {
    const books = await getDataById(id);
    setData(books);
  };

  useEffect(() => {
    fetchBookById();
  }, [id]);

  return (
    <div className="flex flex-col md:gap-2 py-4 md:mx-4 mx-2">
      <div className="grid md:grid-cols-1 gap-2 grid-cols-1">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={data?.imageUrl}
            alt={`${id}`}
            width={250}
            height={250}
            className="md:w-[400px] md:h-[400px] rounded object-cover"
          />
        </div>
        <div
          className="flex md:justify-center justify-start
items-center p-4 text-xl font-bold overflow-x-auto md:overflow-x-visible"
        >
          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-indigo-500">
            Authors: {data?.authors}
          </span>
          {data?.publisher ? (
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-indigo-500">
              Publisher: {data.publisher}
            </span>
          ) : (
            ""
          )}
          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-indigo-500">
            Category: {data?.categories[0]}
          </span>
          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-indigo-500">
            Popularity: {data?.pageCount}
          </span>
        </div>
        <div className="flex flex-col gap-2 py-4 md:justify-center justify-start px-5">
          <h3 className={`md:text-3xl text-xl text-color-primary font-bold`}>
            {data?.title}
          </h3>
          <p
            className={`max-w-[1000px] break-words text-justify`}
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
          <Link
            href={`${data?.infoLink}`}
            className="underline text-yellow-500"
          >
            Selengkapnya...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
