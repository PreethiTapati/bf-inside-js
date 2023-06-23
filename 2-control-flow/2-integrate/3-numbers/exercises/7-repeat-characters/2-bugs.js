'use strict';

/* look out for:

  - you're on your own!

*/

let stringToReapitify = '';
let repetitions = NaN;


while (true) {
  /* gather a string from the user */
  stringToReapitify = prompt('enter a phrase, each character will be repeated:');
  console.log('stringToReapitify:', typeof stringToReapitify, stringToReapitify);

  /* make sure the user input something */
  if (stringToReapitify === '' || stringToReapitify === null) {
    alert('nope, enter something');
  } else {
    /* ask the user for a number */
     let inputIsNumber = false;
    while (!inputIsNumber) {
      const repetitionsInput = prompt(
        'how many times do you want to repeat each character?',
      );
      console.log(
        'repetitionsInput:',
        typeof repetitionsInput,
        repetitionsInput,
      );

      /* make sure the user input something */
      if (repetitionsInput === null || repetitionsInput === '') {
        alert('enter something');
        continue;
      }

      /* convert their string to a number */
      repetitions = Number(repetitionsInput);
      console.log('repetitions:', typeof repetitions, repetitions);

      /* make sure the user input a valid number */
      if (Number.isNaN(repetitions)) {
        alert('"' + repetitionsInput + '" is not a number');
      } else {
        inputIsNumber = true;
      }
    }
  }
    /* ask the user to confirm their input */
    const confirmMessage =
      'is this correct?\n\n' + '- "' + stringToReapitify + '"\n' + '- ' + repetitions;
    const confirmation = confirm(confirmMessage);
    if (confirmation) {
      break;
    }
  }


let withRepeatedCharacters = '';

/* iterate through each character in the user input */
for (let i = 0; i < stringToReapitify.length; i++) {
  const character = stringToReapitify[i]
  /* append each character multiple times to the new string */
  for (let i = 0; i < repetitions; i++) {
    withRepeatedCharacters += character;
  }
}

console.log(
  'withRepeatedCharacters:',
  typeof withRepeatedCharacters,
  withRepeatedCharacters,
);

const finalMessage = `"${stringToReapitify}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);
console.log(finalMessage)
