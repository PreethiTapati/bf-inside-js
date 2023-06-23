'use strict';

/* look out for:

  - unnecessary variable declarations

*/

let userInput = '';
let unicodeShift = NaN;

let userConfirmed = false;
while (true) {
  userInput = prompt(
    'enter a phrase, each character will be shifted by character code:',
  );

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  } 
    while (true) {
      const unicodeShiftInput = prompt(
        'how many unicode numbers do you want the characters to shift?',
      );

      if (unicodeShiftInput === null || unicodeShiftInput === '') {
        alert('enter something');
        continue;
      }
        unicodeShift = Number(unicodeShiftInput);

        if (Number.isNaN(unicodeShift)) {
          alert('"' + unicodeShiftInput + '" is not a number');
        } else {
          break;
        }
      }
    
    const confirmMessage =
      'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + unicodeShift;
 
 userConfirmed = confirm(confirmMessage);

    if (userConfirmed) {
      break;
    }
  
}

let encodedString = '';

for (const character of userInput) {
  const characterCode = character.charCodeAt(0);
  const newCharCode = characterCode + unicodeShift;
  const encodedCharacter = String.fromCharCode(newCharCode);
  encodedString += encodedCharacter;
}

const finalMessage = `"${userInput}" -> "${encodedString}"`;
alert(finalMessage);
console.log('Encoded String:', encodedString);
