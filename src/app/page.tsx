import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import GetInTouch from "@/components/GetInTouch";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Slider />
      <Services />
      <Projects />
      <GetInTouch />
      <Gallery />
      <Footer />
    </div>
  );
}
