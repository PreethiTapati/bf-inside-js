import { colorify } from './colorify.js';

describe('colorify: checks if a string is the odd or even ', () => {
  describe('what is colorify', () => {
    it('it case even', () => {
      const actual = colorify('hi');
      expect(actual).toEqual(true);
    });
    it('it case odd', () => {
      const actual = colorify('apple');
      expect(actual).toEqual(false);
    });
   
    it('can have more than just letters', () => {
      const actual = colorify(1, 2, 6);
      expect(actual).toEqual(false);
    });
  });
  describe("the function's default parameters", () => {
    it('should be a colotify ', () => {
      const actual = colorify();
      expect(actual).toEqual(true);
    });
  });
});
