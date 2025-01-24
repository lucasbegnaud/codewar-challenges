//7kyu - Sum of a sequence//

const sequenceSum = (begin, end, step) => {
    let arr = [];
    for(let i = begin; i <= end; i += step){
      arr.push(i)
    }
    return arr.reduce((acc, cur) => acc + cur, 0);
};