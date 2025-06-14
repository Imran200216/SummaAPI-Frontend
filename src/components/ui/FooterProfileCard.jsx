const FooterProfileCard = ({
  prefixImgSrc,
  prefixImgSize = { height: 100, width: 100 },
  suffixImgSrc,
  suffixImgSize = { height: 100, width: 100 },
  designation,
  name,
  linktreeUrl,
}) => {
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      {/* Prefix Image (Avatar) */}
      <img
        src={prefixImgSrc}
        alt="prefix"
        style={{ height: prefixImgSize.height, width: prefixImgSize.width }}
        className="object-cover"
      />

      {/* Person Info */}
      <div className="flex flex-col justify-start items-start">
        <p className="font-medium text-[20px] font-promt text-[var-(--featuresText)]">
          {designation}
        </p>
        <p className="font-medium text-[16px] font-prompt text-[var-(--featuresText)]">
          {name}
        </p>

        {/* Linktree */}
        <div
          onClick={linktreeUrl}
          className="flex flex-row justify-start items-center gap-2"
        >
          <a
            href={linktreeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[var(--linkTreeText)] font-medium text-[14px]"
          >
            Linktree
          </a>
          <img src="/assets/svg/arrow-up.svg" alt="arrow" className="h-4 w-4" />
        </div>
      </div>

      {/* Suffix Image */}
      <img
        src={suffixImgSrc}
        alt="suffix"
        style={{ height: suffixImgSize.height, width: suffixImgSize.width }}
        className="object-cover"
      />
    </div>
  );
};

export default FooterProfileCard;
