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

// const allTerms: Term[] = [
//   // MATERIALS
//   {
//     id: "concrete",
//     name: "Concrete",
//     definition:
//       "A composite material composed of fine and coarse aggregate bonded together with cement that hardens over time.",
//     image: "/concrete-construction-material-mix.jpg",
//     usage:
//       "Used in foundations, walls, floors, and structural elements. Mixed on-site or delivered ready-mixed for large projects.",
//     category: "materials",
//     relatedTerms: ["rebar", "formwork", "foundation", "cement"],
//   },
//   {
//     id: "rebar",
//     name: "Rebar (Reinforcing Bar)",
//     definition:
//       "Steel bars or mesh used to reinforce concrete and masonry structures, providing tensile strength.",
//     image: "/steel-rebar-reinforcement-bars.jpg",
//     usage:
//       "Embedded in concrete before it sets to create reinforced concrete structures like beams, columns, and slabs.",
//     category: "materials",
//     relatedTerms: ["concrete", "welding", "beam", "column"],
//   },
//   {
//     id: "lumber",
//     name: "Lumber",
//     definition:
//       "Wood that has been processed into beams and planks, used as a building material.",
//     image: "/construction-lumber-wood-beams.jpg",
//     usage:
//       "Used for framing, flooring, roofing, and finishing work in residential and commercial construction.",
//     category: "materials",
//     relatedTerms: ["framing", "plywood", "beam", "carpenter"],
//   },
//   {
//     id: "cement",
//     name: "Cement",
//     definition:
//       "A binding agent made from limestone and other minerals that hardens when mixed with water.",
//     image: "/cement-powder-construction-material.jpg",
//     usage:
//       "Primary ingredient in concrete and mortar. Used to bind aggregates together in concrete mixes.",
//     category: "materials",
//     relatedTerms: ["concrete", "mortar", "aggregate", "mixing"],
//   },
//   {
//     id: "plywood",
//     name: "Plywood",
//     definition:
//       "An engineered wood product made from thin layers of wood veneer glued together.",
//     image: "/plywood-sheet-engineered-wood.jpg",
//     usage:
//       "Used for sheathing, subflooring, wall backing, and roof decking. Provides strength with minimal weight.",
//     category: "materials",
//     relatedTerms: ["lumber", "framing", "drywall", "subflooring"],
//   },
//   {
//     id: "drywall",
//     name: "Drywall",
//     definition:
//       "A wall finishing material made of gypsum plaster pressed between layers of paper.",
//     image: "/drywall-installation-gypsum-board.jpg",
//     usage:
//       "Installed over wooden or metal studs to create interior walls. Quick alternative to plaster.",
//     category: "materials",
//     relatedTerms: ["taping", "mudding", "framing", "stud"],
//   },
//   {
//     id: "roofing-membrane",
//     name: "Roofing Membrane",
//     definition:
//       "A protective layer of material applied to roofs to prevent water infiltration.",
//     image: "/roofing-membrane-waterproofing-material.jpg",
//     usage:
//       "Available in various materials including asphalt, EPDM, and PVC. Applied to flat or sloped roofs.",
//     category: "materials",
//     relatedTerms: ["waterproofing", "flashing", "shingles", "roofer"],
//   },
//   {
//     id: "aggregate",
//     name: "Aggregate",
//     definition:
//       "Granular material such as sand, gravel, or crushed stone used in concrete and asphalt.",
//     image: "/aggregate-gravel-sand-construction.jpg",
//     usage:
//       "Makes up 70-80% of concrete mix. Different sizes used depending on concrete application requirements.",
//     category: "materials",
//     relatedTerms: ["concrete", "cement", "mortar", "asphalt"],
//   },
//   {
//     id: "mortar",
//     name: "Mortar",
//     definition:
//       "A mixture of cement, sand, and water used to bind bricks, blocks, and stones.",
//     image: "/mortar-cement-brickwork.jpg",
//     usage:
//       "Applied between masonry units. Must be flexible enough to accommodate movement and weather.",
//     category: "materials",
//     relatedTerms: ["cement", "grout", "bricklaying", "masonry"],
//   },
//   {
//     id: "grout",
//     name: "Grout",
//     definition:
//       "A fluid mixture of cement and sand used to fill gaps between tiles and masonry units.",
//     image: "/grout-filling-tiles-masonry.jpg",
//     usage:
//       "Fills voids in masonry and tile work. Provides structural integrity and water resistance.",
//     category: "materials",
//     relatedTerms: ["mortar", "tile", "caulk", "sealant"],
//   },
//   {
//     id: "shingles",
//     name: "Shingles",
//     definition:
//       "Overlapping pieces of material (asphalt, wood, or slate) used to cover roofs.",
//     image: "/asphalt-shingles-roofing.jpg",
//     usage:
//       "Installed in overlapping rows. Provides weather protection and aesthetic appeal to sloped roofs.",
//     category: "materials",
//     relatedTerms: ["roofing-membrane", "flashing", "pitch", "roofer"],
//   },
//   {
//     id: "caulk",
//     name: "Caulk",
//     definition:
//       "A flexible sealant material used to fill gaps and joints in building elements.",
//     image: "/caulking-sealant-application.jpg",
//     usage:
//       "Applied around windows, doors, and transitions. Prevents air and water infiltration.",
//     category: "materials",
//     relatedTerms: ["grout", "sealant", "weatherstripping", "waterproofing"],
//   },

