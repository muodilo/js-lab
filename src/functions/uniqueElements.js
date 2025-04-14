function uniqueElements(arr1, arr2) {
	const seen = new Set();
	return [...arr1, ...arr2].filter((item) => {
		if (!seen.has(item)) {
			seen.add(item);
			return true;
		}
		return false;
	});
}

module.exports = uniqueElements;
