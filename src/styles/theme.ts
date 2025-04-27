export const theme = {
  colors: {
    palette: {
      primary: '#4880EE',
      red: '#E84118',
      gray: '#DADADA',
      lightGray: '#F2F4F6',
      white: '#FFFFFF',
      black: '#222222',
      border: '#D2D6DA',
    },
    text: {
      primary: '#353C49',
      secondary: '#6D7582',
      title: '#1A1E27',
      subtitle: '#8D94A0',
      emphasis: '#4880EE',
    },
  },
  typography: {
    title1: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '24px',
      letterSpacing: 0,
    },
    title2: {
      fontWeight: 700,
      fontSize: '22px',
      lineHeight: '24px',
      letterSpacing: 0,
    },
    title3: {
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '18px',
      letterSpacing: 0,
    },
    body1: {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '20px',
      letterSpacing: 0,
    },
    body2: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '14px',
      letterSpacing: 0,
    },
    body2Bold: {
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '14px',
      letterSpacing: 0,
    },
    caption: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '16px',
      letterSpacing: 0,
    },
    small: {
      fontWeight: 500,
      fontSize: '10px',
      lineHeight: '10px',
      letterSpacing: 0,
    },
  },
} as const;

export type Theme = typeof theme;
export type ThemeTypography = typeof theme.typography;
export type ThemeTypographyColor = typeof theme.colors.text;
