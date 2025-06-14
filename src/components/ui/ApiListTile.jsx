import { AssetsConstants } from "../../constants/assets_constants";

const ApiListTile = ({
  leadingImg,
  apiTitle,
  apiUrl,
  listBgColor,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-row h-[70px] w-[582px] justify-between items-center px-[20px] py-[8px] rounded-[10px] cursor-pointer ${listBgColor}`}
    >
      {/* Leading Image */}
      <img
        src={leadingImg}
        alt="leading"
        className="h-[40px] w-[40px] object-cover"
      />
      {/* Title and URL */}
      <div className="flex flex-col flex-1 ml-[42px]">
        <p className="font-semibold text-[var(--secondary)] font-prompt text-[26px]">
          {apiTitle}
        </p>
        <p className="font-normal text-[var(--secondary)] font-prompt truncate text-[13px]  ">
          {apiUrl}
        </p>
      </div>
      {/* Arrow Icon */}
      <img
        src={AssetsConstants.arrowForward}
        alt="arrow"
        className="h-[22px] w-[32px] object-cover"
      />
    </div>
  );
};

export default ApiListTile;
