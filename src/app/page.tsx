import Image from "next/image";

// Atom Components
import ImageDisplay from "@/components/atoms/ImageCard";
import Button from "@/components/atoms/button";
import TextHeader from "@/components/atoms/headings";
import TestimonialCarousel from "@/components/organisms/testimonial/testimoinal";  
// Image card data array with titles
const imageCards = [
  {
    src: "/image.png",
    title: "Dreamy Beach Escape",
    variant: "square",
    snippet: "Popular",
    snippetPosition: "start",
  },
  {
    src: "/image.png",
    title: "Mountain Adventure",
    variant: "square",
    snippet: "Top Pick",
    snippetPosition: "start",
  },
  {
    src: "/image.png",
    title: "City Lights Weekend",
    variant: "square",
    snippet: "Limited Time",
    snippetPosition: "start",
  },

];

const destinations = [
  {
    id: 0,
    src: "/image.png",
    title: "Dreamy Beach Escape",
    variant: "rectangle",
    snippet: "4 Trips",
    snippetPosition: "center",

  },
  {
    id: 1,
    src: "/image.png",
    title: "Dreamy Beach Escape",
    variant: "square",
    snippet: "Popular",
    snippetPosition: "center",

  },
  {
    id: 2,
    src: "/image.png",
    title: "Dreamy Beach Escape",
    variant: "square",
    snippet: "Popular",
    snippetPosition: "center",

  },
  {
    id: 3,
    src: "/image.png",
    title: "Dreamy Beach Escape",
    variant: "square",
    snippet: "Popular",
    snippetPosition: "center",

  },
  {
    id: 5,
    src: "/image.png",
    title: "Dreamy Beach Escape",
    variant: "square",
    snippet: "Popular",
    snippetPosition: "center",

  },
]
const PopularTour = [
  {
    src: "/image.png",
    title: "Explore the Beauty of Phewa Lake & Peace Pagoda",
    variant: "rectangle",
    snippet: "Moderate",
    snippetPosition: "center",

  },
  {
    src: "/image.png",
    title: "Explore the Beauty of Phewa Lake & Peace Pagoda",
    variant: "rectangle",
    snippet: "Moderate",
    snippetPosition: "center",

  },
  {
    src: "/image.png",
    title: "Explore the Beauty of Phewa Lake & Peace Pagoda",
    variant: "rectangle",
    snippet: "Moderate",
    snippetPosition: "center",

  },
]
const topcategories = [
  {
    src: "/image.png",
    title: "Trekking the Himalayas",
    subtitle: "Walk among the giants",
    description: "explore world-renowned trails like Everest Base Camp, Annapurna Circuit, and Langtang Valley with expert local guides.",
    variant: "square",
    snippet: "Popular",
    snippetPosition: "start",
  },
  {
    src: "/image.png",
    title: "Trekking the Himalayas",
    subtitle: "Walk among the giants",
    description: "explore world-renowned trails like Everest Base Camp, Annapurna Circuit, and Langtang Valley with expert local guides.",
    variant: "square",
    snippet: "Popular",
    snippetPosition: "start",
  },
  {
    src: "/image.png",
    title: "Trekking the Himalayas",
    subtitle: "Walk among the giants",
    description: "explore world-renowned trails like Everest Base Camp, Annapurna Circuit, and Langtang Valley with expert local guides.",
    variant: "square",
    snippet: "Popular",
    snippetPosition: "start",
  },
]
const blogscards = [
  {
    id: 0,
    src: "/images/Lake.png",
    title: "Does Your Private Jet Charter Match Your Unique Lifestyle? Experience Airvoir’s Bespoke Service in the Skies.",
    description: "Tired of tourist traps? Discover off-the-beaten-path destinations that will make your next trip unforgettable. From untouched beaches to secret mountain towns, we've got your next adventure covered!",
    variant: "rectangle",


  },
  {
    id: 1,
    src: "/images/moutain1.png",
    title: "Sustainable Travel: How to Explore Responsibly.",
    description: "Learn how you can leave a positive impact while exploring the world. From eco-friendly stays to ethical wildlife encounters.",
    variant: "square",


  },
  {
    id: 2,
    src: "/images/moutain2.png",
    title: "Sustainable Travel: How to Explore Responsibly.",
    description: "Learn how you can leave a positive impact while exploring the world. From eco-friendly stays to ethical wildlife encounters",
    variant: "square",


  },

]



