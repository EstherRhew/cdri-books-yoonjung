import { CSSProperties, JSX, ReactNode } from 'react';
import styled from 'styled-components';
import { ThemeTypography, ThemeTypographyColor } from '../../styles/theme';

type Variant = keyof ThemeTypography;
type Color = keyof ThemeTypographyColor;

type TextProps = {
  variant: Variant;
  as?: keyof JSX.IntrinsicElements;
  color?: Color;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
};

export const Text = ({ variant, as = 'span', color, style, className, children }: TextProps) => {
  return (
    <StyledText as={as} $variant={variant} $color={color} className={className} style={style}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.span<{ $variant: Variant; $color?: Color }>`
  font-weight: ${({ theme, $variant }) => theme.typography[$variant].fontWeight};
  font-size: ${({ theme, $variant }) => theme.typography[$variant].fontSize};
  line-height: ${({ theme, $variant }) => theme.typography[$variant].lineHeight};
  letter-spacing: ${({ theme, $variant }) => theme.typography[$variant].letterSpacing};
  color: ${({ theme, $color }) => ($color ? theme.colors.text[$color] : 'inherit')};
`;
