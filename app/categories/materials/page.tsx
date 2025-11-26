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
  // MATERIALS
  {
    id: "concrete",
    name: "Concrete",
    definition:
      "A composite material composed of fine and coarse aggregate bonded together with cement that hardens over time.",
    image: "/concrete-construction-material-mix.jpg",
    usage:
      "Used in foundations, walls, floors, and structural elements. Mixed on-site or delivered ready-mixed for large projects.",
    category: "materials",
    relatedTerms: ["rebar", "formwork", "foundation", "cement"],
  },
  {
    id: "rebar",
    name: "Rebar (Reinforcing Bar)",
    definition:
      "Steel bars or mesh used to reinforce concrete and masonry structures, providing tensile strength.",
    image: "/steel-rebar-reinforcement-bars.jpg",
    usage:
      "Embedded in concrete before it sets to create reinforced concrete structures like beams, columns, and slabs.",
    category: "materials",
    relatedTerms: ["concrete", "welding", "beam", "column"],
  },
  {
    id: "lumber",
    name: "Lumber",
    definition:
      "Wood that has been processed into beams and planks, used as a building material.",
    image: "/construction-lumber-wood-beams.jpg",
    usage:
      "Used for framing, flooring, roofing, and finishing work in residential and commercial construction.",
    category: "materials",
    relatedTerms: ["framing", "plywood", "beam", "carpenter"],
  },
  {
    id: "cement",
    name: "Cement",
    definition:
      "A binding agent made from limestone and other minerals that hardens when mixed with water.",
    image: "/cement-powder-construction-material.jpg",
    usage:
      "Primary ingredient in concrete and mortar. Used to bind aggregates together in concrete mixes.",
    category: "materials",
    relatedTerms: ["concrete", "mortar", "aggregate", "mixing"],
  },
  {
    id: "plywood",
    name: "Plywood",
    definition:
      "An engineered wood product made from thin layers of wood veneer glued together.",
    image: "/plywood-sheet-engineered-wood.jpg",
    usage:
      "Used for sheathing, subflooring, wall backing, and roof decking. Provides strength with minimal weight.",
    category: "materials",
    relatedTerms: ["lumber", "framing", "drywall", "subflooring"],
  },
  {
    id: "drywall",
    name: "Drywall",
    definition:
      "A wall finishing material made of gypsum plaster pressed between layers of paper.",
    image: "/drywall-installation-gypsum-board.jpg",
    usage:
      "Installed over wooden or metal studs to create interior walls. Quick alternative to plaster.",
    category: "materials",
    relatedTerms: ["taping", "mudding", "framing", "stud"],
  },
  {
    id: "roofing-membrane",
    name: "Roofing Membrane",
    definition:
      "A protective layer of material applied to roofs to prevent water infiltration.",
    image: "/roofing-membrane-waterproofing-material.jpg",
    usage:
      "Available in various materials including asphalt, EPDM, and PVC. Applied to flat or sloped roofs.",
    category: "materials",
    relatedTerms: ["waterproofing", "flashing", "shingles", "roofer"],
  },
  {
    id: "aggregate",
    name: "Aggregate",
    definition:
      "Granular material such as sand, gravel, or crushed stone used in concrete and asphalt.",
    image: "/aggregate-gravel-sand-construction.jpg",
    usage:
      "Makes up 70-80% of concrete mix. Different sizes used depending on concrete application requirements.",
    category: "materials",
    relatedTerms: ["concrete", "cement", "mortar", "asphalt"],
  },
  {
    id: "mortar",
    name: "Mortar",
    definition:
      "A mixture of cement, sand, and water used to bind bricks, blocks, and stones.",
    image: "/mortar-cement-brickwork.jpg",
    usage:
      "Applied between masonry units. Must be flexible enough to accommodate movement and weather.",
    category: "materials",
    relatedTerms: ["cement", "grout", "bricklaying", "masonry"],
  },
  {
    id: "grout",
    name: "Grout",
    definition:
      "A fluid mixture of cement and sand used to fill gaps between tiles and masonry units.",
    image: "/grout-filling-tiles-masonry.jpg",
    usage:
      "Fills voids in masonry and tile work. Provides structural integrity and water resistance.",
    category: "materials",
    relatedTerms: ["mortar", "tile", "caulk", "sealant"],
  },
  {
    id: "shingles",
    name: "Shingles",
    definition:
      "Overlapping pieces of material (asphalt, wood, or slate) used to cover roofs.",
    image: "/asphalt-shingles-roofing.jpg",
    usage:
      "Installed in overlapping rows. Provides weather protection and aesthetic appeal to sloped roofs.",
    category: "materials",
    relatedTerms: ["roofing-membrane", "flashing", "pitch", "roofer"],
  },
  {
    id: "caulk",
    name: "Caulk",
    definition:
      "A flexible sealant material used to fill gaps and joints in building elements.",
    image: "/caulking-sealant-application.jpg",
    usage:
      "Applied around windows, doors, and transitions. Prevents air and water infiltration.",
    category: "materials",
    relatedTerms: ["grout", "sealant", "weatherstripping", "waterproofing"],
  },
];

function Page() {
  // const {} = props

  // const data = allTerms.filter((term) => term.category === "building-elements");
  // console.log(data);

  return (
    <div className="flex flex-col bg-amber-50 dark:bg-neutral-900 px-5 py-10 lg:px-40 lg:py-12 gap-7 border-b border-gray-200 dark:border-neutral-700">
      <BackBtn />
      <h1 className="text-4xl font-bold dark:text-white">Materials</h1>
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
