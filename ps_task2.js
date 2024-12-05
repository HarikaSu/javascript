// const num = 17659;
// let sum = 0;

// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     let isPrime = true;

//     if (i <= 1) {
//       isPrime = false;
//     } else {
//       for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//     }

//     if (!isPrime) {
//       sum += i;
//     }
//   }
// }

// console.log("Sum of non-prime:", sum);

const num = 17659;
let primeSum = 0, nonPrimeSum = 0;

for (let i = 1; i <= num; i++) {
  let isPrime = i > 1;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  isPrime ? primeSum += i : nonPrimeSum += i;
}

console.log(primeSum > nonPrimeSum ? "Prime sum is bigger" : nonPrimeSum > primeSum ? "Non-prime sum is bigger" : "Prime sum and Non-prime sum are equal");
