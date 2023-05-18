var fname = "sanjay";
var lname = "dambal";
// console.log(`my fullname is ${fname } + ${lname} `);
const fullName = getMyFullName();
function getMyFullName() {
  return `my fullname is ${fname}  ${lname} `;
}
// console.log(fullName);

const getFullName = () => {
  return `my fullname is ${fname}  ${lname} `;
}
console.log(getFullName());

const numbers = [8, 9, 5, 7, 6, 12];
var sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);
let prod = 1;
for (let i = 0; i < numbers.length; i++) {
  prod = prod * numbers[i];
}
console.log(prod);

// recursion
function countDown(n) {
  console.log(n);
  if (n >= 1) countDown(n - 1);
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

function revStr(str) {
  if (str === '') return '';
  return revStr(str.substr(1)) + str[0];
}
let result5 = revStr('winter');
console.log(result5);
//   result2 = "winter" => "inter" + w => "nter" + i=> "ret" + n=> "re"+t=>"+e ""+r

//   result = f(3) => 3*2 => 2*1 => 1*1 => return 1

function fact(i) {
  console.log(`factorial ${i} start`)
  if (i === 0) {
    return 1
  }
  else {
    return i * factorial(i - 1)
  }
}
console.log(fact(2));

function sum1(i) {
  if (i === 0) {
    return 0;
  }
  else {
    return i + sum1(i - 1);
  }
}
console.log(sum1(10));

function multiply(s) {
  if (s === 1) {
    return 1;
  }
  else {
    return s * multiply(s - 1);
  }
}
console.log(multiply(5));

// sum of all odd numbers 
function sumOdd(i) {
  if (i === 0) {
    return 0;
  }
  else if (i % 2 === 0) {
    return sumOdd(i - 1);
      }
  else {
    return i + sumOdd(i - 1);
  }
}
console.log(sumOdd(25));

function exp(i, p) {
  if (p === 1) {
    return i
  }
  else {
    return i * exp(i, p - 1)
  }
}
console.log(exp(2, 3));

// fibonacci number
  function cal(m){
    if(m<=1){
      return m;
    }
    return cal(m-1) + cal(m-2);
  }
  console.log(cal(10));

  // fibonacci sequence
  function fib(i){
    function cal(i){
      if(i<=1){
        return i;
      }
      return cal(i-1) + cal(i-2);
    }
    let string = "";
    for(let j=1;j<=i;j++){
      string = `${string} ${cal(j)}`;
    }
    console.log(string);
  }
  fib(10);
  