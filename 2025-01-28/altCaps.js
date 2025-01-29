//7kyu - Alternate capitalization//

function capitalize(s) {
    let string1 = s.split('');
    let string2 = s.split('');
  
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) {
        string1[i] = string1[i].toUpperCase();
      } else {
        string2[i] = string2[i].toUpperCase();
      }
    }
  
    return [string1.join(''), string2.join('')];
}