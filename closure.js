const sum  = function (a){
console.log(a);
const c= 4;
return function(b){
return a+b+c;
}
}
const store = sum(2);
console.log(store(10));

const pdt = function(x,y,z){
    return{
        getPdtTwo:function(){
            return x*y;
        },
        getPdtThree:function(){
            return x*y*z;
        }
    }
}
const cal = pdt(5,8,6);
console.log(cal.getPdtTwo());
console.log(cal.getPdtThree());

const student = {
    name:"sanjay",
    age:34,
    profession:"Lecturer"
}
const {...rest} = student;
console.log(rest);

const student2 ={
    ...student,
    age:35
}
console.log(student2);

function add(l,m,n,...others) {
console.log(others);
return l+m+n
}
const res = add(8,5,2,4,8,7)
console.log(res);

function fibonacci(n) {
    if (n <= 0) {
      throw new Error("n must be a positive integer.");
    }
  
    let fibSequence = [0, 1];
    while (fibSequence.length <= n) {
      const nextTerm = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
      fibSequence.push(nextTerm);
    }
  
    return fibSequence[30];
  }
// console.log(fibSequence(30));  

function fibonacciSequence(numTerms) {
    if (numTerms <= 0) {
      throw new Error("numTerms must be a positive integer.");
    }
  
    const fibSequence1 = [1,1];
  
    for (let i = 2; i < numTerms; i++) {
      const nextTerm = fibSequence1[i-1 ] + fibSequence1[i-2];
      fibSequence1.push(nextTerm);
    }
  
    return fibSequence1;
  }
  console.log(fibonacciSequence(30).join(", "));

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
  fib(30);


  function add(f) {
    return function(g) {
      return function(h){
        return f+g+h
      }
    };
  }
  
  const addTwo = add(2);

  const addThree = addTwo(6)
  console.log(addThree(9));
  // Output: 5
  
 
  
  //   const number = parseInt(prompt("Enter a number: "));
  //   if (number > 0) {
  //     console.log("The number is positive");
  // }
  
  // // check if number is 0
  // else if (number == 0) {
  //   console.log("The number is zero");
  // }
  
  // // if number is less than 0
  // else {
  //      console.log("The number is negative");
  // }
  // //   if(number == 0){
  // //     return "Zero"
  // //   }
  // //   else if(number<0){
  // //     return "Negative"
  // //   }
  // //   else{
  // //     return "Positive"
  // //   }
  
  // // console.log(checkNumber()) ;


  // calculator
  // function calculator (num1,num2,operator){
   
  //   var res ;
  //    if (operator == "+"){
  //     res= num1+num2
  //    }
  //    else if (operator == "-"){
  //     res= num1-num2
  //    }
  //    else if (operator == "*"){
  //     res= num1*num2
  //    }
  //    else {
  //     res= num1/num2
  //    }
  //    return res
  //   }  
  //   var num1 = parseInt(prompt("Enter a number: "));
  //   var num2 = parseInt(prompt("Enter a number: "));
  //   var result1 = calculator(num1,num2,"+");
  //   console.log(result1);

    function add1(n1,n2,callback){
      var result  = n1+n2;
      callback(result)
    }
    function sub1(n1,n2,callback){
      var result  = n1-n2;
      callback(result)
    }
    function pdt1(n1,n2,callback){
      var result  = n1*n2;
      callback(result)
    }
    function div1(n1,n2,callback){
      var result  = n1/n2;
      callback(result)
    }
    function display(result){
      console.log(result)
    }
    
    add1(8,9,display);
    sub1(5,9,display);

    
    
const named = ["sanju","lucky","Vinay"];
const namedlist = ()=>{
  const list = named.map((nam)=>
  <li key={nam}> {nam}</li>)
  return(<ul>{list}</ul>)
}
console.log(namedlist);