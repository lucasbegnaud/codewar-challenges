//7kyu - Square Every Digit//

function squareDigits(num){
    return parseInt(num.toString().split('').map(item => item * item).join(''));
}
