interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

export const Image = ({ src, alt, width = '100%', height = '100%', className: wrapperClassName }: ImageProps) => {
  return <img src={src} alt={alt} className={wrapperClassName} style={{ width, height }} />;
};
