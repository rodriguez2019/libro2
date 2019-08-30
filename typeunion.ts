interface Bird{
    fly();
    layEggs(); // los 2 pueden
}

interface Fish{
    swim();
    layEggs(); // los 2 pueden
}

function getAnimal(): Fish|Bird{
    var a :Fish;
    return a;
}

let pet = getAnimal();
pet.layEggs(); // esto funcionaria
//pet.swim();  // esto daria error