export default function Home() {
  return (
    <section className="bg-orange-50">

      {/* Featured Experience */}
      <section className="max-w-7xl mx-auto">
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
              <TextHeader text={imageCards[index].title} size="small" align="start" />
            </div>
          ))}

        </div>
      </section>

      {/* Best Destination */}
      <section className="max-w-7xl mx-auto">
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
      </section>


      {/* Top categories */}
      <section className="max-w-7xl mx-auto mt-10">
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
              <TextHeader text={topcategories[index].title} size="small" align="left" />
              <h2 className="self-start mb-1">{topcategories[index].subtitle}</h2>
              <p className="self-start ">{topcategories[index].description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Everest Base Camp Trek is loved worldwide */}
      <section className="max-w-7xl mx-auto relative w-full h-[400px]">
        <Image
          src="/images/EverestBackground.png"
          alt="Everest Background"
          layout="fill"

        />

        <div className="absolute inset-0 z-10 absolute inset-0 z-10 flex flex-col justify-center items-center text-center">
          <TextHeader
            text="Our Everest Base Camp Trek is loved worldwide"
            specialWordsIndices="7"
            align="center"
            width="622px"
          />
          <p className="mt-4 max-w-xl">
            Everest Base Camp Trek is a world-renowned adventure that takes you deep into the heart of the Himalayas. Experience breathtaking views.
          </p>
        </div>
      </section>

      {/* Popular Tour */}
      <section className="max-w-7xl mx-auto">
        <TextHeader
          text="Amazing tour places around the Nepal"
          specialWordsIndices="2,3"
          align="left"
          width="622px"
          buttonText="Popular Tour"
        />

        <div className="grid grid-cols-3 gap-6">
          {PopularTour.map((card, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <ImageDisplay
                src={card.src}
                variant="square"
                snippet={card.snippet}
                snippetPosition="start"

              />
              <TextHeader text={PopularTour[index].title} size="small" align="start" />
            </div>
          ))}

        </div>
      </section>

        
        {/* Testimonial */}
        <TestimonialCarousel />

      {/* Share the joy of your journey */}
      <section className=" mx-auto bg-blue-900">
        <div className=" ml-20">
          <TextHeader
            text="Share the joy of your journey"
            specialWordsIndices="1"
            align="start"
            width="622px"

          />

          <div className="flex flex-cols-1 gap-6">

            {imageCards.map((card, index) => (
              <div key={index} className="flex flex-col items-center ">
                <ImageDisplay
                  src={card.src}
                  variant="square"
                  snippet={card.snippet}
                  snippetPosition="start"
                />
                <TextHeader text="Explore the Beauty of Phewa Lake & Peace Pagoda" size="small" align="start" />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* From the blogs */}
      <section className="max-w-7xl mx-auto">
        <TextHeader
          text="Adventure Awaits: Travel Stories & Tips"
          specialWordsIndices="2"
          align="center"
          width="622px"
          buttonText="From the Blogs"
        />

        <div className="grid grid-cols-3 grid-rows-1 gap-2 ">
          {/* Large feature (Left side, spans 2 cols + 2 rows) */}
          <div className="col-span-2 row-span-2 flex flex-col">
            <ImageDisplay
              src={blogscards[0].src}
              variant="rectangle"
              width={820}
              height={628}
            />
            <TextHeader text={blogscards[0].title} size="small" align="left"  />
            <p>{blogscards[0].description}</p>
          </div>

          {/* Column 3, Row 1 - Two small side-by-side images */}
          <div className="col-start-3 row-start-1 grid grid-row-2 gap-6 ">
            {[blogscards[1], blogscards[2]].map((card, i) => (
              <div key={card.id} className="flex flex-col">
                <ImageDisplay
                  src={card.src}
                  variant="square"
                  width={408} // Half of 408
                  height={236}
                />
                <TextHeader text={blogscards[i].title} size="small" align="left" />
                <p>{blogscards[i].description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </section>



  );
}


