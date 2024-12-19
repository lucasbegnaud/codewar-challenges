//7kyu - Difference between years. (Level 1)//

var howManyYears = function(date1, date2){
    let year1 = date1.split('/').at(0);
    let year2 = date2.split('/').at(0);
    return Math.abs(Number(year1 - year2));
}
