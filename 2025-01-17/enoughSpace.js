//8kyu - Will there be enough space?//

function enough(cap, on, wait) {
    if(cap >= on + wait){
      return 0;
    } else {
      return Math.abs(cap - (on + wait));
    }
}