1
// const str = "hello world";
// const rev = str.split("").reverse().join("");
// console.log(rev);

2
const inputSentence = "This is a sentence with words of varying lengths";
const words = inputSentence.split(" ");
let longestWord = "";
for (let word of words) {
  if (word !== "sentence" && word.length > longestWord.length) {
    longestWord = word;
  }
}
console.log(longestWord);


3
// const inputSentence = "This sentence repeats the word 'this' twice";
// const wordToCount = 'this';
// const words = inputSentence.toLowerCase().split(/\b/);
// const count = words.filter(word => word === wordToCount).length;
// console.log(count);

4
// const inputSentence = "this is a sentence with words to capitalize";
// const capitalizedSentence = inputSentence.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// console.log(capitalizedSentence);

5
// const inputArray = [1, 2, 3, 2, 4, 1];
// const uniqueArray = inputArray.filter((element, index, self) => self.indexOf(element) === index);
// console.log(uniqueArray); 

6
// const inputString = "racecar";
// const isPalindrome = inputString.toLowerCase() === inputString.toLowerCase().split("").reverse().join("");
// console.log(isPalindrome);

7
// const inputArray = [1, 2, 3, 2, 2, 4];
// const mostFrequentElement = inputArray.reduce((a, b) => 
//     inputArray.filter(v => v === a).length >= inputArray.filter(v => v === b).length ? a : b);
// console.log(mostFrequentElement);