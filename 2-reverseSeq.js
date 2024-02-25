// WPU Coding Challenge 2024
// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// const reverseSeq = n => {
//     let results = []

//     for (let i = n; i >= 1; i--) {
//         results.push(i);
//     }

//     return results;
// }

// const reverseSeq = n => {
//     return Array.from({length: n}, (_, i) => n - i);
//     return Array.from({length: n}, (_, i) => i + 1).reverse();
//     return [...Array(n)].map((a, i) => i + 1).reverse();
//     return Array(n).fill().map((el, i) => i + 1).reverse();
// }

const reverseSeq = n => Array(n).fill().map((el, i) => n - i);
// const reverseSeq = n => Array(n).fill().map((el, i) => i + 1).reverse();

console.log(reverseSeq(5));