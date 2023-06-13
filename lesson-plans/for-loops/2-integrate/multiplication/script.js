
import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  // read user values
  const num1 = readNumber('left');
  const num2 = readNumber('right');

  // use a for loop to multiply the two numbers
  const multiply = num1 * num2
  

  // display the product
  display('product', multiply);
  
});



  

