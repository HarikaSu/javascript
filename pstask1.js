arr=[121,45,88,10];
res=[];
emp=[];
for(i=0;i<arr.length;i++){
    found=false;
    for(j=0;j<emp.length;j++){
        if(arr[i]===emp[j]){
            found=true;
            break;
        }
    }
    if(found){
        res.push(true);

    }
    else{
        emp.push(arr[i]);
        res.push(false);
    }
    
}
console.log(res);
