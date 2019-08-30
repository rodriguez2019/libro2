// desestructuracion de objetos
var obj = {x: 1, y: 2, z: 3};
console.log(obj.x);

var {x, y, z} = obj;
console.log(x); 


// desestructuracion de arrays
var array = [1, 2, 3];
console.log(array[0]); // 1

var [x, y, z] = array;
console.log(x); // 1


//desestructuracion de arrays con estructuracion
var array = [1, 2, 3, 4];
var [x, y, ...rest] = array;
console.log(x, y, rest); // 1, 2, [3, 4]