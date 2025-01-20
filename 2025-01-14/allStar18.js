function strCount(str, letter){  
  let num = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] === letter){
      num += 1;
    }
  }
  return num;
}
