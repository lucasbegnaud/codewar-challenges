//7kyu - Number of People in the Bus//

var number = function(busStops){
    return busStops.map(element => element.reduce((acc, cur) => acc - cur)).reduce((acc,cur) => acc + cur, 0);
}