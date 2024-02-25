// WPU Coding Challenge 2024
// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     let result = '';

//     for (let i = 0; i < dna.length; i++) {
//         result += (dna[i] === 'T') ? 'U' : dna[i]; 
//     }

//     return result;
// }

// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     return dna.replace(/T/g, 'U');
// }

// const DNAtoRNA = dna => dna.split('').map(el => el === 'T' ? 'U' : el).join('');

// const DNAtoRNA = dna => dna.split('T').join('U');

// const DNAtoRNA = dna => dna.replace(/T/g, 'U');

const DNAtoRNA = dna => dna.replaceAll('T', 'U');

console.log(DNAtoRNA('TTTT'));
console.log(DNAtoRNA('GCAT'));
console.log(DNAtoRNA('GACCGCCGCC'));