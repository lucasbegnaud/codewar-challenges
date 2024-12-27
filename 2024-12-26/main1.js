//8kyu - How good are you really?//

function betterThanAverage(classPoints, yourPoints) {
    let averageClassScore = classPoints.reduce((acc, cur) => acc + cur, 0) / classPoints.length;
    if(averageClassScore > yourPoints){
      return false;
    } else {
      return true;
    }
}