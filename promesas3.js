// Se pueden manejar los errores añadiendole un método catch a la cadena
Promise.reject(new Error('Algo malo ha pasado'))
    .then(function (res) {
    console.log(res); // no se llama
    return 456;
})
    .then(function (res) {
    console.log(res); // no se llama
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res); // no se llama
    return Promise.resolve(123);
})["catch"](function (err) {
    console.log(err.message); // Algo malo ha pasado        
});
// Cualquier error ocurrido en un then llamará al método catch . Ej.:
Promise.resolve(123)
    .then(function (res) {
    throw new Error('something bad happened');
    return 456;
})
    .then(function (res) {
    console.log(res); // never called
    return Promise.resolve(789);
})["catch"](function (err) {
    console.log(err.message); // something bad happened
});
