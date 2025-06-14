import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { AssetsConstants } from "./constants/assets_constants";
import { EntertainmentApi } from "./components/EntertainmentApi";
import { EducationalApi } from "./components/EducationalApi";
import { HumorPickupLinesApi } from "./components/HumorPickupLinesApi";
import { SportLanguagesApi } from "./components/SportLanguagesApi";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <section
        className="h-[830px] w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${AssetsConstants.hero_background})` }}
      >
        {/* Header */}
        <Header />

        {/* Hero*/}
        <Hero />
      </section>

      {/* Features */}
      <Features />

      {/* Entertainment & Fiction Api */}
      <EntertainmentApi />

      {/* Educational & Knowledge Api */}
      <EducationalApi />

      {/* Humor and Pickup Lines Api */}
      <HumorPickupLinesApi />

      {/* Sports & Language Api */}
      <SportLanguagesApi />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
