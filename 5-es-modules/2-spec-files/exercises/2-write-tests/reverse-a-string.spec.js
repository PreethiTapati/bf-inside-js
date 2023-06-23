import { reverseAString } from './reverse-a-string.js';

describe('reverseAString', () => {
  describe('when no argument is passed', () => {
    it('should return an empty string', () => {
      const result = reverseAString();
      expect(result).toEqual('');
    });
  });

  describe('when argument is a string', () => {
    it('should return an empty string when input is an empty string', () => {
      const input = '';
      const expected = '';

      const result = reverseAString(input);

      expect(result).toEqual(expected);
    });

    it('should reverse "toads" to "sdaot"', () => {
      const input = 'toads';
      const expected = 'sdaot';

      const result = reverseAString(input);

      expect(result).toEqual(expected);
    });

    it('should reverse "hello" to "olleh"', () => {
      const input = 'hello';
      const expected = 'olleh';

      const result = reverseAString(input);

      expect(result).toEqual(expected);
    });

    it('should reverse "12345" to "54321"', () => {
      const input = '12345';
      const expected = '54321';

      const result = reverseAString(input);

      expect(result).toEqual(expected);
    });

    it('should reverse "racecar" to "racecar"', () => {
      const input = 'racecar';
      const expected = 'racecar';

      const result = reverseAString(input);

      expect(result).toEqual(expected);
    });

    it('should reverse "howdy" to "ydwoh"', () => {
      const input = 'howdy';
      const expected = 'ydwoh';

      const result = reverseAString(input);

      expect(result).toEqual(expected);
    });
  });

  describe('when argument is not a string', () => {
    it('should return "text is not a string" when input is true', () => {
      const input = true;
      const expected = 'text is not a string';

      const result = reverseAString(input);

      expect(result).toEqual(expected);
    });

    it('should return "text is not a string" when input is null', () => {
      const input = null;
      const expected = 'text is not a string';

      const result = reverseAString(input);

      expect(result).toEqual(expected);
    });

    it('should return "text is not a string" when input is 123', () => {
      const input = 123;
      const expected = 'text is not a string';

      const result = reverseAString(input);

      expect(result).toEqual(expected);
    });
  });
});
