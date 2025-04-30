import Image from "next/image";

// Atom Components
import ImageDisplay from "@/components/atoms/ImageCard";
import Button from "@/components/atoms/button";
import TextHeader from "@/components/atoms/headings";

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

const destinations = [
  {
    id:0,
    src: "/image.png",
    title: "Dreamy Beach Escape",
    variant: "rectangle",
    snippet: "4 Trips",
    snippetPosition: "center",

  },
  {
    id:1,
    src: "/image.png",
    title: "Dreamy Beach Escape",
    variant: "square",
    snippet: "Popular",
    snippetPosition: "center",

  },
  {
    id:2,
    src: "/image.png",
    title: "Dreamy Beach Escape",
    variant: "square",
    snippet: "Popular",
    snippetPosition: "center",

  },
  {
    id:3,
    src: "/image.png",
    title: "Dreamy Beach Escape",
    variant: "square",
    snippet: "Popular",
    snippetPosition: "center",

  },
  {
    id:5,
    src: "/image.png",
    title: "Dreamy Beach Escape",
    variant: "square",
    snippet: "Popular",
    snippetPosition: "center",

  },
]

const topcategories = [
  {
    src: "/image.png",
    title: "Trekking the Himalayas",
    subtitle:"Walk among the giants",
    description:"explore world-renowned trails like Everest Base Camp, Annapurna Circuit, and Langtang Valley with expert local guides.",
    variant: "square",
    snippet: "Popular",
    snippetPosition: "start",
    

  },

]
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1>helo this</h1>

      <TextHeader
        text="Where Dreams Meet Destinations"
        specialWordsIndices="1"
        align="center" 
        width="622px"
        buttonText="Featured Experience"
      />

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
        text="Top Picks for Your Next Adventure"
        specialWordsIndices="5"
        width="622px"
        buttonText="Best Destinations"
      />

   <div className="grid grid-cols-3 gap-6 ">
     {destinations.map((card, index) => {
    let colspanClass = "";
    if (index === 0) {
      colspanClass = "col-span-2";
    } else {
      colspanClass = "col-span-1";
    }
    return (
      <div key={card.id} className={`flex flex-col items-center text-center ${colspanClass}`}>
        <ImageDisplay
          src={card.src}
          variant={index === 0 ? "rectangle" : "square"}
          snippet={card.snippet}
          snippetPosition="center"
        />
      </div>
    );
  })}
  </div>
     <section className=" mt-10">
  <TextHeader
        text="Unforgettable Experiences Await"
        specialWordsIndices="1"
        align="left" 
        width="622px"
        buttonText="Tour Categories"
      />

      <div className="grid grid-cols-3 gap-6">
        {topcategories.map((card, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <ImageDisplay
              src={card.src}
              variant="square"
              snippet={card.snippet}
              snippetPosition="start"
            />
           <TextHeader text ={card.title} size="small" align="start"/>
           <h1 className="self-start">Walk among the giants</h1>
           <p className="self-start">explore world-renowned trails like Everest Base Camp, Annapurna Circuit, and Langtang Valley with expert local guides.</p>
          </div>
        ))}
        </div>
</section>

    </div>
   

  );
}


