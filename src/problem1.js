function problem1(pobi, crong) {
  if (!isValidPage(pobi) || !isValidPage(crong)) return -1;

  const pScore = Math.max(pageScore(pobi[0]), pageScore(pobi[1]));
  const cScore = Math.max(pageScore(crong[0]), pageScore(crong[1]));

  if (pScore > cScore) return 1;
  if (pScore < cScore) return 2;
  return 0;
}

function isValidPage(arr) {
  if (!Array.isArray(arr) || arr.length !== 2) return false;
  const [L, R] = arr;
  if (!Number.isInteger(L) || !Number.isInteger(R)) return false;

  if (L < 1 || R > 400) return false;
  if (L === 1 && R === 2) return false;
  if (L === 399 && R === 400) return false;

  if (L % 2 !== 1) return false;
  if (R % 2 !== 0) return false;
  if (R !== L + 1) return false;

  return true;
}

function pageScore(n) {
  const digits = String(n).split('').map(Number);
  const sum = digits.reduce((a, b) => a + b, 0);
  const product = digits.reduce((a, b) => a * b, 1);
  return Math.max(sum, product);
}

module.exports = problem1;
