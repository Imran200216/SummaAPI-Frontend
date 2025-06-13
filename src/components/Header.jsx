import { AssetsConstants } from "../constants/assets_constants";
import ViewCountBadge from "./ui/ViewCountBadge";


export const Header = () => {
  return (
    <section className="px-[100px] py-[40px]">
      <div className="flex flex-row justify-between items-center">
        {/* Title */}
        <div className="flex flex-row gap-[23px] items-center justify-center">
          {/* Title  */}
          <p className="font-prompt font-medium text-2xl">Summa Api</p>

          <img src={AssetsConstants.nav_line} alt="img" />

          {/* Nav Items */}
          <div className="flex flex-row gap-[30px] text-[14px]">
            <a href="" className="text-[var(--subTitle)]">
              Home
            </a>
            <a href="" className="text-[var(--subTitle)]">
              Docs
            </a>
          </div>
        </div>

        {/* Views Container*/}
        <ViewCountBadge icon={AssetsConstants.fire} count="130m" />
      </div>
    </section>
  );
};
