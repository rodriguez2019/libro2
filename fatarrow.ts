var inc = (x)=>x+1;


function Person1(age){
    this.age = age
    this.growOld = ()=>{
        this.age++;
    }
}

class Person{
    constructor(public age:number){}
    growOld = ()=>{
        this.age++;
    }
}
var person = new Person(1);
setTimeout(person.growOld,1000); 
setTimeout(function(){console.log(person.age);},2000);


var growOld = person.growOld;
growOld();

class Adder{
     a:string;
    add = (b:string):string=>{
        return this.a+b;
    }
}

let add = (x: number) => (y: number) => x + y;
add(123)(456);
let add123 = add(123);
add123(456);