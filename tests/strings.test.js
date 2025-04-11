const { capitalize, reverse , isPalindrome, wordFrequency} = require('../src/strings');

describe('capitalize', () => {
  test('capitalizes the first letter of the string', () => {
    expect(capitalize('hello')).toBe('Hello');
  })
})

describe("reverse", () => {
	test("reverses a string", () => {
		expect(reverse("hello")).toBe("olleh");
	});
});

describe('isPalindrome', () => {
  test('detect palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('amali')).toBe(false);
  })
})

describe("wordFrequency", () => {
	test("returns a word frequency map", () => {
		expect(wordFrequency("hello world hello")).toEqual({ hello: 2, world: 1 });
	});
});


