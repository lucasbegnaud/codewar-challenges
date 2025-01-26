//7kyu - Count the divisors of a number//

function getDivisorsCnt(n) {
    let accumulatedNum = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        accumulatedNum += (i === n / i) ? 1 : 2;
      }
    }
    return accumulatedNum;
}