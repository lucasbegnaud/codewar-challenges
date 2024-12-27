//8kyu - Count of positives / sum of negatives//

function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || input.length === 0) return [];
    
    let newArr = []
    newArr[0] = input.filter(num => num > 0).length
    newArr[1] = input.filter(num => num < 0).reduce((acc, cur) => acc + cur, 0)
    return newArr                                                
}