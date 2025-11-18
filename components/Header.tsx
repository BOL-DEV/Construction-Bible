"use client";

import Link from "next/link";
import React from "react";
import { BiHeart, BiSun } from "react-icons/bi";

// interface Props {
//   title: string;
// }

function Header() {
  const handleTheme = () => {
    const html = document.documentElement;

    console.log(html);

    html.classList.toggle("dark");
  };

  // const { title } = props;

  return (
    <nav className="flex items-center justify-between p-4 lg:px-40 border-b w-full bg-amber-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200">
      <Link href="/">
        <div className="flex items-center gap-3">
          <h1 className="bg-amber-600 border-0 rounded-lg pointer p-3">CB</h1>
          <div>
            <h2 className="lg:text-xl text-md font-bold">Construction Bible</h2>
            <p className="text-sm text-gray-400">Building Knowledge Base</p>
          </div>
        </div>
      </Link>

      <div className="flex items-center gap-10">
        <h2 className="flex items-center gap-2.5 hover:bg-gray-400/20 p-2 rounded-lg cursor-pointer">
          <BiHeart /> <span className="hidden lg:flex">Favorites</span>
        </h2>

        <BiSun
          className=" text-4xl hover:bg-gray-400/20 p-2 rounded-lg cursor-pointer"
          onClick={handleTheme}
        />
      </div>
    </nav>
  );
}

export default Header;
