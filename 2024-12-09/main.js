//7kyu - Sum of two lowest positive integers//

function sumTwoSmallestNumbers(numbers) {  
    let sortedNumbers = numbers.sort((a, b) => a - b);
    return sortedNumbers[0] + sortedNumbers[1];
}
