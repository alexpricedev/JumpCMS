/**
 * This file is for defining global CSS
 * variables like colors, breakpoints etc.
 */

// Colors
const white = (a = 1) => `rgba(255, 255, 255, ${a})`;
const black = (a = 1) => `rgba(51, 55, 66, ${a})`;
const grey = (a = 1) => `rgba(242, 243, 245, ${a})`;
const green = (a = 1) => `rgba(95, 202, 198, ${a})`;
const darkgreen = (a = 1) => `rgba(84, 172, 169, ${a})`;
const blue = (a = 1) => `rgba(118, 167, 225, ${a})`;
const red = (a = 1) => `rgba(229, 56, 56, ${a})`;

// Breakpoints
const small = '540px';
const medium = '760px';

// Max width
const maxWidth = '1200px';

export {
  white,
  black,
  grey,
  green,
  darkgreen,
  blue,
  red,

  small,
  medium,

  maxWidth,
};
