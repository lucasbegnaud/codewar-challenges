//7kyu - Small enough? - Beginner//

function smallEnough(a, limit){
    let filteredNum = a.filter(num => num > limit)
    if(filteredNum.length > 0){
      return false;
    } else {
      return true;
    }
}