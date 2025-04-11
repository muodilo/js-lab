function double(arr) {
	return arr.map((num) => num * 2);
}

function filterEven(arr) {
	return arr.filter((num) => num % 2 !== 0);
}

function sum(arr) {
	return arr.reduce((acc, num) => acc + num, 0);
}

function deleteNth(arr, n) {
	const count = {};
	return arr.filter((num) => {
		count[num] = (count[num] || 0) + 1;
		return count[num] <= n;
	});
}

function average(arr) {
	if (arr.length === 0) return 0;
	return sum(arr) / arr.length;
}

module.exports = {
	double,
	filterEven,
	sum,
  deleteNth,
  average
};
