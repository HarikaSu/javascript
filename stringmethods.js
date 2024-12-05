1.
const arr = ["hello", "world", "this", "is", "a", "test"];
const char = "h";
const result = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].charAt(0) === char) {
    result.push(arr[i]);
  }
}

console.log(result);

2
// function filterOutSubstring(arr, substring) {
//     return arr.filter(str => !str.includes(substring));
//   }
//   const arr = ["hello", "world", "this", "is", "a", "test"];
//   const substring = "o";
//   const result = filterOutSubstring(arr, substring);
//   console.log(result);

3.
// function extractFirstChars(arr) {
//     return arr.map(str => str.charAt(0));
//   }
//   const arr = ["hello", "world", "this", "is", "a", "test"];
//   const result = extractFirstChars(arr);
//   console.log(result);

