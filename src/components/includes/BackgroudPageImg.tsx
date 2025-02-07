
const BackgroundPageImg = ({
  mobileSrc,
  desktopSrc,
  alt,
  shadow = true,
}: {
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
  shadow?: boolean;
}) => {
  return (
    <picture className={`absolute h-full w-full ${shadow ? "shadow-inner shadow-black" : ""}`}>
      <source srcSet={desktopSrc} media="(min-width: 640px)" />
      <img
        src={mobileSrc}
        alt={alt}
        className="object-cover h-full w-full"
      />
    </picture>
  );
};

export default BackgroundPageImg;
