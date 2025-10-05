function problem4(word) {
  let result = '';

  for (let item of word) {
    if (item >= 'A' && item <= 'Z') {
      result += String.fromCharCode('Z'.charCodeAt(0) - (item.charCodeAt(0) - 'A'.charCodeAt(0)));
    } else if (item >= 'a' && item <= 'z') {
      result += String.fromCharCode('z'.charCodeAt(0) - (item.charCodeAt(0) - 'a'.charCodeAt(0)));
    } else {
      result += item;
    }
  }

  return result;
}

module.exports = problem4;
