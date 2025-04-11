function sqlJoin(arr1, arr2) {
	const map = new Map(arr2.map((obj) => [obj.id, obj]));
	return arr1
		.filter((obj) => map.has(obj.id))
		.map((obj) => ({ ...obj, ...map.get(obj.id) }));
}

module.exports = sqlJoin;
