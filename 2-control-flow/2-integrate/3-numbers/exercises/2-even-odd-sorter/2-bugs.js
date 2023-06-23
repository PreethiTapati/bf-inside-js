'use strict';

/* look out for:

  - variable declarations
  - conditional checks
  - break vs. continue
  - incorrect casting to Number

*/

let userNumber = NaN;
let userNumberIsNaN = true;
while (Number.isNaN(userNumber)) {
  const userInput = prompt('enter a number');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === '') {
    alert('enter something!');
    continue;
  }

  userNumber = Number(userInput);
   console.log('userNumber:', typeof userNumber, userNumber);

  if (Number.isNaN(userNumber)) {
    alert('"', userInput, '" is not a number');
  }
  else {
 userNumberIsNaN = false;
}
}
if (userNumber % 2 === 0) {
  alert(userNumber + ' is even');
} else {
  alert(userNumber + ' is odd');
}
