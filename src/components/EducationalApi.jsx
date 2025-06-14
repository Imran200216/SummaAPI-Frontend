import { AssetsConstants } from "../constants/assets_constants";
import ApiListTile from "./ui/ApiListTile";

export const EducationalApi = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-[60px]">
      {/* Entertainment Title */}
      <p className="text-[var-(--featuresText)] font-medium text-[40px] font-prompt text-center">
        Education & Knowledge Tourism{" "}
      </p>

      {/* Entertainment SubTitle */}
      <p className="font-normal text-[16px] text-[var(--subTitle)] text-center mt-[14px]">
        We provide four categories of services and you
      </p>

      <div className="flex flex-row justify-between items-center mt-[52px]">
        {/* Education svg */}
        <img
          src={AssetsConstants.education}
          alt="img"
          className="object-cover"
        />

        {/* List of Education Apis */}
        <div className="flex flex-col justify-center items-center gap-[34px]">
          {/* Wonders List Title */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="Wonders"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--wondersApiListTileColor)]"
          />

          {/* Dinosaurs Species List Tile */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="Dinosaurs Species"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--dinosaursSpeciesApiListTileColor)]"
          />

          {/* Facts List Tile */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="Facts"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--factsApiListTileColor)]"
          />

          {/* Books List Tile */}
          <ApiListTile
            onClick={() => {}}
            leadingImg={AssetsConstants.marvelApi}
            apiTitle="Books"
            apiUrl="https://chromewebstore.google.com/detail/"
            listBgColor="bg-[var(--booksApiListTileColor)]"
          />
        </div>
      </div>
    </section>
  );
};
