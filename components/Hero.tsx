import React from "react";

// interface Props {}

function Hero() {
  // const {} = props

  return (
    <section className="flex flex-col items-center p-2 py-10 lg:py-12 gap-10 lg:gap-10 bg-amber-50 dark:bg-neutral-900 opacity-98 dark:text-gray-200">
      <h1 className="lg:text-6xl text-4xl font-bold text-center  flex flex-col">
        The Complete Encyclopedia{" "}
        <span className="text-amber-600 ">of Construction</span>
      </h1>
      <p className="text-center text-lg dark:text-gray-400 text-gray-800 md:w-[75%] lg:w-[35%]">
        Your comprehensive guide to building materials, tools, machines,
        techniques, and everything you need to know about construction and
        engineering.
      </p>
    </section>
  );
}

export default Hero;
