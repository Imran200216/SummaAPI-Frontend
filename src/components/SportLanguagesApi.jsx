import { AssetsConstants } from "../constants/assets_constants";
import ApiListTile from "./ui/ApiListTile";

export const SportLanguagesApi = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-[60px]">
      {/* Play Title */}
      <p className="text-[var-(--featuresText)] font-medium text-[40px] font-prompt text-center">
        Sports & Language
      </p>

      {/* Entertainment SubTitle */}
      <p className="font-normal text-[16px] text-[var(--subTitle)] text-center mt-[14px]">
        We provide four categories of services and you
      </p>

      <div className="flex flex-row justify-between items-center mt-[52px]">
        {/* Play svg */}
        <img src={AssetsConstants.play} alt="img" className="object-cover" />

        {/* List of Entertainment Apis */}
        <div className="flex flex-col justify-center items-center gap-[34px]">
          {/* Cricket List Title */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="Cricket"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--cricketApiListTileColor)]"
          />

          {/* Tamil Fredom Fighters List Tile */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="Tamil Freedom Fighters"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--tamilFreedomFightersApiListTileColor)]"
          />

          {/* Tamil Proverbs List Tile */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="Tamil Proverbs"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--tamilProverbApiListTileColor)]"
          />
        </div>
      </div>
    </section>
  );
};
