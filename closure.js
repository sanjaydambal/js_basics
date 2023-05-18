const sum  = function (a){
// console.log(a);
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