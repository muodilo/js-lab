const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const reverse = (str) => str.split("").reverse().join("");
const double = (arr) => arr.map((n) => n * 2);
const filterEven = (arr) => arr.filter((n) => n % 2 === 0);
const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

module.exports = { capitalize, reverse, double, filterEven, average };
