


//Arrow Function
const add2= (a,b) => {
    return a + b;
}

// Arrow function one statement
const mul= (a,b) => a * b;

var result= mul(10,20);
console.log(result);


//In vanilla JS
function demo(x,y,z) {
    if(y=== undefined){
        y=0;
    }
    if(z=== undefined){
        z=0;
    }

    return x + y + z;

}
var res3 = demo(100,50);
console.log(res3);


//In vanilla JS its also working
function demo(x,y,z=0) {
    return x + y + z;
}

var res1 = demo(10,20,50); // all parameter given
var res2 = demo(1,2);      // 2 parameter given
console.log(res1); 
console.log(res2);

// ES6

const multi = (a, b , c=0) => {
return a + b + c;
} 

const resmul = multi (10, 2);
console.log(resmul);                   //doubt here


//string concatination

//using vanilla JS

var firstname = 'Adam';
var lastname = ' Driver' ;

var fullname = 'I am ' + firstname + lastname ;  
console.log(fullname);

//using ES6 template literals 

const full = `I am ${firstname} ${lastname}`;
console.log(full);


//Array

const array = [1,2,3,4,5];
const arraymul2= [];
for(index=0; index <= array.length-1 ; index ++)
{
    arraymul2.push(array[index]*2);
}

console.log(arraymul2);     // using push and loop

//Array Helper Method (which are map, find , filter, foreach and reduce)

//Map

const arrmul2 = array.map (function(i){
    console.log(i);
})

const arrmuly2 = array.map ((item) => {
    return item * 2 
})

console.log(array);
console.log(arrmuly2);









