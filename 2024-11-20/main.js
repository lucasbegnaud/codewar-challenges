//8kyu - Convert number to reversed array of digits//

function digitize(n) {
    let numToString = `${n}`;
    return numToString.split('').reverse().map(str => parseInt(str, 10));
  }
  
