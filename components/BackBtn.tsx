import Link from "next/link";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

// interface Props {}

function BackBtn() {
  // const {} = props

  return (
    <Link href="/">
      <button className="flex items-center text-sm font-medium p-2.5 gap-3 w-fit rounded-sm text-gray-600 hover:bg-amber-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
        <IoMdArrowRoundBack /> Back to home
      </button>
    </Link>
  );
}

export default BackBtn;
