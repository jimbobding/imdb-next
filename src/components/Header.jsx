import React from "react";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

function Header() {
  return (
    <div className="flex justify-between p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link href="{/}" className="flex gap-4"></Link>
      <div className="flex gap-1 items-center">
        <span className="text-2xl font-bold bg-ambeer-500 py-1 px-2 rounded-lg">
          IMDB
        </span>
        <span className="text-xl hidden sm:inline ">Clone</span>
      </div>
    </div>
  );
}

export default Header;
