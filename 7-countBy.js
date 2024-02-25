// WPU Coding Challenge 2024
// 7/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// function countBy(x, n) {
//     let z = [];

//     for(let i = 1; i <= n; i++) {
//         z.push(x * i);
//     }

//     return z;
// }

// const countBy = (x, n) => {
//     // return Array.from({length: n}, (_, i) => x * (i + 1));
    // return Array.from({length: n}, (v, k) => (k + 1) * x)
//     // return [...Array(n)].map((el, i) => x * (i + 1));
//     return Array(n).fill().map((el, i) => x * (i + 1));
// }

const countBy = (x, n) => Array(n).fill().map((el, i) => x * (i + 1));

console.log(countBy(1,10));
console.log(countBy(2,5));