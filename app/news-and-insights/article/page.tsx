import NewsAndInsightsArticle from "../../components/all/NewsAndInsightsArticle";
import FieldsOfPlay from "../../components/all/FieldsOfPlay";
import BuildYourStack from "../../components/all/BuildYourStack";
import LetsTalk from "../../components/all/LetsTalk";
import Footer from "../../components/all/Footer";

export default function NewsAndInsightsArticlePage() {
  return (
    <div className="w-full relative">
      <NewsAndInsightsArticle />
      <FieldsOfPlay />
      <BuildYourStack />
      <LetsTalk />
      <Footer />
    </div>
  );
}