//   // TOOLS
//   {
//     id: "hammer",
//     name: "Hammer",
//     definition:
//       "A hand tool consisting of a weighted head attached to a handle, used for driving nails and breaking objects.",
//     image: "/construction-hammer-tool.jpg",
//     usage:
//       "Essential for framing, demolition, and general construction work. Different types include claw, sledge, and framing hammers.",
//     category: "tools",
//     relatedTerms: ["nail-gun", "carpenter", "framing", "demolition"],
//   },
//   {
//     id: "level",
//     name: "Spirit Level",
//     definition:
//       "A tool used to indicate whether a surface is horizontal (level) or vertical (plumb).",
//     image: "/spirit-level-construction-tool.jpg",
//     usage:
//       "Critical for ensuring accurate installation of walls, floors, and fixtures. Available in various lengths for different applications.",
//     category: "tools",
//     relatedTerms: ["plumb-bob", "laser-level", "framing", "layout"],
//   },
//   {
//     id: "drill",
//     name: "Power Drill",
//     definition:
//       "An electric or battery-powered tool used for drilling holes and driving screws.",
//     image: "/power-drill-construction-tool.jpg",
//     usage:
//       "Used for creating holes in various materials and fastening with screws. Essential for electrical, plumbing, and carpentry work.",
//     category: "tools",
//     relatedTerms: ["hammer-drill", "impact-driver", "boring", "fastening"],
//   },
//   {
//     id: "circular-saw",
//     name: "Circular Saw",
//     definition:
//       "A power tool with a rotating circular blade used for cutting wood and other materials.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Quick and efficient for rip cuts and crosscuts. Essential for framing and finish work.",
//     category: "tools",
//     relatedTerms: ["table-saw", "miter-saw", "reciprocating-saw", "cutting"],
//   },
//   {
//     id: "tape-measure",
//     name: "Tape Measure",
//     definition:
//       "A flexible ruler made of cloth, plastic, fiberglass, or metal used for measuring distances.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Essential tool for layout and verification. Available in various lengths from 16 to 100 feet.",
//     category: "tools",
//     relatedTerms: ["ruler", "laser-measure", "layout", "blueprints"],
//   },
//   {
//     id: "nail-gun",
//     name: "Nail Gun",
//     definition:
//       "A pneumatic or electric tool that drives nails quickly using compressed air or electric power.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Speeds up framing and fastening work. Available in brad, coil, and strip configurations.",
//     category: "tools",
//     relatedTerms: ["hammer", "brad-nailer", "finish-nailer", "fastening"],
//   },
//   {
//     id: "laser-level",
//     name: "Laser Level",
//     definition:
//       "An electronic level that projects a laser line to establish level, plumb, or square references.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Provides more accuracy than spirit levels for large areas. Useful for layout and verification work.",
//     category: "tools",
//     relatedTerms: ["level", "plumb-bob", "transit", "layout"],
//   },
//   {
//     id: "impact-driver",
//     name: "Impact Driver",
//     definition:
//       "A compact power tool that delivers rotational force through impact action for driving fasteners.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Superior to drills for driving large screws and fasteners. Reduces user fatigue with controlled power delivery.",
//     category: "tools",
//     relatedTerms: ["drill", "hammer-drill", "fastening", "screw"],
//   },
//   {
//     id: "reciprocating-saw",
//     name: "Reciprocating Saw",
//     definition:
//       "A power tool with a blade that moves back and forth for cutting through various materials.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Ideal for demolition and cutting in tight spaces. Can handle wood, metal, and composite materials.",
//     category: "tools",
//     relatedTerms: ["circular-saw", "demolition", "cutting", "jigsaw"],
//   },
//   {
//     id: "plumb-bob",
//     name: "Plumb Bob",
//     definition:
//       "A simple tool consisting of a weighted string used to establish a vertical reference line.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Low-tech but reliable method for checking verticality and establishing vertical reference lines.",
//     category: "tools",
//     relatedTerms: ["level", "laser-level", "layout", "plumb"],
//   },

