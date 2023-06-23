/**
 * returns true if a number is even
 * otherwise returns false
 * @param {number} num - the number
 * @returns {boolean} is the number even?
 */
export const isEven = (num) => {
  return num % 2 === 0;
};

// isEven function takes a num parameter representing the number to check. It uses the modulo operator (%) to determine if the number is even by checking if the remainder of num divided by 2 is equal to 0. If it is, the function returns true; otherwise, it returns false.With this implementation, the isEven function can be imported and used in other parts of your code.