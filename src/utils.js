export const fill = (array, length, filler) =>
  array.concat(Array(length - array.length).fill(filler));
