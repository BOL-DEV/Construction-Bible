import React from "react";
import CategoriesCard from "./CategoriesCard";
import { BsTools, BsBricks } from "react-icons/bs";
import { LuBrickWall } from "react-icons/lu";
import { GiCrane } from "react-icons/gi";
import { FiBookOpen } from "react-icons/fi";
import { LiaUserTieSolid } from "react-icons/lia";

// interface Props {}

const categoryData = [
  {
    title: "materials",
    terms: "Concrete, Wood, Steel, and more",
    image: <LuBrickWall />,
  },
  {
    title: "tools",
    terms: "Hand Tools, Power Tools, Measuring Tools, and more",
    image: <BsTools />,
  },
  {
    title: "machines",
    terms: "Heavy equiment and machinery ",
    image: <GiCrane />,
  },
  {
    title: "techniques",
    terms: "Construction Methods, Safety Practices, and more",
    image: <FiBookOpen />,
  },
  {
    title: "professionals",
    terms: "Rolees and Responsibilities",
    image: <LiaUserTieSolid />,
  },
  {
    title: "building Elements",
    terms: "foundations, walls, roofs, and more",
    image: <BsBricks />,
  },
];

function Categories() {
  // const {} = props

  return (
    <section>
      <div className="flex flex-col items-center bg-amber-50 dark:bg-neutral-900 dark:text-gray-200 lg:p-15 p-3 gap-4 ">
        <h1 className="text-3xl font-bold">Browse by Category</h1>
        <p className="text-gray-400 text-center lg:text-lg md:text-md text-sm max-w-2xl">
          Explore construction knowledge organized by topic
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6 lg:px-40 bg-amber-50 dark:bg-neutral-900 dark:text-gray-200">
        {categoryData.map((category) => (
          <CategoriesCard
            key={category.title}
            title={
              category.title.charAt(0).toUpperCase() + category.title.slice(1)
            }
            terms={category.terms}
            image={category.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;
