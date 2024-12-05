arr=[121,45,88,10];
out=[];
for(i of arr){
    x=String(i).split(" ");
    emp=[];
    for(j of x){
        if(!emp.includes(j)){
            emp.push();
        }
    }
    out.push(x.length==emp.length)
}
console.log(out);