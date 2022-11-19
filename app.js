var fname = "sanjay";
var lname = "dambal";
// console.log(`my fullname is ${fname } + ${lname} `);
const fullName = getMyFullName(); 
function getMyFullName(){
return  `my fullname is ${fname }  ${lname} `;
}
// console.log(fullName);

const getFullName = () => {return  `my fullname is ${fname }  ${lname} `;
}
console.log(getFullName());

const numbers = [8,9,5,7,6,12];
var sum =0;
for(let i=0;i<numbers.length;i++){
    sum = sum+numbers[i];
}
console.log(sum);
let prod =1;
for(let i=0;i<numbers.length;i++){
    prod = prod * numbers[i];
}
console.log(prod);