import React from "react";
import { BiBulb } from "react-icons/bi";

// interface Props {}

function Explore() {
  // const {} = props

  return (
    <section className="bg-amber-50 p-6 pb-15 dark:bg-neutral-900 opacity-98 border-t border-neutral-300 dark:border-neutral-700 ">
      <h1 className="text-3xl font-bold flex items-center justify-center gap-2 dark:text-gray-200 p-4 mb-6">
        <BiBulb className="text-amber-600 text-4xl" /> Did You Know?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-40">
        <div className="bg-gray-200  p-6 rounded-lg dark:bg-neutral-800">
          <h2 className="text-xl font-semibold mt-4 dark:text-gray-300">
            Sustainable Constructions Impact on Carbon Emissions
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-400">
            The construction industry is responsible for nearly 40% of global
            carbon emissions, making sustainable building practices crucial in
            combating climate change.
          </p>
        </div>

        <div className="bg-gray-200 p-6 rounded-lg dark:bg-neutral-800">
          <h2 className="text-xl font-semibold mt-4 dark:text-gray-300">
            Smart Homes and Energy Efficiency
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-400">
            Smart home technologies can reduce energy consumption by up to 30%
            by optimizing heating, cooling, and lighting based on occupancy and
            usage patterns.
          </p>
        </div>

        <div className="bg-gray-200 p-6 rounded-lg dark:bg-neutral-800">
          <h2 className="text-xl font-semibold mt-4 dark:text-gray-300">
            Innovative Materials Reducing Waste
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-400">
            The use of recycled and innovative materials, such as
            cross-laminated timber (CLT) and recycled steel, can significantly
            reduce construction waste and lower the environmental impact of
            building projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Explore;
