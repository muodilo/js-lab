function capitalize(string) {
  if (!string) return '';
  return string[0].toUpperCase() + string.slice(1);
}

function reverse(string) {
  return string.split('').reverse().join('');
}
  
function isPalindrome(string) {
  const cleanedString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedString === reverse(cleanedString);
}

function wordFrequency(string) {
	const lowerCased = string.toLowerCase();
	let cleaned = "";
	for (let i = 0; i < lowerCased.length; i++) {
		const char = lowerCased[i];
		if (
			(char >= "a" && char <= "z") ||
			(char >= "0" && char <= "9") ||
			char === " "
		) {
			cleaned += char;
		}
	}

	const wordsArray = cleaned.split(" ").filter((word) => word !== "");
	const frequencyMap = {};
	for (let i = 0; i < wordsArray.length; i++) {
		const word = wordsArray[i];
		frequencyMap[word] = (frequencyMap[word] || 0) + 1;
	}
	return frequencyMap;
}

module.exports = {
	capitalize,
	reverse,
	isPalindrome,
	wordFrequency,
};