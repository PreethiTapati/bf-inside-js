import { average } from './average-of-numbers.js';

describe('get the average of arrays of numbers', () => {
  it('retun NaN if array is empty', () => {
    const returned = average([]);
    expect(returned).toEqual(NaN);
  });
  it('positve numbers', () => {
    const returned = average([1,2, 3, 4,5]);
    expect(returned).toEqual(3);
  });
  it('negative numbers', () => {
    const returned = average([-1, -2, -20]);
    expect(returned).toEqual(-9.6666666);
  });
  it('mixed numbers ', () => {
    const returned = average([-10, -2, 5, 3]);
    expect(returned).toEqual(-1);
  });
   
  it('single-element array', () => {
    const returned = average [10];
    expect (returned) .toEqual (10);
  });

  it('decimal numbers', () => {
    const returned = average [1.5, 2.25, 3.75, 4.1];
   expect(returned).toEqual (2.65);
    });

 it('returns NaN for an array containing non-numeric values', () => {
    const returned = average[1, 2, 'three', 4, 5];
    expect(returned).toEqual(NaN);
  });
});
