const { fullName } = require('../src/objects');

describe("fullName", () => {
	test("returns full name from first and last name", () => {
		expect(fullName({ firstName: "Jane", lastName: "Doe" })).toBe("Jane Doe");
	});
});