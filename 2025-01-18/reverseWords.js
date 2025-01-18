//7kyu - Reverse words//

function reverseWords(str) {
    return str.split(' ').map(element => element.split('').reverse().join('')).join(' ');
}