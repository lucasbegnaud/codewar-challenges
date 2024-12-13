//7kyu - Complementary DNA//

function dnaStrand(dna) {
    return dna.split('').map(char => {
      switch (char) {
        case 'A': return 'T';
        case 'T': return 'A';
        case 'G': return 'C';
        case 'C': return 'G';
      }
    })
    .join('');
}
