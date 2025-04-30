import Image from "next/image";

// Atom Components
import ImageDisplay from "@/components/atoms/ImageCard";
import Button from "@/components/atoms/button";
import TextHeader from "@/components/atoms/headings";
import { ImOpt } from "react-icons/im";
import Logo from "@/components/atoms/Logo";
// Image card data array with titles
const imageCards = [
  {
    src: "/image.png",
    title: "Dreamy Beach Escape",
    variant: "square",
    snippet: "Popular",
    snippetPosition: "start",
  },
  // {
  //   src: "/image.png",
  //   title: "Mountain Adventure",
  //   variant: "square",
  //   snippet: "Top Pick",
  //   snippetPosition: "start",
  // },
  // {
  //   src: "/image.png",
  //   title: "City Lights Weekend",
  //   variant: "square",
  //   snippet: "Limited Time",
  //   snippetPosition: "start",
  // },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-16">
    
      <TextHeader
        text="Where Dreams Meet Destinations"
        specialWordsIndices="1"
        
        width="622px"
        buttonText="Featured Experience"
      />
      <Logo />

      <div className="grid grid-cols-3 gap-6">
        {imageCards.map((card, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <ImageDisplay
              src={card.src}
              variant="square"
              snippet={card.snippet}
              snippetPosition="start"
            />
           <TextHeader text="Explore the Beauty of Phewa Lake & Peace Pagoda" size="small"  align="start"/>
          </div>
        ))}

      </div>
      <TextHeader
        text="Where Dreams Meet Destinations"
        specialWordsIndices="3"
        width="622px"
        buttonText="Featured Experience"
      />
      
    </div>
  );
}
