const { capitalize, reverse , isPalindrome} = require('../src/strings');

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