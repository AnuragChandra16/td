const fs=require("fs");
console.log(fs);
console.log("yeah");
let v=new Date().getDate();
console.log(v);
let n="6";
let n1=typeof(n);

let arr=[5,4,2,4,5];
let k=0;
for(let i=0;i<arr.length;i++){
    k=k+arr[i];
}
console.log(k);
if(n1=="number"){
    console.log("true");
}
else{
    console.log("f");
}