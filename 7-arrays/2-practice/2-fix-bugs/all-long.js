/**
 * Checks if all strings in an array have a length greater than or equal to a specified threshold.
 *
 * @param {string[]} [strings=[]] - The array of strings to check.
 * @param {number} [long=0] - The length of the value to compare long enough
 * @returns {boolean} -The length an array of strings is longer than enough. 
 */
export const allLong = (strings = [], long = 0) => {
  let allAre = true;

  for (let i = 0; i < strings.length; i++) {
    const next = strings[i];
    if (next.length < long) {
      allAre = false;
      break;
    }
  }

  return allAre;
};
