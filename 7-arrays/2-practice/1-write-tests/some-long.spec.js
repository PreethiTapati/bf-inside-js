import { someLong } from './some-long.js';

describe('someLong: checks if there are strings in an array with a length greater than or equal to specified length', () => {
  describe('strings with length greater than or equal to the default value length (5)', () => {
    it('returns true when at least one string meets the length specified', () => {
      const strings = ['apple', 'banana', 'carrot', 'date'];
      const result = someLong(strings);
      expect(result).toBe(true);
    });

    it('returns false when no strings meet the length requirement', () => {
      const strings = ['a', 'b', 'c', 'd'];
      const result = someLong(strings);
      expect(result).toBe(false);
    });
  });

  describe('strings with length greater than or equal to a specified ', () => {
    it('returns true when at least one string meets the length requirement (3)', () => {
      const strings = ['apple', 'banana', 'carrot', 'date'];
      const result = someLong(strings, 3);
      expect(result).toBe(true);
    });

    it('returns false when no strings meet the length requirement (7)', () => {
      const strings = ['apple', 'banana', 'carrot', 'date'];
      const result = someLong(strings, 7);
      expect(result).toBe(false);
    });
  });

  describe('empty array of strings', () => {
    it('returns false when the array is empty (5)', () => {
      const strings = [];
      const result = someLong(strings);
      expect(result).toBe(false);
    });

    it('returns false when the array is empty (10)', () => {
      const strings = [];
      const result = someLong(strings, 10);
      expect(result).toBe(false);
    });
  });
});
