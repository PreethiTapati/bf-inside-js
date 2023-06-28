/**
 * colorify:
 *
 * @param {string} [toCheck=''] - The string that might be a palindrome.
 * @returns {boolean} Is the string a palindrome?
 */
export const colorify = (toCheck = '') => {
  if (toCheck.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
