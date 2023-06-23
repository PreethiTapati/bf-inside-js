'use strict';

let userInput = '';
let repetitions = NaN;
while (true) {
  /* -- BEGIN: gather input and cast it to a number -- */
   userInput = prompt('Enter a pharse to repeat:');

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }


  const repetitionsInput = Number(prompt('Enter the number of repetitions:'));
    repetitions = Number(repetitionsInput);

  if (Number.isNaN(repetitions)) {
    alert('"' + repetitionsInput + '" is not a number');
    continue;
  }
  /* -- END -- */

  

  /* -- BEGIN: ask the user to confirm their input -- */
   const confirmMessage = 'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + repetitions;
  const confirmation = confirm(confirmMessage);

  if (confirmation) {
    break;
  }
  /* -- END -- */
}

/* -- BEGIN: repeat the input -- */

  let repeatedInput = '';

  for (let i = 0; i < repetitions; i++) {
    repeatedInput = userInput+repeatedInput;

    }
/* -- END -- */

const finalMessage = `"${userInput}" -> "${repeatedInput}"`;
alert(finalMessage);
