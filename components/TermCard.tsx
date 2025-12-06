import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
  definition: string;
  usage: string;
  relatedTerms: React.ReactNode[];
}

function TermCard(props: Props) {
  const {
    title,
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJmg4YOAeQ2g_M_Fq0wg0oUUHmSAMhM9SFQ&s",
    definition,
    usage,
    relatedTerms,
  } = props;

  return (
    <div className=" bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-gray-200 dark:border-neutral-700">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full aspect-video object-cover rounded-t-lg"
      />

      <div className="p-6 flex flex-col gap-6">
        <h2 className="text-xl font-semibold dark:text-white ">{title}</h2>
        <div className="flex flex-col gap-2">
          <h4 className="text-amber-500 font-semibold">Definition</h4>
          <p className="text-md dark:text-gray-400">{definition}</p>
        </div>
        <div>
          <h4 className="text-amber-500 font-semibold">
            Usage in Construction
          </h4>
          <p className="text-md dark:text-gray-400">{usage}</p>
        </div>
        <div className="border-t border-neutral-300 dark:border-neutral-700 pt-2.5">
          <h4 className="text-amber-500 font-semibold">Related Terms</h4>
          <div className="flex flex-wrap gap-3 mt-2">
            {relatedTerms.map((term, index) => (
              <p
                className="text-sm p-2 font-semibold bg-gray-300 dark:bg-neutral-700 dark:text-gray-200 rounded-xl"
                key={index}
              >
                {!term
                  ? "No Related Terms"
                  : String(term)
                      .replace(/-/g, " ")
                      .replace(/^\w/, (c) => c.toUpperCase())}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermCard;
