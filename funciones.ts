// este tipo de funcion hace referencia al objeto que llama a esta funcion
setTimeout(function(){

    console.log(this); // Elemento que llama a la funcion
}, 2000);

// this no hace referencia al padre sino al objeto que contiene la funcion
setTimeout(() => {

    console.log(this);// elemento que contiene esta funcion
},2000);

// como evitar el tipo any y filtrar solo por los tipos de datos que necesitamos
//para poder definir tipos utilizaremos el 0 logico

function padLeft(value: string, padding: string | number) {

    if(typeof padding === "number"){
        return Array(padding + 1).join(" ") + value;
    }

    if(typeof padding == "string"){
        return Array(padding.length + 1).join(" ") + value;
    }

    // si existiera Any tendriamos que controlar la excepcion
    // como buenas practicas y ya que este codigo al fin y al cabo
    // sera javascript y es vulneable a inyeccion siempre esta bien
    // realizar el control de las posibles excepciones
    throw new Error(`Expected String or number, got '${padding}' `);

}

console.log(padLeft("hello", "aaa")); // ejemplo de funcion con texto: funciona
console.log(padLeft("hello", 5)); // ejemplo de funcion con numero: funciona
//console.log(padLeft("hello", true)); // ejemplo de funcion con texto: no funciona (no compila)

