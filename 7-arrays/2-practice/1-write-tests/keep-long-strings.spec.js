import { keepLongStrings } from './keep-long-strings.js';

describe('keepLongStrings', () => {
  it('should return an empty array if no strings are provided', () => {
    expect(keepLongStrings()).toEqual([]);
  });

  it('should return an empty array if no strings meet the length specified (5)', () => {
    const strings = ['cat', 'dog', 'bat'];
    expect(keepLongStrings(strings, 5)).toEqual([]);
  });

  it('should return an array with strings that meet the length specified (4)', () => {
    const strings = ['apple', 'banana', 'carrot', 'date', 'elephant'];
    expect(keepLongStrings(strings, 4)).toEqual(['apple', 'banana', 'carrot', 'elephant']);
  });

  it('should return the same array if all strings meet the length specified (3)', () => {
    const strings = ['apple', 'banana', 'carrot', 'date'];
    expect(keepLongStrings(strings, 3)).toEqual(strings);
  });

  it('returns an empty array when the input array is empty', () => {
    expect(keepLongStrings([])).toEqual([]);
  });

  it('returns an empty array when no strings are longer than the specified length (7)', () => {
    const strings = ['apple', 'banana', 'carrot', 'date', 'elephant'];
    expect(keepLongStrings(strings, 7)).toEqual(['elephant']);
  });
});
