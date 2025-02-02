//7kyu - Flatten and sort an array//

function flattenAndSort(array) {
    return array.reduce((acc, val) => acc.concat(val), []).sort((a, b) => a - b);
}