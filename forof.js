// for of accediendo al valor de una variable dentro de un array
var list = ["a", "b", "c"];
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var b = list_1[_i];
    console.log(b); // a, b, c
}
// for of accediendo al valor de una variable dentro de un string
var string = "is it me you're looking for";
for (var _a = 0, string_1 = string; _a < string_1.length; _a++) {
    var char = string_1[_a];
    console.log(char); // is it me you're looking for?
}
