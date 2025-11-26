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
  // BUILDING ELEMENTS
  {
    id: "foundation",
    name: "Foundation",
    definition:
      "The lowest load-bearing part of a building, transferring loads to the ground.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Supports the entire structure. Types include slab, crawl space, and basement foundations, chosen based on soil and building requirements.",
    category: "building-elements",
    relatedTerms: ["concrete", "footing", "settlement", "drainage"],
  },
  {
    id: "beam",
    name: "Beam",
    definition:
      "A horizontal structural element that carries loads perpendicular to its length.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Supports floors, roofs, and walls. Made from steel, concrete, or wood depending on span and load requirements.",
    category: "building-elements",
    relatedTerms: ["column", "rebar", "welding", "span"],
  },
  {
    id: "column",
    name: "Column",
    definition:
      "A vertical structural element that transmits compressive loads from above to below.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Supports beams and transfers building loads to the foundation. Critical for multi-story structures and open floor plans.",
    category: "building-elements",
    relatedTerms: ["beam", "foundation", "load", "structural-system"],
  },
  {
    id: "stud",
    name: "Stud",
    definition:
      "Vertical framing member, typically 2x4 or 2x6 lumber, that forms the skeleton of walls.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Spaced 16 or 24 inches apart. Supports drywall, siding, and carries lateral loads.",
    category: "building-elements",
    relatedTerms: ["framing", "header", "plate", "drywall"],
  },
  {
    id: "header",
    name: "Header",
    definition:
      "A structural beam spanning an opening in a wall to support loads above.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Installed above doors and windows. Size depends on span and load-bearing requirements.",
    category: "building-elements",
    relatedTerms: ["stud", "lintel", "framing", "load"],
  },
  {
    id: "plate",
    name: "Plate",
    definition:
      "Horizontal framing member at the top or bottom of a wall assembly.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Top plate secures studs and receives rafters or joists. Bottom plate anchors to foundation.",
    category: "building-elements",
    relatedTerms: ["stud", "sole-plate", "top-plate", "framing"],
  },
  {
    id: "joist",
    name: "Joist",
    definition: "Parallel horizontal beams that support floor and roof loads.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Spaced 16 or 24 inches apart. Supports flooring above and ceiling below.",
    category: "building-elements",
    relatedTerms: ["beam", "rafter", "floor", "span"],
  },
  {
    id: "rafter",
    name: "Rafter",
    definition: "Sloped structural members that form the roof framework.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Supports roof decking and shingles. Angle depends on roof pitch requirements.",
    category: "building-elements",
    relatedTerms: ["joist", "roof-pitch", "truss", "roof-sheathing"],
  },
  {
    id: "sheathing",
    name: "Sheathing",
    definition:
      "A layer of material covering structural framing to provide surface for finishes.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Applied to walls, floors, and roofs. Provides racking resistance and base for exterior and interior finishes.",
    category: "building-elements",
    relatedTerms: ["plywood", "OSB", "framing", "bracing"],
  },
  {
    id: "lintel",
    name: "Lintel",
    definition: "A structural element spanning an opening in a masonry wall.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Supports masonry above doors and windows. Can be steel, concrete, or stone.",
    category: "building-elements",
    relatedTerms: ["header", "masonry", "opening", "brick"],
  },
  {
    id: "footing",
    name: "Footing",
    definition:
      "The lowest part of a foundation that distributes structural loads to the soil.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Typically wider than the foundation wall to spread loads. Must extend below frost line.",
    category: "building-elements",
    relatedTerms: ["foundation", "concrete", "soil-bearing", "depth"],
  },
];

function Page() {
  // const {} = props

  return (
    <div className="flex flex-col bg-amber-50 dark:bg-neutral-900 px-4 py-10 lg:px-40 lg:py-12 gap-4 border-b border-gray-200 dark:border-neutral-700">
      <BackBtn />
      Building Element
      <div>
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
