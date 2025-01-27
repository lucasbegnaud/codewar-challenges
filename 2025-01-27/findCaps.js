//7kyu - Find the capitals//

var capitals = function (word) {
    let arr = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase()) {
        arr.push(i);
      }
    }
    return arr;
};