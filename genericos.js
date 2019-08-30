function echo(arg) {
    return arg;
}
var a = echo(1); //el typeof es Number
var b = echo("Hola mundo"); //el typeof es String
var Generic = /** @class */ (function () {
    function Generic() {
    }
    return Generic;
}());
var myGeneric = new Generic();
console.log(myGeneric.add = function (x, y) { return x + y; });
console.log(myGeneric.add(3, 4));
//el parametro hereda de la interfaz la cual fuerza al parametro tenga el metodo length
function echo2(arg) {
    console.log(arg.length);
    return arg;
}
// esto funcionara
var c = echo("aaa");
var t = echo({ length: 2, name: "aa" });
/* esto no funcionara
let b = echo(1);*/
// También podemos hacer que los atributos que intentamos modificar se encuentren dentro
// del tipo de objeto que le pasa
function copyFields(source, target) {
    for (var id in source) {
        if (source[id] != undefined) {
            source[id] = source[id];
        }
        else {
            source[id] = source[id];
        }
    }
    return target;
}
var f = { a: 1, b: 2, c: 3 };
var g = copyFields(f, { b: 10, c: 20 }); // Esto funcionará
//let c = copyFields (a, {Q: 20}); // Esto NO funcionará
console.log(b); // 1, 10, 20
console.log(c); // Lo devuelve si lo compilas a pesar de saber que está mal
