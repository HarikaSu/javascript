1
// const dt=new Date()
// console.log(dt.toString()); 

2
// const dateStr = "2024-08-28";";
// const daysToAdd = 3;
// const date = new Date(dateStr);
// date.setDate(date.getDate() + daysToAdd);
// const newDateStr = date.toString().split('T')[0];
// console.log(newDateStr);

3
// const dateStr = "2024-08-28
// const date = new Date(dateStr);
// const month = (date.getMonth() + 1).toString().padStart(2, '0');
// const day = date.getDate().toString().padStart(2, '0');
// const year = date.getFullYear();
// const formattedDate = `${month}/${day}/${year}`;
// console.log(formattedDate)

4
const dateStr1 = "2024-08-28";
const dateStr2 = "2024-09-01";
const date1 = new Date(dateStr1);
const date2 = new Date(dateStr2);
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(diffDays);






