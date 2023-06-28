/**
 * shift: shift the unicode characters
 *
 * @param {string} {text = ''} - the input text
 * @param {number} {shift = 0} = the number of position of position to shift each position by the unicode  character
 * return {number}
 */

 export const unicodeShuffle = (text = '', shift = 0) => {
  let encodedString = '';
  for (const character of text) {
    const characterCode = character.charCodeAt();
    const newCharCode = characterCode + shift;
    const encodedCharcter = String.fromCharCode(newCharCode);
    encodedString += encodedCharcter;
  }
  return encodedString;
};
 export default unicodeShuffle
