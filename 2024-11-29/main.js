//7kyu - Vowel Count//

function getCount(str) {
    str.split('');
    let sumOfVowel = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            sumOfVowel += 1;
        }
    }
    return sumOfVowel;
  }
  
