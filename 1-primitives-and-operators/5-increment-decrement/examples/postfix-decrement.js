'use strict';

console.log('-- begin --');

console.log('postfix decrement: x--');

/* two things happen when you use x-- (in this order!)
  a. read the value stored by x
  b. assign x to it's current value minus 1
*/

//let x = -2;
// initial: -2
//  1.a read: -2
//  1.b assign: -3
//  2.a read: -3
//  2.b assign: -4
//  3.a read: -4
//  3.b assign: -5
//  4.a read: -5
//  4.b assign: -6

 let x = -1;
// let x = 0;
// let x = 1;
// let x = 2;
console.log('initial:', x); //-1

const _1_read = x--;
console.log('1.a read:', _1_read); // -1
console.log('1.b assign:', x); // -2

const _2_read = x--;
console.log('2.a read:', _2_read); //-2
console.log('2.b assign:', x);// -3

const _3_read = x--;
console.log('3.a read:', _3_read);// -3
console.log('3.b assign:', x);// -4

const _4_read = x--;
console.log('4.a read:', _4_read); //-4
console.log('4.b assign:', x);//-5

console.log('-- end --');
