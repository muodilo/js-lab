const { double } = require('../src/arrays');

describe("double", () => {
	test("doubles every number in the array", () => {
		expect(double([1, 2, 3])).toEqual([2, 4, 6]);
	});
});