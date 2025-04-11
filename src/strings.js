function capitalize(string) {
  if (!string) return '';
  return string[0].upperCase() + string.slice(1);
}

function reverse(string) {
  return string.split('').reverse().join('');
  }