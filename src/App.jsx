import CardProduct from "./components/CardProduct";
import FooterSection from "./components/Layouts/FooterSection";
import HeroSection from "./components/Layouts/HeroSection";
import ProdSection from "./components/Layouts/ProductSection";
import NavBar from "./components/NavBar";
import axios from "axios";

function App() {
  return (
    <>
      <NavBar />
      <div className="overflow-x-hidden mx-32 mt-32">
        <HeroSection />
      </div>
      <ProdSection />
      <FooterSection />
    </>
  );
}

export default App;
