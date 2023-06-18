'use strict';

/* look out for:

  - loop check logic
  - variable declarations
  - assignment vs. comparison
  - wrong interaction functions
  - off-by-one in for loop

*/

let userInput = '';
let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt('Enter a word to filter:');

  if (userInput === '' || userInput === null) {
    alert('Nope, enter something');
    continue;
  }

  // Regular expression, this works!
  const whiteSpaceRegex = new RegExp('\\s', 'g');
  if (whiteSpaceRegex.test(userInput)) {
    alert("Words can't have whitespace");
  } else {
    const confirmMessage =
      'Do you want to filter this word?\n\n' + '- "' + userInput + '"';
    userConfirmed = confirm(confirmMessage);
  }
}

const removeVowels = confirm(`What would you like to remove from "${userInput}"?
- OK: Vowels
- Cancel: Consonants
`);

const toRemove = removeVowels ? 'aeiou' : 'bcdfghjklmnpqrstvwxyz';

let filteredInput = '';
for (let i = 0; i < userInput.length; i++) {
  const lowerCaseCharacter = userInput[i].toLowerCase();
  if (!toRemove.includes(lowerCaseCharacter)) {
    filteredInput += userInput[i];
  }
}

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
