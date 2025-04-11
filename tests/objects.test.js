const { fullName, isAdult, filterByAge } = require('../src/objects');

describe("fullName", () => {
	test("returns full name from first and last name", () => {
		expect(fullName({ firstName: "Jane", lastName: "Doe" })).toBe("Jane Doe");
	});
});

describe("isAdult", () => {
	test("returns true if age >= 18", () => {
		expect(isAdult({ age: 20 })).toBe(true);
		expect(isAdult({ age: 17 })).toBe(false);
	});
});

describe("filterByAge", () => {
	test("filters people older than a given age", () => {
		const people = [
			{ firstName: "A", lastName: "X", age: 15 },
			{ firstName: "B", lastName: "Y", age: 21 },
		];
		expect(filterByAge(people, 18)).toEqual([
			{ firstName: "B", lastName: "Y", age: 21 },
		]);
	});
});