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
  // TECHNIQUES
  {
    id: "formwork",
    name: "Formwork",
    definition:
      "Temporary or permanent molds into which concrete is poured to create structural elements.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Used to shape concrete into columns, beams, slabs, and walls. Removed after concrete cures or left in place as permanent forms.",
    category: "techniques",
    relatedTerms: ["concrete", "curing", "shoring", "concrete-placement"],
  },
  {
    id: "welding",
    name: "Welding",
    definition:
      "A fabrication process that joins materials by melting and fusing them together.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Critical for steel structure assembly, connecting beams, columns, and reinforcement in construction projects.",
    category: "techniques",
    relatedTerms: ["rebar", "steel-erection", "inspection", "welder"],
  },
  {
    id: "waterproofing",
    name: "Waterproofing",
    definition:
      "The process of making a structure resistant to water penetration.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Applied to foundations, roofs, and bathrooms using membranes, coatings, or sealants to prevent water damage.",
    category: "techniques",
    relatedTerms: ["roofing-membrane", "caulk", "flashing", "drainage"],
  },
  {
    id: "framing",
    name: "Framing",
    definition:
      "The process of erecting the structural skeleton of a building using wood, steel, or other materials.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Creates the primary structural system. Can be wood (residential) or steel (commercial) depending on requirements.",
    category: "techniques",
    relatedTerms: ["lumber", "stud", "header", "carpenter"],
  },
  {
    id: "taping",
    name: "Taping",
    definition:
      "The process of applying joint tape over drywall seams to prepare for mudding.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "First step in drywall finishing. Creates a base for joint compound application.",
    category: "techniques",
    relatedTerms: ["mudding", "drywall", "finishing", "drywaller"],
  },
  {
    id: "mudding",
    name: "Mudding",
    definition:
      "Applying joint compound (mud) over drywall seams and tape to create smooth surfaces.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Applied in multiple coats with sanding between each coat. Final step in drywall finishing.",
    category: "techniques",
    relatedTerms: ["taping", "drywall", "sanding", "drywaller"],
  },
  {
    id: "bricklaying",
    name: "Bricklaying",
    definition:
      "The process of laying bricks or masonry units with mortar to create walls and structures.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Can be structural or veneer. Requires proper joint spacing, leveling, and mortar application.",
    category: "techniques",
    relatedTerms: ["mortar", "masonry", "grout", "bricklayer"],
  },
  {
    id: "concrete-placement",
    name: "Concrete Placement",
    definition: "The process of pouring and positioning concrete in formwork.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Requires proper vibration to eliminate air voids. Must be completed before concrete begins to set.",
    category: "techniques",
    relatedTerms: ["concrete", "formwork", "curing", "concrete-pump"],
  },
  {
    id: "curing",
    name: "Concrete Curing",
    definition:
      "The process of maintaining proper moisture and temperature for concrete hydration after placement.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Critical for strength development. Typically lasts 7-28 days depending on concrete type and requirements.",
    category: "techniques",
    relatedTerms: ["concrete", "concrete-placement", "strength", "time"],
  },
  {
    id: "flashing",
    name: "Flashing",
    definition:
      "Metal or membrane material installed to direct water away from building joints and penetrations.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Installed at roof-to-wall transitions, chimneys, and other penetrations to prevent water infiltration.",
    category: "techniques",
    relatedTerms: ["waterproofing", "roofing-membrane", "caulk", "shingles"],
  },
];

function Page() {
  // const {} = props

  // const data = allTerms.filter((term) => term.category === "building-elements");
  // console.log(data);

  return (
    <div className="flex flex-col bg-amber-50 dark:bg-neutral-900 px-4 py-10 lg:px-40 lg:py-12 gap-4 border-b border-gray-200 dark:border-neutral-700">
      <BackBtn />
      Techniques
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
