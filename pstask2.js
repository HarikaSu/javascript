arr=[101,34,156,717];
emp=[];
dup=" ";
for(i=0;i<arr.length;i++){
    x=arr[i].toString().split("")
    for(j=0;j<emp.length;j++){
        y=x[j];
        if(emp[x]){
            dup.add(y); 
        }
        else{
            emp[y]=1;
        }
    }
    out=Array.from(dup).join("");
}
console.log(out);

