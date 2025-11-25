import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
  definition: string;
  usage: string;
  relatedTerms: React.ReactNode[];
}

function TermCard(props: Props) {
  const { title, image, definition, usage, relatedTerms } = props;

  return (
    <div>
      <Image src={image} alt={title} width={100} height={100} />
      <h2>{title}</h2>
      <div>
        <h4>Definition</h4>
        <p>{definition}</p>
      </div>
      <div>
        <h4>Usage in Construction</h4>
        <p>{usage}</p>
      </div>
      <div>
        <h4>Related Terms</h4>
        <div>
          {relatedTerms.map((term, index) => (
            <p key={index}>{term}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TermCard;
