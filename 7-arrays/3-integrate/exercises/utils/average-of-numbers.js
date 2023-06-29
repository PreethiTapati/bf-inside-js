/**
 * Get the average of array of numbers
 * @param {number[]} [arr=[]] - An array of number specified 
 * @returns {number} The average of all number of items in the arr
 */

export const average = (arr) => {
  let sum = 0;
  const length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / length;
};
