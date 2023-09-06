// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
var filter = function(arr, fn) {
    filteredArr=[];
    for(let i =0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
};
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
var map = function(arr, fn) {
    const arr2 = [];
    for(let i=0;i<arr.length;i++){
        arr2[i]= fn(arr[i],i)
    }
    return arr2;
    // Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
    var createCounter = function(init) {
        let count = init;
         function increment(){
            return ++count
        }
           function decrement(){
           return --count
        }
           function reset(){
            return (count=init)
        }
        return{increment,decrement,reset}
    };
};
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
var expect = function(val) {
    
    return{
        notToBe:(n)=>{
    if(val===n) throw new Error("Equal")
    else return true
    },
    toBe:(n) => {
     if(val!==n) throw new Error ("Not Equal");
     else return true
    }
    }
};
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
var createCounter = function(n) {
    return function() {
        return n++
        
    };
    
};
// Hello world
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }
};