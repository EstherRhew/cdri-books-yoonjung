import { useState } from 'react';
import { Skeleton } from './Skeleton';

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

export const Image = ({ src, alt, width = '100%', height = '100%', className }: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ width, height, position: 'relative' }} className={className}>
      {!loaded && <Skeleton width="100%" height="100%" showAnimation={true} />}
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          display: loaded ? 'block' : 'none',
        }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