//   // MACHINES
//   {
//     id: "excavator",
//     name: "Excavator",
//     definition:
//       "Heavy construction equipment consisting of a boom, dipper, bucket, and cab on a rotating platform.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Used for digging trenches, holes, and foundations. Also used for material handling, demolition, and landscaping.",
//     category: "machines",
//     relatedTerms: ["backhoe", "loader", "grading", "foundation"],
//   },
//   {
//     id: "crane",
//     name: "Tower Crane",
//     definition:
//       "A tall machine used to lift and move heavy materials and equipment on construction sites.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Essential for high-rise construction, lifting steel beams, concrete, and other materials to great heights.",
//     category: "machines",
//     relatedTerms: ["mobile-crane", "rigging", "hoisting", "steel-erection"],
//   },
//   {
//     id: "bulldozer",
//     name: "Bulldozer",
//     definition:
//       "A powerful tracked vehicle with a large blade used for pushing earth and debris.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Used for clearing land, grading, and moving large quantities of soil or rubble on construction sites.",
//     category: "machines",
//     relatedTerms: ["grader", "loader", "grading", "site-clearing"],
//   },
//   {
//     id: "concrete-mixer",
//     name: "Concrete Mixer",
//     definition:
//       "A machine that combines cement, aggregate, and water to produce concrete.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Available as small portable units or large truck-mounted mixers. Essential for on-site concrete production.",
//     category: "machines",
//     relatedTerms: ["concrete", "cement", "ready-mix", "mixing"],
//   },
//   {
//     id: "compactor",
//     name: "Compactor",
//     definition:
//       "A machine that compresses and consolidates soil, asphalt, or aggregate materials.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Essential for base preparation and road construction. Ensures proper density and stability.",
//     category: "machines",
//     relatedTerms: ["grading", "base-course", "asphalt", "soil-compaction"],
//   },
//   {
//     id: "loader",
//     name: "Wheel Loader",
//     definition:
//       "Heavy equipment with a front bucket used for loading and transporting materials.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Versatile machine for moving soil, aggregate, and debris. Can be fitted with various attachments.",
//     category: "machines",
//     relatedTerms: ["excavator", "bulldozer", "grading", "material-handling"],
//   },
//   {
//     id: "concrete-pump",
//     name: "Concrete Pump",
//     definition:
//       "Equipment that pumps liquid concrete through hoses to building sites.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Allows concrete placement at height or distance. Essential for elevated slabs and hard-to-reach areas.",
//     category: "machines",
//     relatedTerms: ["concrete", "pumping", "placement", "ready-mix"],
//   },
//   {
//     id: "generator",
//     name: "Construction Generator",
//     definition:
//       "A portable power generator that provides electricity to construction sites.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Supplies power to tools, lights, and equipment when site power is unavailable. Various sizes available.",
//     category: "machines",
//     relatedTerms: ["power-distribution", "temporary-power", "scaffolding"],
//   },

