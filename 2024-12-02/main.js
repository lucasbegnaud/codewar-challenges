//7kyu - Highest and Lowest//

function highAndLow(numbers){
    let sortedNums = numbers.split(' ').map(Number).sort((a, b) => a - b);
    return `${sortedNums[sortedNums.length - 1]} ${sortedNums[0]}`
}
