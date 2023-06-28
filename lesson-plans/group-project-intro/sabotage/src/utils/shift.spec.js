import {unicodeShuffle } from './shift.js';

describe('unicodeShuffle: changes each character in a string by shifting the character code', () => {
  describe('the function behavior', () => {
    it('returns the same string if the shift is 0', () => {
      const actual = unicodeShuffle('abcde', 0);
      expect(actual).toEqual('abcde');
    });
    it('shifts characters by 1', () => {
      const actual = unicodeShuffle('abcde', 1);
      expect(actual).toEqual('bcdef');
    });
    it('shifts characters by 101', () => {
      const actual = unicodeShuffle('abcde', 101);
      expect(actual).toEqual('ÆÇÈÉÊ');
    });
    it('shifts characters by 10001', () => {
      const actual = unicodeShuffle('abcde', 10001);
      expect(actual).toEqual('❲❳❴❵❶');
    });
    it('negative shifts work as well', () => {
      const actual = unicodeShuffle('abcde', -1);
      expect(actual).toEqual(`\`abcd`);
    });
  });
  describe('default parameters', () => {
    it('has 0 as a second default', () => {
      const actual = unicodeShuffle('abcde');
      expect(actual).toEqual('abcde');
    });
    it('has an empty string as a first default', () => {
      const actual = unicodeShuffle();
      expect(actual).toEqual('');
    });
  });
});
