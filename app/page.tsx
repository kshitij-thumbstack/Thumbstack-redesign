import Hero from "./components/all/Hero";
import FieldsOfPlay from "./components/all/FieldsOfPlay";
import PartnerBrands from "./components/all/PartnerBrands";
import ProductDriven from "./components/all/ProductDriven";
import Principles from "./components/all/Principles";
import BuildYourStack from "./components/all/BuildYourStack";
import SqulioProject from "./components/all/SqulioProject";
import BFTProject from "./components/all/BFTProject";
import WorkItem from "./components/all/WorkItem";
import FromTheStack from "./components/all/FromTheStack";
import LetsTalk from "./components/all/LetsTalk";
import Footer from "./components/all/Footer";

import { fetchStrapi } from "./lib/strapi";

export default async function Home() {
  let techItems = [];
  try {
    const res = await fetchStrapi("tech-stacks", "populate=*");
    techItems = res.data || [];
  } catch (err) {
    console.error("Failed to fetch tech stack for home page:", err);
  }

  return (
    <div className="w-full relative">
      <Hero />
      <SqulioProject />
      <BFTProject />
      <FieldsOfPlay />
      <PartnerBrands />
      <Principles />
      <WorkItem />
      <ProductDriven techItems={techItems} />
      <FromTheStack />
      <BuildYourStack />
      <LetsTalk />
      <Footer />
    </div>
  );
}
