import React from "react";

// interface Props {}

function Search() {
  // const {} = props

  return (
    <section className="bg-amber-50 dark:bg-neutral-900 flex flex-col items-center p-4 lg:px-40 border-y-2 border-gray-200 dark:border-neutral-700">
      <input
        className="bg-amber-50 p-4 mt-6 mb-12 lg:mx-40 rounded-lg shadow-md w-full lg:w-[50%] border-2 border-neutral-200 dark:border-neutral-600 focus:outline-amber-600 dark:bg-neutral-800  dark:text-gray-200"
        type="search"
        placeholder="Search for any construction terms..."
      />
    </section>
  );
}

export default Search;
