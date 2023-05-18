const sum  = function (a){
// console.log(a);
const c= 4;
return function(b){
return a+b+c;
}
}
const store = sum(2);
console.log(store(10));