import Hero from "./components/all/Hero";
import FieldsOfPlay from "./components/all/FieldsOfPlay";
import PartnerBrands from "./components/all/PartnerBrands";
import Principles from "./components/all/Principles";
import BuildYourStack from "./components/all/BuildYourStack";
import SqulioProject from "./components/all/SqulioProject";
import BFTProject from "./components/all/BFTProject";
import WorkItem from "./components/all/WorkItem";
import FromTheStack from "./components/all/FromTheStack";
import LetsTalk from "./components/all/LetsTalk";
import Footer from "./components/all/Footer";

export default function Home() {
  return (
    <div className="w-full relative">
      <Hero />
      <SqulioProject />
      <BFTProject />
      <FieldsOfPlay />
      <PartnerBrands />
      <Principles />
      <WorkItem />
      <FromTheStack />
      <BuildYourStack />
      <LetsTalk />
      <Footer />
    </div>
  );
}
