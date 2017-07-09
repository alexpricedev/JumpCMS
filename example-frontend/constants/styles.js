/**
 * This file is for defining global CSS
 * variables like colors, breakpoints etc.
 */

// Colors
const white = (a = 1) => `rgba(255, 255, 255, ${a})`;
const black = (a = 1) => `rgba(25, 25, 25, ${a})`;
const grey = (a = 1) => `rgba(242, 242, 242, ${a})`;
const red = (a = 1) => `rgba(255, 78, 80, ${a})`;
const yellow = (a = 1) => `rgba(249, 212, 35, ${a})`;
const orange = (a = 1) => `rgba(253, 144, 43, ${a})`;
const purple = (a = 1) => `rgba(92, 37, 141, ${a})`;
const blue = (a = 1) => `rgba(67, 137, 162, ${a})`;

// Breakpoints
const small = '540px';
const medium = '760px';

// Max width
const maxWidth = '1000px';

export {
  white,
  black,
  grey,
  red,
  yellow,
  orange,
  purple,
  blue,

  small,
  medium,

  maxWidth,
};
