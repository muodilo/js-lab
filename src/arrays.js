function double(arr) {
	return arr.map((num) => num * 2);
}

function filterEven(arr) {
	return arr.filter((num) => num % 2 !== 0);
}

module.exports = {
  double,
  filterEven
};
