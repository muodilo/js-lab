const { compose, pipe } = require("./functions/compose");
const { capitalize, reverse, double, filterEven } = require("./functions/helpers");

const reverseCapitalize = compose(capitalize, reverse);
const doubleEvens = compose(double, filterEven);

const uniqueElements = require("./functions/uniqueElements");
const sqlJoin = require("./functions/sqlJoin");
const processPeople = require("./functions/pipeline");

module.exports = {
	compose,
	pipe,
	reverseCapitalize,
	doubleEvens,
	uniqueElements,
	sqlJoin,
	processPeople,
};
