'use strict';

let stringToRepeat = '';
let repetitions = NaN;

while (true) {
  stringToRepeat = prompt('enter a phrase, each character will be repeated:');

  if (stringToRepeat === '' || stringToRepeat === null) {
    alert('nope, enter something');
  } else {
    /* -- BEGIN: get a number from the user -- */

    let inputIsNumber = false;
    while (!inputIsNumber) {
      const repetitionsInput = prompt(
        'how many times do you want to repeat each character?',
      );

      /* make sure the user input something */
      if (repetitionsInput === null || repetitionsInput === '') {
        alert('enter something');
      } else {
        /* convert their string to a number */
        repetitions = Number(repetitionsInput);

        /* make sure the user input a valid number */
        if (isNaN(repetitions)) {
          alert('"' + repetitionsInput + '" is not a number');
        } else {
          inputIsNumber = true;
        }
      }
    }

    /* -- END -- */

    const confirmMessage =
      'is this correct?\n\n' +
      '- "' +
      stringToRepeat +
      '"\n' +
      '- ' +
      repetitions;
    const confirmation = confirm(confirmMessage);
    if (confirmation) {
      break;
    }
  }
}

let withRepeatedCharacters = '';

/* -- BEGIN: repeat each character in the string -- */
for (let i = 0; i < stringToRepeat.length; i++) {
  const character = stringToRepeat[i];

  /* append each character multiple times to the new string */
  for (let j = 0; j < repetitions; j++) {
    withRepeatedCharacters += character;
  }
}
/* -- END -- */

const finalMessage = `"${stringToRepeat}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);
console.log(finalMessage);
