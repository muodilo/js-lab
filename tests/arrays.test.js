const { double,filterEven ,sum , deleteNth} = require('../src/arrays');

describe("double", () => {
	test("doubles every number in the array", () => {
		expect(double([1, 2, 3])).toEqual([2, 4, 6]);
	});
});

describe("filterEven", () => {
	test("filters out even numbers", () => {
		expect(filterEven([1, 2, 3, 4])).toEqual([1, 3]);
	});
});

describe("sum", () => {
	test("returns the sum of the array", () => {
		expect(sum([1, 2, 3])).toBe(6);
	});
});

describe("deleteNth", () => {
	test("limits duplicates to n times", () => {
		expect(deleteNth([1, 2, 3, 1, 2, 1], 2)).toEqual([1, 2, 3, 1, 2]);
	});
});