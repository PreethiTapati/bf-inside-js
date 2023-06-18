'use strict';

console.log('-- begin --');

const school = 'HackYourFuture';

for (const letter of school) {
  console.log(letter);
}

// write this for...of loop as a for loop:

for (let i = 0; i < school.length; i++) {
  const letter = school[i];
  console.log(letter);
}

// write this for loop as a while loop:

let j = 0;
while (j < school.length) {
  const letter = school[j];
  console.log(letter);
  j++;
}

console.log('-- end --');
