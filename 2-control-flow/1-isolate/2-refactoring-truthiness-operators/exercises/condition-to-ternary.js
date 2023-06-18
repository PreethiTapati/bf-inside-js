'use strict';

console.log('-- begin --');

// refactor this code to use a _?_:_ instead of a conditional

// try different values and different types
// const isLoggedIn = _;
// const secretInformation = _;
// const warningMessage = _;
// console.log(isLoggedIn, secretInformation, warningMessage);

// let toDisplay;
// if (isLoggedIn) {
//   toDisplay = secretInformation;
// } else {
//   toDisplay = warningMessage;
// }
// console.log(toDisplay);

// console.log('-- end --');


'use strict';

console.log('-- begin --');

// try different values and different types
const isLoggedIn = true;
const secretInformation = 'you are practicing coding';
const warningMessage = ' you are not practicing coding';
console.log(isLoggedIn, secretInformation, warningMessage);

const toDisplay = isLoggedIn ? secretInformation : warningMessage;
console.log(toDisplay);

console.log('-- end --');
