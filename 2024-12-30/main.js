//8kyu - If you can't sleep, just count sheep!!//

var countSheep = function (num){
    let string = ''
    for(let i = 1; i <= num; i++){
      string += `${i} sheep...`
    }
    return string
}