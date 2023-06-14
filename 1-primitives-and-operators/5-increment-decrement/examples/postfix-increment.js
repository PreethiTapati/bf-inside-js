'use strict';

console.log('-- begin --');

console.log('postfix increment: x++');

/* two things happen when you use x++ (in this order!)
  a. read the value stored by x
  b. assign x to it's current value plus 1
*/

let x = -2;
// let x = -1;
// let x = 0;
// let x = 1;
// let x = 2;

// let x=-2 x=1
console.log('initial x:', x); // -2. // 1

const _1_read = x++;
console.log('1.a read:', _1_read);// -2 // 1
console.log('1.b assign:', x); // -1 // 2

const _2_read = x++;
console.log('2.a read:', _2_read); // -1 // 2
console.log('2.b assign:', x); // 0 // 3

const _3_read = x++;
console.log('3.a read:', _3_read); // 0 // 3
console.log('3.b assign:', x);// 1 // 4

const _4_read = x++;
console.log('4.a read:', _4_read);// 1 // 4
console.log('4.b assign:', x);// 2 // 5

console.log('-- end --');
