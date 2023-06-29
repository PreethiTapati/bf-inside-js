/**
 * Removes specific characters from a string.
 *
 * @param {string} toFilter - The string to filter.
 * @param {string} removeThese - The characters to remove.
 * @returns {string} The filtered string.
 */

export const filter = (toFilter, removeThese) => {
  if (!toFilter || !removeThese) {
    return toFilter;
  }
  
  let filtered = '';
  for (let i = 0; i < toFilter.length; i++) {
    const currentChar = toFilter[i];
    if (removeThese.indexOf(currentChar.toLowerCase()) === -1) {
      filtered += currentChar;
    }
  }
  
  return filtered;
};
