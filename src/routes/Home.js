import HomeItWorks from "../components/home/HowItWorks";
import HomeLanding from "../components/home/HomeLanding";
import "../styles/home.css";

function HomePage({ lang }) {
  return (
    <>
      <HomeLanding lang={lang} />
      <HomeItWorks lang={lang} />
    </>
  );
}

export default HomePage;
