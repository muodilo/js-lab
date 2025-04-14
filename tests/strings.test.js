const { capitalize, reverse , isPalindrome, wordFrequency,pascalToSnake} = require('../src/strings');

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
describe("pascalToSnake", () => {
test("pascalToSnake() converts PascalCase to snake_case", () => {
	expect(pascalToSnake("TestController")).toBe("test_controller");
	expect(pascalToSnake("MoviesAndBooks")).toBe("movies_and_books");
	expect(pascalToSnake("App7Test")).toBe("app7_test");
	expect(pascalToSnake(1)).toBe("1");
	expect(pascalToSnake("")).toBe("");
});
});


