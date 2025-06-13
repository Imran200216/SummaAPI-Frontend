const ViewCountBadge = ({ icon, count, className = "" }) => {
  return (
    <div
      className={`h-[32px] w-[71px] bg-[var(--viewContainerBg)] rounded-[11px] ${className}`}
    >
      <div className="h-full flex flex-row justify-center items-center gap-[8px]">
        <img src={icon} alt="icon" className="h-[20px] w-[20px]" />
        <p className="font-inter text-[var(--secondary)] text-xs">{count}</p>
      </div>
    </div>
  );
};

export default ViewCountBadge;
