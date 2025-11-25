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
  // PROFESSIONALS
  {
    id: "architect",
    name: "Architect",
    definition:
      "A professional who designs buildings and oversees their construction.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Creates building designs, prepares construction documents, and ensures projects meet building codes and client requirements.",
    category: "professionals",
    relatedTerms: [
      "civil-engineer",
      "project-manager",
      "contractor",
      "blueprints",
    ],
  },
  {
    id: "civil-engineer",
    name: "Civil Engineer",
    definition:
      "An engineer who designs and supervises infrastructure projects.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Responsible for structural design, site analysis, and ensuring construction meets safety and engineering standards.",
    category: "professionals",
    relatedTerms: [
      "architect",
      "structural-engineer",
      "project-manager",
      "inspections",
    ],
  },
  {
    id: "project-manager",
    name: "Project Manager",
    definition:
      "A professional who oversees construction projects from start to finish.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Coordinates schedules, budgets, contractors, and resources to ensure projects are completed on time and within budget.",
    category: "professionals",
    relatedTerms: [
      "architect",
      "civil-engineer",
      "contractor",
      "site-supervisor",
    ],
  },
  {
    id: "carpenter",
    name: "Carpenter",
    definition:
      "A skilled tradesperson who cuts, shapes, and installs wood and other materials.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Specializes in framing, finish carpentry, and custom woodwork. Essential for structural and aesthetic work.",
    category: "professionals",
    relatedTerms: ["framing", "lumber", "hammer", "finish-carpenter"],
  },
  {
    id: "electrician",
    name: "Electrician",
    definition:
      "A skilled tradesperson who installs and maintains electrical systems.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Responsible for power distribution, wiring, lighting, and electrical safety. Must follow code requirements.",
    category: "professionals",
    relatedTerms: ["electrical-code", "wiring", "conduit", "panel"],
  },
  {
    id: "plumber",
    name: "Plumber",
    definition:
      "A skilled tradesperson who installs and maintains water, gas, and waste systems.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Handles water supply, drainage, venting, and gas lines. Critical for health and safety.",
    category: "professionals",
    relatedTerms: ["piping", "drainage", "code", "fixtures"],
  },
  {
    id: "structural-engineer",
    name: "Structural Engineer",
    definition:
      "An engineer specialized in designing structural systems that support building loads.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Calculates loads, designs beams and columns, and ensures structural integrity and safety.",
    category: "professionals",
    relatedTerms: ["civil-engineer", "architect", "beam", "column"],
  },
  {
    id: "roofer",
    name: "Roofer",
    definition:
      "A skilled tradesperson who installs and repairs roofing systems.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Specializes in shingles, membranes, flashing, and waterproofing. Essential for weather protection.",
    category: "professionals",
    relatedTerms: ["roofing-membrane", "shingles", "flashing", "waterproofing"],
  },
  {
    id: "masonry-contractor",
    name: "Mason",
    definition:
      "A skilled tradesperson who builds with brick, stone, and concrete masonry units.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Handles bricklaying, stone work, and masonry repair. Creates durable walls and structures.",
    category: "professionals",
    relatedTerms: ["bricklaying", "mortar", "grout", "masonry"],
  },
  {
    id: "site-supervisor",
    name: "Site Supervisor",
    definition:
      "A professional who oversees daily construction activities and workforce on the job site.",
    image: "/placeholder.svg?height=200&width=400",
    usage:
      "Ensures schedule adherence, quality standards, and safety compliance. Direct supervisor for crews.",
    category: "professionals",
    relatedTerms: [
      "project-manager",
      "quality-control",
      "safety",
      "inspections",
    ],
  },
];

function Page() {
  // const {} = props

  // const data = allTerms.filter((term) => term.category === "building-elements");
  // console.log(data);

  return (
    <div>
      <BackBtn />
      Professionals
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
