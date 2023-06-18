'use strict';

let validInput = '';

let index = 0;
let isValid = false;
while (!isValid) {
  index = index + 1;

  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index}th letter`,
  );

  /* -- BEGIN: validate input -- */

  if (userInput === null || userInput === '') {
    alert('That is nothing. Please enter something.');
  } else if (userInput.length < index) {
    alert('Input is too short. Please enter something longer.');
  } else if (
    userInput.charAt(index - 1) === 'e' ||
    userInput.charAt(index - 1) === 'E'
  ) {
    validInput = userInput;
    isValid = true;
  } else {
    alert(
      `Input does not have "e" or "E" as the ${index}th character. Please try again.`,
    );
  }
  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
