'use strict';

let userInput = '';
while (true) {
  userInput = prompt('Enter anything:');

  if (userInput === null || userInput.trim() === '') {
    continue;
  }

  break;
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
