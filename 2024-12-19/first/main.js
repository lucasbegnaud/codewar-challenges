//8kyu - Abbreviate a Two Word Name//

function abbrevName(name){
    return name.toUpperCase().split(' ').map(item => item[0]).join('.')
}
