import { AssetsConstants } from "../constants/assets_constants";
import ApiListTile from "./ui/ApiListTile";

export const EntertainmentApi = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-[60px]">
      {/* Entertainment Title */}
      <p className="text-[var-(--featuresText)] font-medium text-[40px] font-prompt text-center">
        Entertainment & Fiction
      </p>

      {/* Entertainment SubTitle */}
      <p className="font-normal text-[16px] text-[var(--subTitle)] text-center mt-[14px]">
        We provide four categories of services and you
      </p>

      <div className="flex flex-row justify-between items-center mt-[52px]">
        {/* List of Entertainment Apis */}
        <div className="flex flex-col justify-center items-center gap-[34px]">
          {/* Marvel List Title */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="Marvel"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--marvelApiListTitleColor)]"
          />

          {/* DC Comics List Tile */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="DC Comics"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--dcComicsApiListTitleColor)]"
          />

          {/* Anime List Tile */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="Anime"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--animeApiListTileColor)]"
          />

          {/* Nostaligic Cartoons */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="Nostalgic Cartoons"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--nostalgicCartoonsApiListTileColor)]"
          />

          {/* Comedies List Tile */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="Comedies"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--comediesApiListTileColor)]"
          />

          {/* Dialogues List Title */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="Dialogues"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--dialoguesApiListTileColor)]"
          />
        </div>

        {/* Entertainment svg */}
        <img
          src={AssetsConstants.entertainment}
          alt="img"
          className="object-cover"
        />
      </div>
    </section>
  );
};
