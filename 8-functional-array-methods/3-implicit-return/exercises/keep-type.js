/**
 * Filters an array to keep only values of a specific type.
 *
 * @param {Array} [things=[]] - The array of values to filter.
 * @param {string} [type=''] - The type of values to keep.
 * @returns {Array} A new array with values of the specified type.
 */

export const keepType = (things = [], type = '') => {
  return things.filter((thing) => {
    return typeof thing === type;
  });
};
