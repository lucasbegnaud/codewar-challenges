//7kyu - Exes and Ohs//

function XO(str) {
    let xIncrement = 0;
    let oIncrement = 0;
    str = str.toLowerCase();
  
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'x'){
            xIncrement += 1;
        }else if(str[i] === 'o'){
            oIncrement += 1;
        }
    }
  
    if(xIncrement === oIncrement){
        return true;
    } else {
        return false;
    }
}
