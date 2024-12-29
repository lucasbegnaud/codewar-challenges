//8kyu - Find Maximum and Minimum Values of a List//

var min = function(list){
    let listInOrder = list.sort((a,b) => a - b);
    return listInOrder[0];
}

var max = function(list){
    let listInOrder = list.sort((a,b) => a - b);
    return listInOrder[list.length - 1];
}