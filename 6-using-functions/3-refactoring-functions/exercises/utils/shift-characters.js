/**
 *
 */
//export const shiftCharacters = (text, shift) => {};



/**

Shifts each character in a string by a given amount based on the character code.
@param {string} str - The string to shift.
@param {number} shift - The amount to shift each character by.
@returns {string} The shifted string.
*/
export const shiftCharacters = (str = '', shift = 0) => {
let shifted = '';
for (let i = 0; i < str.length; i++) {
const charCode = str.charCodeAt(i);
const shiftedCharCode = charCode + shift;
const shiftedChar = String.fromCharCode(shiftedCharCode);
shifted += shiftedChar;
}
return shifted;
};