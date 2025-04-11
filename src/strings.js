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

module.exports = {
  capitalize,
  reverse
};