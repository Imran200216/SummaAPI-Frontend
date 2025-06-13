import { AssetsConstants } from "../constants/assets_constants";

export const Features = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      {/* Feature Title */}
      <p>Advanced Features & Benefits</p>

      {/* Feature SubTitle */}
      <p>
        We provide four categories of services and you will get high quality
        services from here
      </p>

      {/* Features Card */}
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-[26px]">
          {/* Card  */}
          <div className="relative inline-block p-[2px] bg-white rounded-lg shadow-[6px_6px_0px_0px_#000000]">
            <img
              src={AssetsConstants.plugPlay}
              alt="img"
              className="block w-full h-auto rounded-lg border-2 border-[#000000] shadow-inner "
            />
          </div>

          {/* Card Title */}
          <p>Plug-and-Play</p>
        </div>
      </div>
    </section>
  );
};
