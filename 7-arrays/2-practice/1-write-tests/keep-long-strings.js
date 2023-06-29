/*** Filters an array of strings and keeps only the strings with a length greater than the specified threshold.
 *
 * @param {string[]} [strings=[]] - The array of strings to filter. 
 * @param {number} [long=5] - The value to decide if a string is long or not
 * @returns {string[]} An array of strings that have a length greater than the specified.
 */
 
export const keepLongStrings = (strings = [], long = 5) => {
  const longStrings = [];
  for (const string of strings) {
    if (string.length > long) {
      longStrings.push(string);
    }
  }
  return longStrings;
};
