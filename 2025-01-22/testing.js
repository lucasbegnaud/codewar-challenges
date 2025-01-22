//7kyu - Testing 1-2-3//

var number=function(array){
    let newArr = []
    for(let i = 0; i < array.length; i++){
      newArr[i] = `${i + 1}: ${array[i]}`;
    }
    return newArr;
}