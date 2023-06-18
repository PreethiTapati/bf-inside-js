'use strict';

/* look out for:

  - math operators
  - break vs. continue
  - off-by-one string index

*/

let validInput = '';

let index = 1;
while (true) {
  //index = index + 1;

  const userInput = prompt(
    `Enter anything with "e" or "E" as the ${index}th letter:`,
  );

  // Make sure the user entered something
  if (userInput === null || userInput === '') {
    alert('That is nothing');
  continue;
  }

  // Make sure it is long enough to have an "e" in the specified letter
  if (userInput.length < index) {
    alert('Too short');
    continue;
  }

  if (userInput[index - 1] === 'e' || userInput[index - 1] === 'E') {
    validInput = userInput;
    break;
  }

  //alert(`Input has no "e" or "E" as the ${index}th letter`);
  alert('input has no "e" or "E" as the desired character');
  index++; // increment index for the next iteration
}


alert('done: "' + validInput + '"');





  


