/**

Reverses a string.
@param {string} text - The string to reverse.
@returns {string} The reversed string.
*/
// export const reverse = (text = '') => {
//   let reversed = '';
//   for (let i = text.length - 1; i >= 0; i--) {
//     reversed += text[i];
//   }
//   return reversed;
// };


/**
 *  reverse a string
 * @param {string} text- the text to reverse
 * @returns {string} the reversed string
 */

export const reverse = (text = '') => {
  return text.split('').reverse().join('');
};