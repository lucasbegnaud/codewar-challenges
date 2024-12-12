//7kyu - Beginner Series #3 Sum of Numbers//

function getSum(a, b){
    let sum = 0;
    if (a === b) {
      return a;
    }
    
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    
    return sum;
}