const { average } = require("./helpers");

const addAvgScore = (person) => ({
	...person,
	avgScore: average(person.score),
});

const summarize = ({ name, avgScore }) => ({ name, avgScore });

const processPeople = (people) =>
	people
		.filter((p) => p.age >= 18)
		.map(addAvgScore)
		.map(summarize)
		.sort((a, b) => b.avgScore - a.avgScore);

module.exports = processPeople;
