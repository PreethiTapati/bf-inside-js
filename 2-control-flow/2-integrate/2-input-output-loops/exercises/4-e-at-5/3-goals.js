'use strict';

let validInput = '';
let isNotValid = true;
while (isNotValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  /* -- BEGIN: validate input -- */
    if (userInput === null || userInput.length < 5) {
    alert('Input is invalid');
    continue;
  }

  if (userInput.charAt(4).toLowerCase() !== 'e') {
    alert('Input does not have "e" or "E" as the 5th character');
    continue;
  }

  validInput = userInput;
  isNotValid = false;
  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
