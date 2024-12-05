let n=prompt("enter the number:");
let rem;
let sum=0;
while(n>0){
    rem=n%10;
    sum=sum+rem;
    n=n/10;
}
console.log(sum);
