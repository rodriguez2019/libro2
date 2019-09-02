// ejemplo de llamada a catch

const promise = new Promise((resolve, reject) => {
    
    reject(new Error("Algo malo a pasado"));
        });
        promise.then((res) => {
            // esta nunca es llamada
    });
    
    promise.catch((err) => {
        console.log('Tengo una llamada: ', err.message); // Tengo una llamada: 'Algo malo a pasado'
    });