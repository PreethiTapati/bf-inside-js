/**
 * Checks if there are strings in an array that have a length greater than or equal to a specified threshold.
 *
 * @param {string[]} [strings=[]] - The array of strings to check.
 * @param {number} [long=5] - The value of the length to compare long enough than specified.
 * @returns {boolean} `true` if there are strings with a length greater than or equal to the specified length, `false` otherwise.
 */
export const someLong = (strings = [], long = 5) => {
  let someAreLong = false;
  for (const string of strings) {
    if (string.length >= long) {
      someAreLong = true;
      break;
    }
  }
  return someAreLong;
};
