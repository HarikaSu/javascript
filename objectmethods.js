1
// const obj = { a: 1, b: 2, c: 3, d: 4 };

// const newObj = Object.keys(obj)
//   .filter(key => obj[key] > 2)
//   .reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {});

// console.log(newObj); 

2
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const newObj = Object.assign({}, obj1, obj2);

// console.log(newObj);

3
const obj = { a: 1, b: 2, c: 3, d: 4 };

const sum = Object.values(obj).reduce((acc, value) => acc + value, 0);

console.log(sum); 




