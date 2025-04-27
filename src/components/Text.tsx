import { CSSProperties, JSX, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { ThemeTypography, ThemeTypographyColor } from '../styles/theme';

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
    <StyledText as={as} variant={variant} color={color} className={className} style={style}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.span<{ variant: Variant; color?: Color }>`
  ${({ theme, variant, color }) => css`
    font-weight: ${theme.typography[variant].fontWeight};
    font-size: ${theme.typography[variant].fontSize};
    line-height: ${theme.typography[variant].lineHeight};
    letter-spacing: ${theme.typography[variant].letterSpacing};
    color: ${color ? theme.colors.text[color] : 'inherit'};
  `}
`;
