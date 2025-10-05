function problem2(cryptogram) {
  let changed = true;

  while (changed) {
    changed = false;
    let result = "";
    for (let i = 0; i < cryptogram.length; i++) {
      if (cryptogram[i] === cryptogram[i + 1]) {
        changed = true;
        i++;
      } else {
        result += cryptogram[i];
      }
    }
    cryptogram = result;
  }

  return cryptogram;
}

module.exports = problem2;