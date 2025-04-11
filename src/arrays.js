function double(arr) {
	return arr.map((num) => num * 2);
}

function filterEven(arr) {
	return arr.filter((num) => num % 2 !== 0);
}

function sum(arr) {
	return arr.reduce((acc, num) => acc + num, 0);
}

module.exports = {
  double,
  filterEven,
  sum
};
