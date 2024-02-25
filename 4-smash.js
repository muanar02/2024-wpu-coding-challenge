// WPU Coding Challenge 2024
// 4/366
// https://www.codewars.com/kata/53dc23c68a0c93699800041d

// function smash(words) {
//     let result = '';

//     for (let i = 0; i < words.length; i++) {
//         result += (i === 0) ? words[i] : ' ' + words[i];
//     }

//     return result;
// }

// function smash(words) {
//     return words.join(' ');
// }

const smash = (words) => words.join(' ');

console.log(smash(["hello", "world"]));