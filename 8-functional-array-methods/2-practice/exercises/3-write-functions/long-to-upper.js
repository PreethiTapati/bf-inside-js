/**
 * Converts long strings in an array to uppercase.
 *
 * @param {string[]} arr - The array of strings to process.
 * @param {number} [length=0] - The minimum length threshold for strings to be converted to uppercase.
 * @returns {string[]} - The new array with converted or unchanged strings.
 */

export function longToUpper(arr, length = 0) {
  return arr.map((str) => {
    if (str.length >= length) {
      return str.toUpperCase();
    }
    return str;
  });
}