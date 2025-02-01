//7kyu - Are the numbers in order?//

function inAscOrder(arr) {
  return arr.every((_, i) => i === 0 || arr[i] >= arr[i - 1]);
}
