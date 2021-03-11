module.exports = function reverse (n) {
  let revert = '';
  n = '' + Math.abs(n);
  console.log(n);
  for (i = 0; i <= n.length; i++) { 
    revert += n.charAt(n.length - i);
  }
  return revert;
}
