//7kyu - Jaden Casing Strings//

String.prototype.toJadenCase = function () {
    return this.split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' ');
};
