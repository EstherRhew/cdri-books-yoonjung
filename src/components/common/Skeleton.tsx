import { CSSProperties } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface SkeletonProps {
  width?: string;
  height?: string;
  showAnimation?: boolean;
  style?: CSSProperties;
}

export const Skeleton = ({ width = '100%', height = '100%', showAnimation = true, style }: SkeletonProps) => {
  return <StyledSkeleton $width={width} $height={height} $showAnimation={showAnimation} style={style} />;
};

const StyledSkeleton = styled.div<{ $width: string; $height: string; $showAnimation: boolean }>`
  ${({ $width, $height, $showAnimation }) => css`
    width: ${$width};
    height: ${$height};
    background: #eee;
    background-image: linear-gradient(to right, #eee 0%, #ddd 20%, #eee 40%, #eee 100%);
    background-repeat: no-repeat;
    background-size: 800px 104px;
    ${$showAnimation &&
    css`
      animation: ${shimmer} 1.2s linear infinite;
    `}
    border-radius: 4px;
  `}
`;

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;
