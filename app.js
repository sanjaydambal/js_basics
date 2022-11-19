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
// recursion
function countDown(n) {
    console.log(n);
    if(n >= 1) countDown(n-1);
  }
  countDown(5);

  function factorial(x) {
    console.log(`factorial ${x} start`)
    if (x < 0) return;
    if (x === 0) return 1;
    return x * factorial(x - 1);
  }
  let result = factorial(6);
  console.log(result);

  function revStr(str){
    if (str === '') return '';
    return revStr(str.substr(1)) + str[0];
  }
  let result5 = revStr('winter');
  console.log(result5);
//   result2 = "winter" => "inter" + w => "nter" + i=> "ret" + n=> "re"+t=>"+e ""+r

//   result = f(3) => 3*2 => 2*1 => 1*1 => return 1