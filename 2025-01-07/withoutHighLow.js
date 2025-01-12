//8kyu - Sum without highest and lowest number//

function sumArray(array) {
    if(array === null || typeof array === 'boolean' || array === undefined ||array.length <= 2){
      return 0;
    } else {
      let sortedArr = array.sort((a,b) => a - b);
      sortedArr.shift()
      sortedArr.pop()
      return sortedArr.reduce((acc, cur) => acc + cur, 0);
    }
}
