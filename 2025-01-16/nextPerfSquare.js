//7kyu - Find the next perfect square!//

function findNextSquare(sq) {
    let squaredNum = (Math.sqrt(sq) + 1) ** 2;
    if ((squaredNum - Math.floor(squaredNum)) !== 0){
      return -1;
    } else {
      return squaredNum;
    }
}