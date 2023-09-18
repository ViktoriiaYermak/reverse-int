module.exports = function reverse (n) {
  const nStr = String(n);
  const reversStr = nStr.split('').reverse().join('');
  const reversNum = parseInt(reversStr);

  return reversNum;
}