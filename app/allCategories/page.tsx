import BackBtn from "@/components/BackBtn";
import React from "react";

// interface Props {}

function Page() {
  // const {} = props

  return (
    <div className="flex flex-col bg-amber-50 dark:bg-neutral-900 p-4 lg:px-40 gap-4 border-b border-gray-200 dark:border-neutral-700">
      <BackBtn />
      <input
        className="bg-amber-50 p-4  rounded-lg shadow-md w-full lg:w-[50%] border border-neutral-200 dark:border-neutral-600 focus:outline-amber-600 dark:bg-neutral-800  dark:text-gray-200"
        type="search"
        placeholder="Filter construction terms..."
      />
    </div>
  );
}

export default Page;
