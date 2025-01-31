//7kyu - Simple Fun #176: Reverse Letter//

function reverseLetter(str) {
    return str.split('').filter(element => element.toUpperCase() != element.toLowerCase()).reverse().join('')
    
}