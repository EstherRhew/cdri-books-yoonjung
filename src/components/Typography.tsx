import { JSX, ReactNode } from 'react';
import styled from 'styled-components';
import { ThemeTypography, ThemeTypographyColor } from '../styles/theme';

type Variant = keyof ThemeTypography;
type Color = keyof ThemeTypographyColor;

type TypographyProps = {
  variant: Variant;
  as?: keyof JSX.IntrinsicElements;
  color?: Color;
  children: ReactNode;
  className?: string;
};

export const Typography = ({ variant, as = 'span', color, className, children }: TypographyProps) => {
  return (
    <StyledTypography as={as} variant={variant} color={color} className={className}>
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled.span<{ variant: Variant; color?: Color }>`
  ${({ theme, variant, color }) => `
    font-weight: ${theme.typography[variant].fontWeight};
    font-size: ${theme.typography[variant].fontSize};
    line-height: ${theme.typography[variant].lineHeight};
    letter-spacing: ${theme.typography[variant].letterSpacing};
    color: ${color ? theme.colors.text[color] : theme.colors.text.primary};`}
`;
