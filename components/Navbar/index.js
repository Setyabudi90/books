import Image from "next/image";
import Link from "next/link";
import { InputSearch } from "./InputSearch";

const Navbar = () => {
  return (
    <>
      <header className="bg-[#0d161b] flex justify-between items-center p-2 shadow-md backdrop-blur-md shadow-slate-500 md:flex-row flex-col w-full">
        <div className="flex md:flex-row gap-2 flex-col justify-between md:items-center md:w-7/12 w-full">
          <Link
            href="/"
            className={`font-bold text-2xl text-color-primary flex items-center`}
          >
            <Image
              width="40"
              height="40"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/book.png"
              alt="book"
            />
            <span className="ml-2">私の図書館</span>
          </Link>
          <InputSearch />
        </div>

        <div className="hidden md:flex gap-3">
          <Link href="https://www.instagram.com/@i.setya_b">
            <Image
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/instagram-new--v1.png"
              alt="instagram-new--v1"
            />
          </Link>
          <Link href="https://threads.net/@i.setya_b">
            <Image
              width="48"
              height="48"
              src="https://img.icons8.com/pulsar-gradient/48/threads.png"
              alt="threads"
            />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
