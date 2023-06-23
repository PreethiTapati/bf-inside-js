import { fileToVariable } from './file-to-variable.js';

describe('fileToVariable', () => {
  describe('when no argument is passed', () => {
    it('should return an empty string', () => {
      const result = fileToVariable();
      expect(result).toEqual('');
    });
  });

  describe('when argument is a file name', () => {
    it('should convert "test-one.js" to "testOne"', () => {
      const fileName = 'test-one.js';
      const expected = 'testOne';

      const result = fileToVariable(fileName);

      expect(result).toEqual(expected);
    });

    it('should convert "util-functions.js" to "utilFunctions"', () => {
      const fileName = 'util-functions.js';
      const expected = 'utilFunctions';

      const result = fileToVariable(fileName);

      expect(result).toEqual(expected);
    });
  });
});


