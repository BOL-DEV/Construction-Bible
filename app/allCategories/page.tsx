import BackBtn from "@/components/BackBtn";
import TermCard from "@/components/TermCard";
import { getAllTerms } from "@/helper";
import React from "react";

interface Terms {
  id: string;
  name: string;
  definition: string;
  image: string;
  usage: string;
  category: string;
  relatedTerms: string[];
}
[];

const Page = async () => {
  const termsData = await getAllTerms();

  const data = termsData.sort((a: Terms, b: Terms) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="flex flex-col bg-amber-50 dark:bg-neutral-900 px-5 py-10 lg:px-40 lg:py-12 gap-7 border-b border-gray-200 dark:border-neutral-700">
      <BackBtn />
      <input
        className="bg-amber-50 p-4  rounded-lg shadow-md w-full lg:w-[50%] border border-neutral-200 dark:border-neutral-600 focus:outline-amber-600 dark:bg-neutral-800  dark:text-gray-200"
        type="search"
        placeholder="Filter construction terms..."
        // onChange={handleSearch}
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold dark:text-white">
          All Construction Terms
        </h1>
        <p className="dark:text-neutral-400">1000+ terms available</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 ">
        {data.map((term: Terms) => (
          <TermCard
            key={term.name}
            title={term.name}
            image={term.image}
            definition={term.definition}
            usage={term.usage}
            relatedTerms={term.relatedTerms}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
