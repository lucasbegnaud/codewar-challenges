//8kyu - Double Char//

function doubleChar(str) {
    return str.split('').map(string => string.repeat(2)).join('');
}