//8kyu - Fake Binary//

function fakeBin(x){
    let binarryNum = x.split('')
    for(let i = 0; i < x.length; i++){
      if(x[i] < 5){
        binarryNum[i] = 0;
      } else {
        binarryNum[i] = 1;
      }
    }
    return binarryNum.join('');
  }
  
