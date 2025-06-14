import { AssetsConstants } from "../constants/assets_constants";
import ApiListTile from "./ui/ApiListTile";

export const HumorPickupLinesApi = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-[60px]">
      {/* Humor Title */}
      <p className="text-[var-(--featuresText)] font-medium text-[40px] font-prompt text-center">
        Humor & Pickup Lines
      </p>

      {/* Humor SubTitle */}
      <p className="font-normal text-[16px] text-[var(--subTitle)] text-center mt-[14px]">
        We provide four categories of services and you
      </p>

      <div className="flex flex-row justify-between items-center mt-[52px]">
        {/* List of Humor Apis */}
        <div className="flex flex-col justify-center items-center gap-[34px]">
          {/* Designer Pickup Lines List Title */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="Designer Pickup Lines"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--designerPickUpLinesApiListTitleColor)]"
          />

          {/* General Pickup Liness List Tile */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="General Pickup Lines"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--generalPickUpLinesApiListTileColor)]"
          />

          {/* Developer Pickup Lines List Tile */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="Developer Pickup Lines"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--developerPickUpLinesApiListTileColor)]"
          />

          {/* Developer Funny Roasts List Tile */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="Developer Funny Roasts"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--developreFunnyRoastApiListTileColor)]"
          />

          {/* Emoji Quotes List Tile */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="Emoji Quotes"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--emojiQuotesApiListTileColor)]"
          />
        </div>

        {/* Humor svg */}
        <img src={AssetsConstants.humor} alt="img" className="object-cover" />
      </div>
    </section>
  );
};
