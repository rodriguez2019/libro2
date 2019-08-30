function echo<T>(arg: T) : T {
    return arg;
}

let a = echo<number>(1); //el typeof es Number
let b = echo<String>("Hola mundo"); //el typeof es String


class Generic<T> {
    add: (X: T, y:T) => T;
}

let myGeneric = new Generic<number>();

console.log(myGeneric.add = function (x,y) {return x + y});
console.log(myGeneric.add(3,4));


// interfaz que asegura que el parametro tenga el metodo length
interface withLength {
    length: number;
}

//el parametro hereda de la interfaz la cual fuerza al parametro tenga el metodo length
function echo2<T extends withLength>(arg: T): T{
    console.log(arg.length);
    return arg;
}

// esto funcionara
let c = echo("aaa");
let t = echo({length: 2, name: "aa"});

/* esto no funcionara
let b = echo(1);*/



// También podemos hacer que los atributos que intentamos modificar se encuentren dentro
// del tipo de objeto que le pasa
function copyFields<T extends U, U>(source: T, target: U) : U {

    for(let id in source){

        if(source[id] != undefined){
            source[id] = source[id];

        }else {

        source[id] = source[id];
        }
    }

    return target;

}

    let f = {a: 1, b: 2, c: 3};

    let g = copyFields (f, {b: 10, c:20}); // Esto funcionará
    //let c = copyFields (a, {Q: 20}); // Esto NO funcionará

    console.log(b); // 1, 10, 20
    console.log(c); // Lo devuelve si lo compilas a pesar de saber que está mal