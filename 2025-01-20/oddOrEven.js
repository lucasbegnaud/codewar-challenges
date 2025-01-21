//7kyu - Odd or Even?//

function oddOrEven(array) {
    let summedArr = array.reduce((acc, cur) => acc + cur, 0);
    if(summedArr % 2 === 0){
      return 'even';
    } else {
      return 'odd';
    }
}