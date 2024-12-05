arr = [2, 4, 4, 5, 4, 3, 8];
(emp = []), (dup = " "), (uni = " ");
for (i of arr) {
  if (!emp.includes(i)) {
    emp.push(i);
  }
}
console.log(emp);
for (i of emp) {
  c = 0;
  for (j of arr) {
    if (i == j) {
      c++;
    }
  }
if (c > 1) {
  dup = dup + i + " ";
} else {
  uni = uni + i + " ";
}
}
console.log("Duplicates:" + dup);
console.log("Unique:" + uni);
