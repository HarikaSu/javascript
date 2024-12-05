// let a=3;
// let b=4;
// let c=5;
// if(a**2+b**2===c**2||a**2+c**2===b**2||b**2+c**2==a**2){
//     console.log('The triangle is right-angled');
// }
// else{
//     console.log('The triangle is not right-angled');
// }


// let n = 8;
// if (n <= 0) {
//   console.log("The number is not a power of 2");
// } else if (n === 1) {
//   console.log("The number is a power of 2");
// } else if (n % 2 !== 0) {
//   console.log("The number is not a power of 2");
// } else {
//   let temp = n;
//   while (temp % 2 === 0) {
//     temp /= 2;
//   }
//   if (temp === 1) {
//     console.log("The number is a power of 2");
//   } else {
//     console.log("The number is not a power of 2");
//   }
// }

let creditScore = 700;
let income = 60000;

if (creditScore >= 650 && income >= 50000) {
  console.log("The person is eligible for a loan");
} 
else {
  console.log("The person is not eligible for a loan");
}
