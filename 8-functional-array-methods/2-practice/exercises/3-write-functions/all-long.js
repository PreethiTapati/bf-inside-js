/** 
 * Check if all the strings in an array are long.
 *
 *  @param {string[]} strings - The array of strings.
 *  @param {number} long - The minimum length for the strings to be considered "long".
 *  @returns {boolean} - True if all strings are long, false otherwise.
 */
export const allLong = (strings = [], long = 0) => {
   return strings.every((str) => str.length >= long)
};
