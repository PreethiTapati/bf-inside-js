/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param {string} text - A string to repeat each character.
 * @param {number} count - How many times to repeat each character.
 * @returns {string} The original text with each character repeated.
 */
export const repeatCharacters = (text = '', count = 1) => {
  let repeatedText = '';
  for (let i = 0; i < text.length; i++) {
    const character = text.charAt(i);
    for (let j = 0; j < count; j++) {
      repeatedText += character;
    }
  }
  return repeatedText;
};