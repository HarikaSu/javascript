// let arr=[12.345, 67.890, 34.567];
// let x=arr.map(a=>a.toFixed(2));
// console.log(x)

// //parseInt
// let arr = ["123abc", "456def", "789ghi"];
// let x = arr.map((a) => parseInt(a));
// console.log(x);

// //isInteger
// let arr=[12, 34.56, 78, 90.12];
// let x=arr.map(a=>Number.isInteger(a));
// console.log(x);

// //isNaN
// let arr=['abc', 123, 'def', 456];
// let x=arr.map(a=>isNaN(a));
// console.log(x);

//toPrecision
// let arr = [123.456, 789.012, 345.678];
// let x = arr.map((a) =>a.toPrecision(4));
// console.log(x);

// otp Generation

function generateOTP() {
  let digits = "0123456789";
  let res = "";
  let len = digits.length;
  for (let i = 0; i < 5; i++) {
    res += digits[Math.round(Math.random() * len)];
  }

  return res;
}
console.log(generateOTP());
