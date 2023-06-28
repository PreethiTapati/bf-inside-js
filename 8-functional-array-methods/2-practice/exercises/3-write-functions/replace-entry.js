/**
 * replaces a specific entry in an array
 * this function does not modify the original array
 *
 * @param {Array} [arr=[]] - an array of items, one will be changed
 * @param {number} [index=0] - the index to replace
 * @param {any} newEntry - the value to put at that index
 *
 * @returns {Array} a copy of the array with one entry modified
 */
//export const replaceEntry = () => {

//};
export const replaceEntry = (arr = [], index = 0, newEntry) => {
   const copiedArray = [...arr];
  if (index >=0 && index < arr.length) 
  copiedArray[index] = newEntry;{
  }
    return copiedArray;
  }

