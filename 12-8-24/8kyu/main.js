//8kyu - Are You Playing Banjo?//

function areYouPlayingBanjo(name) {
    if(name[0].toLowerCase() === 'r'){
      return `${name} plays banjo`
    } else {
      return `${name} does not play banjo`
    }
}