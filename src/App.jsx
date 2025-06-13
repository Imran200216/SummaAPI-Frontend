import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { AssetsConstants } from "./constants/assets_constants";

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
        <Hero/>
      </section>

      {/* Features */}
      <Features/>
    </>
  );
}

export default App;
