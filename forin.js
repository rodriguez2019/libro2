var list = { a: 1, b: 2, c: 3 };
for (var i in list) {
    console.log(list[i]); // 1, 2, 3
}
// for in accediendo al indice de una variable dentro de un objeto
for (var i in list) {
    console.log(i); // a, b, c
}