//   // TECHNIQUES
//   {
//     id: "formwork",
//     name: "Formwork",
//     definition:
//       "Temporary or permanent molds into which concrete is poured to create structural elements.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Used to shape concrete into columns, beams, slabs, and walls. Removed after concrete cures or left in place as permanent forms.",
//     category: "techniques",
//     relatedTerms: ["concrete", "curing", "shoring", "concrete-placement"],
//   },
//   {
//     id: "welding",
//     name: "Welding",
//     definition:
//       "A fabrication process that joins materials by melting and fusing them together.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Critical for steel structure assembly, connecting beams, columns, and reinforcement in construction projects.",
//     category: "techniques",
//     relatedTerms: ["rebar", "steel-erection", "inspection", "welder"],
//   },
//   {
//     id: "waterproofing",
//     name: "Waterproofing",
//     definition:
//       "The process of making a structure resistant to water penetration.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Applied to foundations, roofs, and bathrooms using membranes, coatings, or sealants to prevent water damage.",
//     category: "techniques",
//     relatedTerms: ["roofing-membrane", "caulk", "flashing", "drainage"],
//   },
//   {
//     id: "framing",
//     name: "Framing",
//     definition:
//       "The process of erecting the structural skeleton of a building using wood, steel, or other materials.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Creates the primary structural system. Can be wood (residential) or steel (commercial) depending on requirements.",
//     category: "techniques",
//     relatedTerms: ["lumber", "stud", "header", "carpenter"],
//   },
//   {
//     id: "taping",
//     name: "Taping",
//     definition:
//       "The process of applying joint tape over drywall seams to prepare for mudding.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "First step in drywall finishing. Creates a base for joint compound application.",
//     category: "techniques",
//     relatedTerms: ["mudding", "drywall", "finishing", "drywaller"],
//   },
//   {
//     id: "mudding",
//     name: "Mudding",
//     definition:
//       "Applying joint compound (mud) over drywall seams and tape to create smooth surfaces.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Applied in multiple coats with sanding between each coat. Final step in drywall finishing.",
//     category: "techniques",
//     relatedTerms: ["taping", "drywall", "sanding", "drywaller"],
//   },
//   {
//     id: "bricklaying",
//     name: "Bricklaying",
//     definition:
//       "The process of laying bricks or masonry units with mortar to create walls and structures.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Can be structural or veneer. Requires proper joint spacing, leveling, and mortar application.",
//     category: "techniques",
//     relatedTerms: ["mortar", "masonry", "grout", "bricklayer"],
//   },
//   {
//     id: "concrete-placement",
//     name: "Concrete Placement",
//     definition: "The process of pouring and positioning concrete in formwork.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Requires proper vibration to eliminate air voids. Must be completed before concrete begins to set.",
//     category: "techniques",
//     relatedTerms: ["concrete", "formwork", "curing", "concrete-pump"],
//   },
//   {
//     id: "curing",
//     name: "Concrete Curing",
//     definition:
//       "The process of maintaining proper moisture and temperature for concrete hydration after placement.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Critical for strength development. Typically lasts 7-28 days depending on concrete type and requirements.",
//     category: "techniques",
//     relatedTerms: ["concrete", "concrete-placement", "strength", "time"],
//   },
//   {
//     id: "flashing",
//     name: "Flashing",
//     definition:
//       "Metal or membrane material installed to direct water away from building joints and penetrations.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Installed at roof-to-wall transitions, chimneys, and other penetrations to prevent water infiltration.",
//     category: "techniques",
//     relatedTerms: ["waterproofing", "roofing-membrane", "caulk", "shingles"],
//   },

