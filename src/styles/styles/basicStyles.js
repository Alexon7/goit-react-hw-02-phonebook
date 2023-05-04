export const basicStyles = Object.freeze({
  colors: {
    white: '#ffffff',
    grey: '#grey',
    light: '#f2f2f2',
    dark: '#212121',
  },
  fontSizes: {
    small: '16px',
    medium: '20px',
    large: '32px',
  },
  spacing: value => `${4 * value}px`,
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.25, 0.1, 0.25, 1)',
  },
});
