//Ejemplo de llamada en then
var promise = new Promise(function (resolve, reject) {
    resolve(123);
});
promise.then(function (res) {
    console.log('I get called:', res === 123); // Devuelve: true
});
promise["catch"](function (err) {
    // Nuca es utilizado
});
