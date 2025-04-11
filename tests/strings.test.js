const { capitalize, reverse } = require('../src/strings');

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