import React from "react";
// import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  terms: string;
  image?: React.ReactNode;
}

function CategoriesCard(Props: Props) {
  const { title, terms, image } = Props;

  const modifyedTitle = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/categories/${modifyedTitle}`}>
      <div
        key={title}
        className="group flex flex-col gap-3 border text-center border-gray-300 hover:border-amber-600 dark:border-neutral-700 rounded-lg p-14 hover:shadow-lg transition-shadow cursor-pointer bg-amber-50 dark:bg-neutral-900/40"
      >
        <div className="flex items-center justify-center text-3xl p-4 bg-gray-300 group-hover:bg-orange-400 dark:group-hover:text-black dark:bg-neutral-700  rounded-lg mx-auto">
          {image}
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-400">{terms}</p>
      </div>
    </Link>
  );
}

export default CategoriesCard;
