/**
 * Checks if a string is a palindrome.
 * Palindrome: a string that is the same forwards or backwards.
 *
 * @param {string} [toCheck=''] - The string that might be a palindrome.
 * @returns {boolean} Is the string a palindrome?
 */


export const isPalindrome = (toCheck = '') => {
  // Remove spaces from the string
  const formattedString = removeSpaces(toCheck);

  // Convert the string to lowercase for case-insensitive comparison
  const lowercaseString = formattedString.toLowerCase();

  // Reverse the string
  const reversedString = reverseString(lowercaseString);

  // Compare the original string with the reversed string
  return lowercaseString === reversedString;
};

// function to remove spaces from the string
const removeSpaces = (str) => {
  return str.split(' ').join('');
};