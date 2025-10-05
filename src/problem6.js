function problem6(forms) {
  let badEmails = [];

  for (let i = 0; i < forms.length; i++) {
    const [email1, nickname1] = forms[i];

    for (let j = i + 1; j < forms.length; j++) {
      const [email2, nickname2] = forms[j];

      for (let k = 0; k < nickname1.length - 1; k++) {
        const part = nickname1.substring(k, k + 2);
        if (nickname2.includes(part)) {
          if (!badEmails.includes(email1)) badEmails.push(email1);
          if (!badEmails.includes(email2)) badEmails.push(email2);
          break;
        }
      }
    }
  }

  badEmails.sort();
  return badEmails;
}

module.exports = problem6;
