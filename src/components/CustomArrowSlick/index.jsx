export const CustomArrowSlick = (props) => {
  const { className, style, onClick, src } = props;
  const isPrev = className.includes("slick-prev");
  const isNext = className.includes("slick-next")
  return (
    <img
      className={className}
      src={src}
      alt=""
      style={{
        ...style,
        width: 36,
        height: 36,
        left: isPrev ? "-40px" : style.left,
        right: isNext ? "-40px" : style.right
      }}
      onClick={onClick}
    />
  );
};
