import Image from "next/image";
import Link from "next/link";
import { InputSearch } from "./InputSearch";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#0d161b] flex justify-between items-center p-2 shadow-md backdrop-blur-md shadow-slate-500 md:flex-row flex-col">
        <div className=" gap-2 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-4 font-bold text-2xl underline decoration-wavy decoration-red-300"
          >
            <Image
              width="40"
              height="40"
              src="https://img.icons8.com/3d-fluency/94/open-book--v1.png"
              alt="open-book--v1"
            />
            BOOKS
          </Link>
        </div>

        <div className="flex gap-3">
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
      </nav>
    </>
  );
};

export default Navbar;
