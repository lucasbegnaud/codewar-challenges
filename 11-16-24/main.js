//8ky - Counting Sheep...//

function countSheeps(sheep) {
    let countedSheep = 0;
    for(let i = 0; i < sheep.length; i++){
        if(sheep[i] === true){
            countedSheep += 1;
        }
    }
    return countedSheep;
  }