import Image from "next/image";
import Footer from "../components/organisms/Footer";
import NavBar from "../components/organisms/NavBar";
// Home Page Component
export default function Home() {
  return (
    <>
         <NavBar />
     <div className=" mt-20 overflow-x-hidden">
        
          <Footer />
      </div>
     
    </>
  )
}
