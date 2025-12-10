import BackBtn from "@/components/BackBtn";
import React from "react";
import TermCard from "@/components/TermCard";
import { getCategoryData } from "@/helper";

interface Term {
  id: string;
  name: string;
  definition: string;
  image: string;
  usage: string;
  category: string;
  relatedTerms: string[];
}

const Page = async () => {
  const data = await getCategoryData("Architectural Styles");

  return (
    <div className="flex flex-col bg-amber-50 dark:bg-neutral-900 px-5 py-10 lg:px-40 lg:py-12 gap-4 border-b border-gray-200 dark:border-neutral-700">
      <BackBtn />
      <h1 className="text-4xl font-bold dark:text-white">
        Architectural Styles
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 p-2">
        {data.map((term: Term) => (
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
