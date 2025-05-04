// TestimonialCarousel.jsx
'use client';

import React from "react";
import { FaStar } from "react-icons/fa";
import TextHeader from "../../atoms/headings";
import ArrowIcon from "@/components/atoms/arrowIcon";


const testimonials = [
  {
    quote:
      "From the moment we landed in Nepal to our final trek through the Himalayas, everything was perfectly arranged. The guides were knowledgeable and friendly, and the views were just breathtaking",
    name: "Ram Lal Adhikari",
    role: "Manager",
    image: "/images/Avtar.png",
  },
  {
    quote:
      "From the moment we landed in Nepal to our final trek through the Himalayas, everything was perfectly arranged. The guides were knowledgeable and friendly, and the views were just breathtaking",
    name: "Raj S., India",
    role: "Manager",
    image: "/images/Avtar.png",
  },
  {
    quote:
      "From the moment we landed in Nepal to our final trek through the Himalayas, everything was perfectly arranged. The guides were knowledgeable and friendly, and the views were just breathtaking.",
    name: "Emily R., Canada",
    role: "CEO",
    image: "/images/Avtar.png",
  },
];

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, image }) => {
  return (
    <div>
      <ArrowIcon 
        size={40}
        color="#fff"
        backgroundColor="#f7931e"
        iconPadding={10}
        borderRadius="50%"
        direction="left"
        position="top-left"
      />
    <div className="min-w-[320px] max-w-[400px]  h-[250px] bg-orange-200 rounded-xl p-6 snap-center flex-shrink-0 shadow-md">
      <div className="text-yellow-500 flex  mb-3">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <FaStar key={i} />
          ))}
      </div>
      <p className="text-m text-bold text-base mb-1 text-[#2C2727] font-dmSans">{quote}</p>
      <div className="flex items-start gap-3 mt-4">
        <img src={image} className="w-10 h-10 rounded-full object-cover" alt={name} />
        <div className="flex flex-col w-1/2 h-[50px] justify-start">
          <p className="font-semibold text-bold text-[#2C2727] font-dmSans mb-1">{name}</p>
          <p className="text-bold text-gray-600 font-dmSans">{role}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

const TestimonialCarousel = () => {
  return (
    <div className="relative max-w-7xl mx-auto item-center px-4 py-10">
      <TextHeader
        text="Hear from Our Travelers: Testimonials & Stories"
        specialWordsIndices="4"
        align="center"
        width="760px"
        buttonText="What They Say"
      />

      <div className="flex items-center gap-6  px-1 py-6 bg-[linear-gradient(90deg,_#FEF9EE_0.88%,_#1C9ADB_32.63%,_#0F7BBA_70.26%,_#FEF9EE_100%)] ">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>

    

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${i === 0 ? "bg-orange-400" : "bg-gray-300"}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
