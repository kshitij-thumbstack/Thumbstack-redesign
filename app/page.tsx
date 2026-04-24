import Hero from "./components/home/Hero";
import FieldsOfPlay from "./components/home/FieldsOfPlay";
import PartnerBrands from "./components/home/PartnerBrands";
import Principles from "./components/home/Principles";
import SqulioProject from "./components/home/SqulioProject";
import WorkItem from "./components/home/WorkItem";
import FromTheStack from "./components/home/FromTheStack";
import LetsTalk from "./components/home/LetsTalk";
import Footer from "./components/home/Footer";

export default function Home() {
  return (
    <div className="h-[100svh] overflow-y-auto w-full snap-y snap-mandatory scroll-smooth relative">
      <Hero />
      <SqulioProject />
      <FieldsOfPlay />
      <PartnerBrands />
      <Principles />
      <WorkItem />
      <FromTheStack />
      <LetsTalk />
      <Footer />
    </div>
  );
}
