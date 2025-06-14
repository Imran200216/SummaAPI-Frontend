const FeatureCard = ({ imageSrc, title }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[26px]">
      {/* Card */}
      <div className="relative bg-white rounded-lg border-2 border-[var(--title)] shadow-[6px_6px_0px_0px_#000000] w-[160px] h-[160px] p-[4px] flex items-center justify-center">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-lg shadow-inner max-w-full max-h-full object-contain"
        />
      </div>

      {/* Card Title */}
      <p className="text-[20px] text-center font-medium text-[var(--featuresText)]">
        {title}
      </p>
    </div>
  );
};

export default FeatureCard;
