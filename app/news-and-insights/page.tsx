import HeroNewsAndInsights from "../components/all/HeroNewsAndInsights";
import FromTheStack from "../components/all/FromTheStack";
import LetsTalk from "../components/all/LetsTalk";
import Footer from "../components/all/Footer";

export default function NewsAndInsightsPage() {
  return (
    <div className="w-full relative">
      <HeroNewsAndInsights />
      <FromTheStack />
      <LetsTalk />
      <Footer />
    </div>
  );
}
