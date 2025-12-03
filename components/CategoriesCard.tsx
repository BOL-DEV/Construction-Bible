import React from "react";
// import Image from "next/image";
import Link from "next/link";
import * as FiIcons from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

interface Props {
  title: string;
  terms: string;
  image?: string; // expect icon name like "FiBookOpen"
}

function CategoriesCard(props: Props) {
  const { title, terms, image } = props;

  const modifyedTitle = title.toLowerCase().replace(/\s+/g, "-");

  const Icons = FiIcons as Record<string, React.ComponentType>;
  const Icon = image ? Icons[image] : null;

  return (
    <Link href={`/categories/${modifyedTitle}`}>
      <div
        key={title}
        className="group flex flex-col gap-3 border text-center border-gray-300 hover:border-amber-600 dark:border-neutral-700 rounded-lg p-14 hover:shadow-lg transition-shadow cursor-pointer bg-amber-50 dark:bg-neutral-900/40"
      >
        <div className="flex items-center justify-center text-3xl p-4 bg-gray-300 group-hover:bg-orange-400 dark:group-hover:text-black dark:bg-neutral-700 rounded-lg mx-auto">
          {Icon ? <Icon /> : <GiOpenBook className="w-10 h-10 inline-block" />}
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-400">{terms}</p>
      </div>
    </Link>
  );
}

export default CategoriesCard;
