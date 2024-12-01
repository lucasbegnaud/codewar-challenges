//7kyu - Disemvowel Trolls//

function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(item => !vowels.includes(item.toLowerCase())).join('');
}
