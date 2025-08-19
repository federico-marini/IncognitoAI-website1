import { Anonymizer } from "./Sections/Anonymizer/Anonymizer";
import { Features } from "./Sections/Features/Features";
import { Hero } from "./Sections/Hero/Hero";
import { GetStarted } from "./Sections/GetStarted/GetStarted";

const Home = () => {
  return (
    <main>
      <Hero />
      <Anonymizer />
      <Features />
      <GetStarted />
    </main>
  );
};

export default Home;
