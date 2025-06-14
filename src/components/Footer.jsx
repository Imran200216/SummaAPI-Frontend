import { AssetsConstants } from "../constants/assets_constants";
import FooterProfileCard from "./ui/FooterProfileCard";

export const Footer = () => {
  return (
    <section
      className="h-[452px] w-screen bg-cover bg-center bg-no-repeat mt-[72px]"
      style={{ backgroundImage: `url(${AssetsConstants.footerBg})` }}
    >
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-row justify-between items-start w-full max-w-[1000px] px-8 gap-12">
          {/* Left: Designer and Developer */}
          <div className="flex flex-col items-center gap-6">
            {/* Raghul (UI/UX Designer) */}
            <FooterProfileCard
              prefixImgSrc={AssetsConstants.footerAvatar}
              prefixImgSize={{ height: 100, width: 100 }}
              suffixImgSrc={AssetsConstants.rotateSquare}
              suffixImgSize={{ height: 64, width: 64 }}
              designation="UI UX Designer"
              name="Raghul R"
              linktreeUrl="https://linktr.ee/imran"
            />

            {/* Imran (Full Stack Developer) */}
            <FooterProfileCard
              prefixImgSrc={AssetsConstants.rotateSquare}
              prefixImgSize={{ height: 64, width: 64 }}
              suffixImgSrc={AssetsConstants.footerAvatar}
              suffixImgSize={{ height: 100, width: 100 }}
              designation="Full Stack Developer"
              name="Imran B"
              linktreeUrl="https://linktr.ee/imran"
            />
          </div>

          {/* Right: Feedback Box */}
          <div>
            <p>hi</p>
          </div>
        </div>
      </div>
    </section>
  );
};
