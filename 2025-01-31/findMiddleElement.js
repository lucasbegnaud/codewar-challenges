//7kyu - Find the middle element//

function gimme(triplet) {
    let sorted = [...triplet].sort((a, b) => a - b);
    let middleNum = sorted[1];
    return triplet.indexOf(middleNum);
}