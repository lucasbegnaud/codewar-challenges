//8kyu - Total amount of points//

function points(games) {
    let num = 0;
    for (let i = 0; i < games.length; i++) {
      let [x, y] = games[i].split(':').map(Number);
      if (x > y) {
        num += 3; // 3 points for a win
      } else if (x === y) {
        num += 1; // 1 point for a draw
      }
    }
    return num;
}
