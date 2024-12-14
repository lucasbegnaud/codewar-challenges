//7kyu - Shortest Word//

function findShort(s){
    return s.split(' ').map(string => string.length).sort((a, b) => a - b).at(0)
}
