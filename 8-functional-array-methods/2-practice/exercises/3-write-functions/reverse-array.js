/**
 * Reverses an array without modifying the original array.
 *
 * @param {any[]} [arr=[]] - The array to reverse.
 * @returns {any[]} A new array with the elements in reverse order.
 */
export const reverseArray = (arr = []) => {
  const reversed = [...arr].reverse();
  return reversed;
};
