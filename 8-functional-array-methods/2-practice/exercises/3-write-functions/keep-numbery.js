/**
 * casts all array items to Number and removes NaN
 * @param {Array} arr - the array of items to coerce
 * @returns {Array} - a new array of number values
 */
export const keepNumbery = (arr = []) => {
  
return arr.map((item) => Number(item)).filter((item) => !Number.isNaN(item))

};
