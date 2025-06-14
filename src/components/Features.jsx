import FeatureCard from "./ui/FeatureCard";
import { AssetsConstants } from "../constants/assets_constants";

export const Features = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-[52px]">
      {/* Feature Title */}
      <p className="text-[var-(--featuresText)] font-medium text-[40px] font-prompt text-center">
        Advanced Features & Benefits
      </p>

      {/* Feature SubTitle */}
      <p className="font-normal text-[16px] text-[var(--subTitle)] text-center mt-[14px]">
        We provide four categories of services and
        <br />
        you will get high quality services from here
      </p>

      {/* Features Cards */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[160px] mt-[64px]">
        <FeatureCard
          imageSrc={AssetsConstants.plugPlay}
          title="Plug-and-Play"
        />
        <FeatureCard imageSrc={AssetsConstants.fillerFun} title="FillerFun" />
        <FeatureCard imageSrc={AssetsConstants.apiKits} title="API Kits" />
        <FeatureCard imageSrc={AssetsConstants.engageFul} title="Engageful" />
      </div>

      {/* Get Free Trial */}
    </section>
  );
};
