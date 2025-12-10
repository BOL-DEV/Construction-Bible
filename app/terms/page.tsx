import BackBtn from "@/components/BackBtn";
import TermCard from "@/components/TermCard";
import SearchInput from "@/components/SearchInput";
import { getAllTerms, getTermByName, Terms } from "@/helper";
import React from "react";

type SearchParams = { q?: string };

interface Props {
  searchParams?: Promise<SearchParams> | SearchParams;
}

const Page = async ({ searchParams }: Props) => {
  const isPromise =
    searchParams &&
    typeof (searchParams as Promise<SearchParams>).then === "function";
  const sp: SearchParams | undefined = isPromise
    ? await (searchParams as Promise<SearchParams>)
    : (searchParams as SearchParams | undefined);
  const query = sp?.q || "";
  const data: Terms[] = query
    ? await getTermByName(query)
    : await getAllTerms();

  return (
    <div className="flex flex-col bg-amber-50 dark:bg-neutral-900 px-5 py-10 lg:px-40 lg:py-12 gap-7 border-b border-gray-200 dark:border-neutral-700">
      <BackBtn />
      <SearchInput defaultValue={query} />
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold dark:text-white">
          All Construction Terms
        </h1>
        <p className="dark:text-neutral-400">{data.length} terms available</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 ">
        {data.map((term: Terms) => (
          <TermCard
            key={term.id ?? term.name}
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
