'use strict';

let validInput = '';

let index = 1;
while (true) {
  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index}th letter`,
  );

  // make sure the user entered something
  if (userInput === null || userInput === '') {
    alert('that is nothing');
    break;
  }

  // make sure it is long enough to have an "e" in the desired position
  if (userInput.length < index) {
    alert('too short');
    break;
  }

  if (
    userInput.charAt(index - 1) === 'e' ||
    userInput.charAt(index - 1) === 'E'
  ) {
    validInput = userInput;
    break;
  }

  alert(`Input does not have "e" or "E" as the ${index}th character`);
  index++; // increment index for the next iteration
}

alert('done: "' + validInput + '"');
