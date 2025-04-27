import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Variant = 'primary' | 'secondary' | 'tertiary';
type Size = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children?: ReactNode;
}

export const Button = ({ variant = 'primary', size = 'medium', children, ...props }: ButtonProps) => {
  return (
    <StyledButton $variant={variant} $size={size} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $variant: Variant; $size?: Size }>`
  ${({ theme, $variant, $size }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
    white-space: nowrap;
    ${$variant === 'primary' &&
    css`
      background-color: ${theme.colors.palette.primary};
      color: ${theme.colors.palette.white};
    `}

    ${$variant === 'secondary' &&
    css`
      background-color: ${theme.colors.palette.lightGray};
      color: ${theme.colors.text.secondary};
    `}

    ${$variant === 'tertiary' &&
    css`
      background-color: ${theme.colors.palette.white};
      color: ${theme.colors.text.subtitle};
      border: 1px solid ${theme.colors.text.subtitle};
    `}

    ${$size === 'small' &&
    css`
      width: 72px;
      height: 35.27px;
      /* padding: 0px 10px; */
    `}

    ${$size === 'medium' &&
    css`
      width: 115px;
      height: 48px;
      /* padding: 0px 20px; */
    `}

    ${$size === 'large' &&
    css`
      width: 240px;
      height: 48px;
      /* padding: 0px 20px; */
    `}
  `}
`;
