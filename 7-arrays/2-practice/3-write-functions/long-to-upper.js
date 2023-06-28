/**
 * Converts long strings in an array to uppercase.
 *
 * @param {string[]} [strings=[]] - The array of strings to process.
 * @param {number} [long=0] - The length of the value for considering a string as long.
 * @returns {string[]} A new array with long strings converted to uppercase.
 */
export const longToUpper = (strings = [], long = 0) => {
  const longStrings = [];

  for (const string of strings) {
    if (string.length >= long) {
      longStrings.push(string.toUpperCase());
    } else {
      longStrings.push(string);
    }
  }
   return longStrings;
};
