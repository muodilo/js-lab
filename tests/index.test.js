const {
	reverseCapitalize,
	doubleEvens,
	uniqueElements,
	sqlJoin,
	processPeople,
} = require("../src/index");

describe("Function Composition", () => {
	test("reverse and capitalize a string", () => {
		expect(reverseCapitalize("hello")).toBe("Olleh");
	});

	test("double even numbers", () => {
		expect(doubleEvens([1, 2, 3, 4])).toEqual([4, 8]);
	});
});

describe("uniqueElements", () => {
	test("returns unique elements from both arrays", () => {
		expect(uniqueElements([1, 2, 3, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
	});
});

describe("sqlJoin", () => {
	const employees = [
		{ id: 1, name: "John", department: "IT" },
		{ id: 2, name: "Jane", department: "HR" },
		{ id: 3, name: "Doe", department: "IT" },
	];
	const salaries = [
		{ id: 1, salary: 50000 },
		{ id: 2, salary: 60000 },
		{ id: 4, salary: 55000 },
	];
	test("merges based on id", () => {
		expect(sqlJoin(employees, salaries)).toEqual([
			{ id: 1, name: "John", department: "IT", salary: 50000 },
			{ id: 2, name: "Jane", department: "HR", salary: 60000 },
		]);
	});
});

describe("processPeople pipeline", () => {
	const data = [
		{ id: 1, name: "Alice", age: 22, score: [75, 80, 70] },
		{ id: 2, name: "Bob", age: 17, score: [60, 65, 70] },
		{ id: 3, name: "Charlie", age: 28, score: [85, 90, 95] },
	];
	test("filters, maps, and sorts correctly", () => {
		const result = processPeople(data);
		expect(result).toEqual([
			{ name: "Charlie", avgScore: 90 },
			{ name: "Alice", avgScore: 75 },
		]);
	});
});
