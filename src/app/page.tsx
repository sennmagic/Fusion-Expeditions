import Image from "next/image";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineClock } from 'react-icons/hi';
import { FaHiking } from 'react-icons/fa';
// Atom Components
import ImageDisplay from "@/components/atoms/ImageCard";
import Button from "@/components/atoms/button";
import TextHeader from "@/components/atoms/headings";
import { fetchAPI } from "@/utils/apiService";
import { ImOpt } from "react-icons/im";
import Logo from "@/components/atoms/Logo";
import PartnerSection from "@/components/organisms/partners";
import { CiLocationOn } from "react-icons/ci";
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
  },  {
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
    location: "Pokhara, Nepal",
    duration: "2 Days",
    title: "Explore the Beauty of Phewa Lake & Peace Pagoda",
    priceRange: "$200 - $300",
    variant: "rectangle",
    snippet: "Moderate",
    snippetPosition: "center",

  },
  {
    src: "/image.png",
    location: "Pokhara, Nepal",
    duration: "2 Days",
    title: "Explore the Beauty of Phewa Lake & Peace Pagoda",
    priceRange: "$200 - $300",
    variant: "rectangle",
    snippet: "Moderate",
    snippetPosition: "center",

  },
  {
    src: "/image.png",
    location: "Pokhara, Nepal",
    duration: "2 Days",
    title: "Explore the Beauty of Phewa Lake & Peace Pagoda",
    priceRange: "$200 - $300",
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
    description: "Explore world-renowned trails like Everest Base Camp, Annapurna Circuit, and Langtang Valley with expert local guides.",
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
    description: "Explore world-renowned trails like Everest Base Camp, Annapurna Circuit, and Langtang Valley with expert local guides.",
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

const journeyCards = [
  {
    src: "/images/Journey.png",
    title: "@jane87",
    variant: "smallsquare",
  },
  {
    src: "/images/Journey.png",
    title: "@jane87",
    variant: "smallsquare",
  },
  {
    src: "/images/Journey.png",
    title: "@jane87",
    variant: "smallsquare",

  },
  {
    src: "/images/Journey.png",
    title: "@jane87",
    variant: "smallsquare",
  },
];

export default async function Home() {
  return (
    <section className="bg-orange-50 mb-16">

   
      {/* Best Destination */}
      
      <section className="max-w-7xl mx-auto mb-16">
  <TextHeader
    text="Where Dreams Meet Destinations"
    buttonText="Popular Tour"
    size="medium"
    className="mb-10" // Increased spacing for better visual balance

  
  />

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> {/* Consistent gap */}
    {PopularTour.map((card, index) => (
      <div key={index} className="flex flex-col gap-4">
        <div className="aspect-video">
          <ImageDisplay
            src={card.src}
            variant="square"
            snippet={card.snippet}
            snippetPosition="start"
          />
        </div>

        <div className="flex flex-col gap-3"> {/* Add consistent internal gap */}
          <div className="flex justify-between text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <CiLocationOn className="w-5 h-5" />
              {card.location}
            </span>
            <span className="flex items-center gap-1">
              <HiOutlineClock className="w-5 h-5" />
              {card.duration}
            </span>
          </div>

          <TextHeader text={card.title} size="small" align="left" width={460} />

          <div className="w-full h-[1.5px] bg-[#C2C2C2]" /> {/* Consistent thickness and color */}

          <div className="text-lg font-semibold mt-2">
            Start From <span className="ml-10 text-orange-500 ">{card.priceRange}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
<section className="max-w-7xl mx-auto px-4 mb-16">
  <TextHeader
    text="Unforgettable Experiences Await"
    align="left"
    width="622px"
    buttonText="Tour Categories"
    className="mb-8"
  />

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10    ">
    {topcategories.map((card, index) => (
      <div key={index} className="flex flex-col gap-2">
        <div className="aspect-square">
          <ImageDisplay
            src={card.src}
            variant="square"
            snippet={card.snippet}  
            snippetPosition="start"
           
          />
        </div>
        <div className="px-2 flex flex-col">
          <TextHeader text={card.title} size="small" align="left" />
          <h2 className="text-lg font-semibold">{card.subtitle}</h2>
          <p className="text-gray-600 text-justify">
            {card.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
<PartnerSection />
      {/* Everest Section */}
      <section className="relative h-[600px] mb-16">
        <div className="absolute inset-0">
          <Image
            src="/images/EverestBackground.png"
            alt="Everest Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center ">
          <div className="max-w-2xl px-4">
            <TextHeader
              text="Our Everest Base Camp Trek is loved worldwide"
         
              align="center"
              width="622px"
              className=""
            />
            <p className="mt-4 ">
              Everest Base Camp Trek is a world-renowned adventure that takes you deep into the heart of the Himalayas.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-6 ">
              <div className="flex items-center gap-2">
                <HiOutlineClock className="w-6 h-6" />
                <span>12-14 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-6 h-6" />
                <span>Everest (Khumbu), Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHiking className="w-6 h-6" />
                <span>Moderate to Challenging</span>
              </div>
            </div>
            <Button 
              text="Start Your Adventure" 
              variant="primary" 
              className="mt-8 mx-auto" 
            />
          </div>
        </div>
      </section>


   
      <section className="max-w-7xl mx-auto  mb-16">
  <TextHeader
    text="Adventure Awaits: Travel Stories & Tips"
    buttonText="From the Blogs"
    className="mb-8"
    type="main"
  />

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
    {/* Left Side: Large Blog Post */}
    <div className="lg:col-span-2 flex flex-col">
      <div className="aspect-video w-full">
        <ImageDisplay src={blogscards[0].src} variant="rectangle" />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">{blogscards[0].title}</h3>
        <p className="mt-2 text-gray-600">{blogscards[0].description}</p>
      </div>
    </div>

    {/* Right Side: Two Small Blog Posts */}
    <div className="flex flex-col   ">
      {blogscards.slice(1, 3).map((card) => (
        <div key={card.id} className="flex flex-col">
          <div className="">
            <ImageDisplay src={card.src} variant="smallrectangle" />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">{card.title
              
              
              }
                          <p className=" text-justify text-gray-600">{card.description}</p>
              
              </h3>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="max-w-7xl mx-auto mb-16">
  <TextHeader
    text="Adventure Awaits: Travel Stories & Tips"
    buttonText="From the Blogs"
    className="mb-8"
  />

  {/* First Row */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
    {/* Rectangle Image (spans 2 columns) */}
    <div className="lg:col-span-2">
      <ImageDisplay src={imageCards[0].src} variant="rectangle" height={430} />
    </div>

    {/* Square Image */}
    <div>
      <ImageDisplay src={imageCards[1].src} variant="square" />
    </div>
  </div>

  {/* Second Row with 3 Square Images */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {imageCards.slice(2, 5).map((card) => (
      <div key={card.id}>
        <ImageDisplay src={card.src} variant="square" alt="Pashpati" snippet="
        popular" />
      </div>
    ))}
  </div>
</section>


    </section>
  );
}