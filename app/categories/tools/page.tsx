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
  // TOOLS
  {
    id: "hammer",
    name: "Hammer",
    definition:
      "A hand tool consisting of a weighted head attached to a handle, used for driving nails and breaking objects.",
    image: "/construction-hammer-tool.jpg",
    usage:
      "Essential for framing, demolition, and general construction work. Different types include claw, sledge, and framing hammers.",
    category: "tools",
    relatedTerms: ["nail-gun", "carpenter", "framing", "demolition"],
  },
  {
    id: "level",
    name: "Spirit Level",
    definition:
      "A tool used to indicate whether a surface is horizontal (level) or vertical (plumb).",
    image: "/spirit-level-construction-tool.jpg",
    usage:
      "Critical for ensuring accurate installation of walls, floors, and fixtures. Available in various lengths for different applications.",
    category: "tools",
    relatedTerms: ["plumb-bob", "laser-level", "framing", "layout"],
  },
  {
    id: "drill",
    name: "Power Drill",
    definition:
      "An electric or battery-powered tool used for drilling holes and driving screws.",
    image: "/power-drill-construction-tool.jpg",
    usage:
      "Used for creating holes in various materials and fastening with screws. Essential for electrical, plumbing, and carpentry work.",
    category: "tools",
    relatedTerms: ["hammer-drill", "impact-driver", "boring", "fastening"],
  },
  {
    id: "circular-saw",
    name: "Circular Saw",
    definition:
      "A power tool with a rotating circular blade used for cutting wood and other materials.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Quick and efficient for rip cuts and crosscuts. Essential for framing and finish work.",
    category: "tools",
    relatedTerms: ["table-saw", "miter-saw", "reciprocating-saw", "cutting"],
  },
  {
    id: "tape-measure",
    name: "Tape Measure",
    definition:
      "A flexible ruler made of cloth, plastic, fiberglass, or metal used for measuring distances.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Essential tool for layout and verification. Available in various lengths from 16 to 100 feet.",
    category: "tools",
    relatedTerms: ["ruler", "laser-measure", "layout", "blueprints"],
  },
  {
    id: "nail-gun",
    name: "Nail Gun",
    definition:
      "A pneumatic or electric tool that drives nails quickly using compressed air or electric power.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Speeds up framing and fastening work. Available in brad, coil, and strip configurations.",
    category: "tools",
    relatedTerms: ["hammer", "brad-nailer", "finish-nailer", "fastening"],
  },
  {
    id: "laser-level",
    name: "Laser Level",
    definition:
      "An electronic level that projects a laser line to establish level, plumb, or square references.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Provides more accuracy than spirit levels for large areas. Useful for layout and verification work.",
    category: "tools",
    relatedTerms: ["level", "plumb-bob", "transit", "layout"],
  },
  {
    id: "impact-driver",
    name: "Impact Driver",
    definition:
      "A compact power tool that delivers rotational force through impact action for driving fasteners.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Superior to drills for driving large screws and fasteners. Reduces user fatigue with controlled power delivery.",
    category: "tools",
    relatedTerms: ["drill", "hammer-drill", "fastening", "screw"],
  },
  {
    id: "reciprocating-saw",
    name: "Reciprocating Saw",
    definition:
      "A power tool with a blade that moves back and forth for cutting through various materials.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Ideal for demolition and cutting in tight spaces. Can handle wood, metal, and composite materials.",
    category: "tools",
    relatedTerms: ["circular-saw", "demolition", "cutting", "jigsaw"],
  },
  {
    id: "plumb-bob",
    name: "Plumb Bob",
    definition:
      "A simple tool consisting of a weighted string used to establish a vertical reference line.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Low-tech but reliable method for checking verticality and establishing vertical reference lines.",
    category: "tools",
    relatedTerms: ["level", "laser-level", "layout", "plumb"],
  },
];

function Page() {
  // const {} = props

  // const data = allTerms.filter((term) => term.category === "building-elements");
  // console.log(data);

  return (
    <div className="flex flex-col bg-amber-50 dark:bg-neutral-900 px-4 py-10 lg:px-40 lg:py-12 gap-4 border-b border-gray-200 dark:border-neutral-700">
      <BackBtn />
      <h1 className="text-4xl font-bold dark:text-white">Tools</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 ">
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
