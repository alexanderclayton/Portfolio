//import//
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { PortfolioMain } from "../components/PortfolioMain";

export const Home: React.FC = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <PortfolioMain />
      </main>
    </>
  );
};
