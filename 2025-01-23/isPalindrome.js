//8kyu - Is it a palindrome?//

function isPalindrome(x) {
    if(x.toLowerCase() === x.toLowerCase().split('').reverse().join('')){
      return true;
    } else {
      return false;
    }
}