import BackBtn from "@/components/BackBtn";
import React from "react";
import TermCard from "@/components/TermCard";

interface Term {
  id: string;
  name: string;
  definition: string;
  image: string;
  usage: string;
  category: string;
  relatedTerms: string[];
}

const data: Term[] = [
  // MACHINES
  {
    id: "excavator",
    name: "Excavator",
    definition:
      "Heavy construction equipment consisting of a boom, dipper, bucket, and cab on a rotating platform.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Used for digging trenches, holes, and foundations. Also used for material handling, demolition, and landscaping.",
    category: "machines",
    relatedTerms: ["backhoe", "loader", "grading", "foundation"],
  },
  {
    id: "crane",
    name: "Tower Crane",
    definition:
      "A tall machine used to lift and move heavy materials and equipment on construction sites.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Essential for high-rise construction, lifting steel beams, concrete, and other materials to great heights.",
    category: "machines",
    relatedTerms: ["mobile-crane", "rigging", "hoisting", "steel-erection"],
  },
  {
    id: "bulldozer",
    name: "Bulldozer",
    definition:
      "A powerful tracked vehicle with a large blade used for pushing earth and debris.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Used for clearing land, grading, and moving large quantities of soil or rubble on construction sites.",
    category: "machines",
    relatedTerms: ["grader", "loader", "grading", "site-clearing"],
  },
  {
    id: "concrete-mixer",
    name: "Concrete Mixer",
    definition:
      "A machine that combines cement, aggregate, and water to produce concrete.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Available as small portable units or large truck-mounted mixers. Essential for on-site concrete production.",
    category: "machines",
    relatedTerms: ["concrete", "cement", "ready-mix", "mixing"],
  },
  {
    id: "compactor",
    name: "Compactor",
    definition:
      "A machine that compresses and consolidates soil, asphalt, or aggregate materials.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Essential for base preparation and road construction. Ensures proper density and stability.",
    category: "machines",
    relatedTerms: ["grading", "base-course", "asphalt", "soil-compaction"],
  },
  {
    id: "loader",
    name: "Wheel Loader",
    definition:
      "Heavy equipment with a front bucket used for loading and transporting materials.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Versatile machine for moving soil, aggregate, and debris. Can be fitted with various attachments.",
    category: "machines",
    relatedTerms: ["excavator", "bulldozer", "grading", "material-handling"],
  },
  {
    id: "concrete-pump",
    name: "Concrete Pump",
    definition:
      "Equipment that pumps liquid concrete through hoses to building sites.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Allows concrete placement at height or distance. Essential for elevated slabs and hard-to-reach areas.",
    category: "machines",
    relatedTerms: ["concrete", "pumping", "placement", "ready-mix"],
  },
  {
    id: "generator",
    name: "Construction Generator",
    definition:
      "A portable power generator that provides electricity to construction sites.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Supplies power to tools, lights, and equipment when site power is unavailable. Various sizes available.",
    category: "machines",
    relatedTerms: ["power-distribution", "temporary-power", "scaffolding"],
  },
];

function Page() {
  // const {} = props

  // const data = allTerms.filter((term) => term.category === "building-elements");
  // console.log(data);

  return (
    <div className="flex flex-col bg-amber-50 dark:bg-neutral-900 px-5 py-10 lg:px-40 lg:py-12 gap-4 border-b border-gray-200 dark:border-neutral-700">
      <BackBtn />
      <h1 className="text-4xl font-bold dark:text-white">Machines</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 p-2">
        {data.map((term) => (
          <TermCard
            key={term.id}
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
}

export default Page;
