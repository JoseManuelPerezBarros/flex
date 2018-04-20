let infocurso = {
    "nombre": "Programación",
    "descripcion": "Un curso para aprender a programar",
    "tiempo": 5000,
    "codigo": "CDH234",
    "temas": [{
        "nombre": "introducción",
        "pantallas": [{
            "id": null,
            "nombre": "prueba1",
            "ruta": "a001.html",
            "necesitaTiempo": true,
            "orden": 0
        }, {
            "id": null,
            "nombre": "prueba2",
            "ruta": "a002.html",
            "necesitaTiempo": true,
            "orden": 1
        }]
    }, {
        "nombre": "Condicionales",
        "pantallas": [{
            "id": null,
            "nombre": "prueba3",
            "ruta": "a003.html",
            "necesitaTiempo": true,
            "orden": 3
        }, {
            "id": null,
            "nombre": "prueba4",
            "ruta": "a004.html",
            "necesitaTiempo": true,
            "orden": 2
        }]
    }]
};

//Object.freeze(infocurso);

function deepFreeze(obj) {

    // Recuperamos el nombre de las propiedades en obj
    var propNames = Object.getOwnPropertyNames(obj);

    // Congelamos las propiedades antes de congelar a obj
    propNames.forEach(function (name) {
        var prop = obj[name];

        // Si la propiedad es un objeto, llamaremos a deepFreezze para que congele las propiedades de ese objeto
        if (typeof prop == 'object' && prop !== null && !Object.isFrozen(prop))
            deepFreeze(prop);
    });

    // congelamos a obj 
    return Object.freeze(obj);
}
deepFreeze(infocurso);