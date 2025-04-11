function capitalize(string) {
  if (!string) return '';
  return string[0].toUpperCase() + string.slice(1);
}

function reverse(string) {
  return string.split('').reverse().join('');
}
  

module.exports = {
  capitalize,
  reverse
};