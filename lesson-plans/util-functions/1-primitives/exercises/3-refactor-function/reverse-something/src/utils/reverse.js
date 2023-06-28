/**
 * Reverses a given string.
 * @param {string} text - The input string to be reversed.
 * @returns {string} - The reversed string.
 */
export const reverse = (text) => {
  if (typeof text !== 'string') {
    throw new Error('Input must be a string');
  }

  return text.split('').reverse().join('');
};
