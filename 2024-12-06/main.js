//7kyu - Isograms//

function isIsogram(str){
    str = str.toLowerCase().split('').sort()
    for(let i = 0; i < str.length; i++){
      if(str[i] === str[i + 1]) {
        return false;
      } 
    }
    return true;
}
