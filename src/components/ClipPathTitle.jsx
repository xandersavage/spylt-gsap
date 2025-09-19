const ClipPathTitle = ({ title, color, bg, className, borderColor }) => {
  return (
    <div className="general-title">
      <div
        style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100, 50% 100)",
          borderColor: borderColor,
        }}
        className={`${className} border-[.5vw] text-nowrap opacity-0`}
      >
        <div
          style={{
            backgroundColor: bg,
          }}
          className="md:pb-5 pb-3 md:px-14 px-4 md:pt-0 pt-2"
        >
          <h2
            style={{
              color: color,
            }}
            className="md:text-6xl text-3xl md:leading-tight leading-tight"
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default ClipPathTitle;
