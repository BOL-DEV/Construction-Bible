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
  const data = await getCategoryData("Electrical & Plumbing");

  return (
    <div className="flex flex-col bg-amber-50 dark:bg-neutral-900 px-5 py-10 lg:px-40 lg:py-12 gap-4 border-b border-gray-200 dark:border-neutral-700">
      <BackBtn />
      <h1 className="text-4xl font-bold dark:text-white">
        Electrical & Plumbing
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 p-2">
        {data.map((term: Term) => (
          <TermCard
            key={term.name}
            title={term.name}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJmg4YOAeQ2g_M_Fq0wg0oUUHmSAMhM9SFQ&s"
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
