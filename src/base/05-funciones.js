const ely = function(nombre){
    return `Hola amor de mi vida ${nombre}`;
}

const montse = (nombre) =>{
    return `Hola Hija de mi vida ${nombre}`;
}

const ivan = (nombre) => `Mis papás se llaman ${nombre}`;

const amigos = () => `Hola mundo`;

const objImplicito = (nombre) => ({
    id: 1,
    Nombre: nombre
})

const llamar = objImplicito('Ysrael');

console.log(ely('Ely'), montse('Montse'), ivan('Ivan y Mily'), amigos, llamar);



