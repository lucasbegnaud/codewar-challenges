//8kyu - Will you make it?//

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(distanceToPump > (mpg * fuelLeft)){
      return false;
    } else {
      return true;
    }
};