//   // PROFESSIONALS
//   {
//     id: "architect",
//     name: "Architect",
//     definition:
//       "A professional who designs buildings and oversees their construction.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Creates building designs, prepares construction documents, and ensures projects meet building codes and client requirements.",
//     category: "professionals",
//     relatedTerms: [
//       "civil-engineer",
//       "project-manager",
//       "contractor",
//       "blueprints",
//     ],
//   },
//   {
//     id: "civil-engineer",
//     name: "Civil Engineer",
//     definition:
//       "An engineer who designs and supervises infrastructure projects.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Responsible for structural design, site analysis, and ensuring construction meets safety and engineering standards.",
//     category: "professionals",
//     relatedTerms: [
//       "architect",
//       "structural-engineer",
//       "project-manager",
//       "inspections",
//     ],
//   },
//   {
//     id: "project-manager",
//     name: "Project Manager",
//     definition:
//       "A professional who oversees construction projects from start to finish.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Coordinates schedules, budgets, contractors, and resources to ensure projects are completed on time and within budget.",
//     category: "professionals",
//     relatedTerms: [
//       "architect",
//       "civil-engineer",
//       "contractor",
//       "site-supervisor",
//     ],
//   },
//   {
//     id: "carpenter",
//     name: "Carpenter",
//     definition:
//       "A skilled tradesperson who cuts, shapes, and installs wood and other materials.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Specializes in framing, finish carpentry, and custom woodwork. Essential for structural and aesthetic work.",
//     category: "professionals",
//     relatedTerms: ["framing", "lumber", "hammer", "finish-carpenter"],
//   },
//   {
//     id: "electrician",
//     name: "Electrician",
//     definition:
//       "A skilled tradesperson who installs and maintains electrical systems.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Responsible for power distribution, wiring, lighting, and electrical safety. Must follow code requirements.",
//     category: "professionals",
//     relatedTerms: ["electrical-code", "wiring", "conduit", "panel"],
//   },
//   {
//     id: "plumber",
//     name: "Plumber",
//     definition:
//       "A skilled tradesperson who installs and maintains water, gas, and waste systems.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Handles water supply, drainage, venting, and gas lines. Critical for health and safety.",
//     category: "professionals",
//     relatedTerms: ["piping", "drainage", "code", "fixtures"],
//   },
//   {
//     id: "structural-engineer",
//     name: "Structural Engineer",
//     definition:
//       "An engineer specialized in designing structural systems that support building loads.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Calculates loads, designs beams and columns, and ensures structural integrity and safety.",
//     category: "professionals",
//     relatedTerms: ["civil-engineer", "architect", "beam", "column"],
//   },
//   {
//     id: "roofer",
//     name: "Roofer",
//     definition:
//       "A skilled tradesperson who installs and repairs roofing systems.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Specializes in shingles, membranes, flashing, and waterproofing. Essential for weather protection.",
//     category: "professionals",
//     relatedTerms: ["roofing-membrane", "shingles", "flashing", "waterproofing"],
//   },
//   {
//     id: "masonry-contractor",
//     name: "Mason",
//     definition:
//       "A skilled tradesperson who builds with brick, stone, and concrete masonry units.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Handles bricklaying, stone work, and masonry repair. Creates durable walls and structures.",
//     category: "professionals",
//     relatedTerms: ["bricklaying", "mortar", "grout", "masonry"],
//   },
//   {
//     id: "site-supervisor",
//     name: "Site Supervisor",
//     definition:
//       "A professional who oversees daily construction activities and workforce on the job site.",
//     image: "/placeholder.svg?height=200&width=400",
//     usage:
//       "Ensures schedule adherence, quality standards, and safety compliance. Direct supervisor for crews.",
//     category: "professionals",
//     relatedTerms: [
//       "project-manager",
//       "quality-control",
//       "safety",
//       "inspections",
//     ],
//   },

// ];

function Page() {
  // const {} = props

  // const data = allTerms.filter((term) => term.category === "building-elements");
  // console.log(data);

  return (
    <div>
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
