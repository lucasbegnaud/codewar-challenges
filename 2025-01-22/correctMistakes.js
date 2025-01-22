//8kyu - Correct the mistakes of the character recognition software//

function correct(string){
    return string.replaceAll('0', 'O').replaceAll('1', 'I').replaceAll('5', 'S')
}