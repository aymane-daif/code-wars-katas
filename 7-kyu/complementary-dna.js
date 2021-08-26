// https://www.codewars.com/kata/554e4a2f232cdd87d9000038
function DNAStrand(dna) {
  let compDna = '';

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'T') compDna += 'A';
    else if (dna[i] === 'A') compDna += 'T';
    else if (dna[i] === 'C') compDna += 'G';
    else if (dna[i] === 'G') compDna += 'C';
    else compDna += dna[i];
  }
  return compDna;
}
console.log(DNAStrand('ATTGC')); // return "TAACG"
console.log(DNAStrand('GTAT')); // return "CATA"
