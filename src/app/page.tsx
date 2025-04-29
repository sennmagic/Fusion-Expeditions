import Image from "next/image";

// Atom Components
import ImageDisplay from "@/components/atoms/ImageCard";
import Button from "@/components/atoms/button";
import TextHeader from "@/components/atoms/headings";


// Home Page Component
export default function Home() {
  return (
    <>
     <div className="max-w-7xl mx-auto py-16">


      <TextHeader text="Where Dreams Meet Destinations "  specialWordsIndices="3" width='622px' buttonText="
      Featured Experience"  />
<ImageDisplay src="" variant="rectangle" />
     </div>
     
    </>
  )
}
