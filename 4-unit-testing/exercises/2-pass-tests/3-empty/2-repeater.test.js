'use strict';

/**
 * Repeats a string a specific number of times.
 * @param {string} [text=''] - The string to repeat.
 * @param {number} [repeats=1] - The number of times to repeat the string.
 * @returns {string} -The repeated string.
 */
const repeat = (text = '', repeats = 1) => {
  let result = '';
  for (let i = 0; i < repeats; i++) {
    result += text;
  }
  return result;
};

describe('repeater: repeats a string a specific number of times', () => {
  it('can repeat a string once', () => {
    const actual = repeat('aaaa', 1);
    expect(actual).toEqual('aaaa');
  });
  it('can repeat a string 4 times', () => {
    const actual = repeat('Pp', 4);
    expect(actual).toEqual('PpPpPpPp');
  });
  it('repeating the empty string is still empty', () => {
    const actual = repeat('', 12);
    expect(actual).toEqual('');
  });
  it('repeating anything 0 times is the empty string', () => {
    const actual = repeat('hoy!', 0);
    expect(actual).toEqual('');
  });
  describe('the function has default parameters', () => {
    it('has 1 as a second default parameter', () => {
      const actual = repeat('-+-');
      expect(actual).toEqual('-+-');
    });
    it('has an empty string for the first', () => {
      const actual = repeat();
      expect(actual).toEqual('');
    });
  });
});
