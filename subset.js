arr1=[1,3,4,5,2];
arr2=[2,4,3,1,7,5,15]
subset=true;
for(i of arr1){
    if(!arr2.includes(i)){
        subset=false;
        break;
    }
}
console.log(subset?"arr1 is a subset of arr2":"arr1 is not a subset of arr2");
