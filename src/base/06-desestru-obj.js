
const personas = {
    nombre: 'Ysrael',
    edad: 45,
    clave: 'Goku'
}

const { nombre, clave, edad } = personas;


const objfun = ({clave, nombre}) => ({
        claveMayor: clave,
        nombreNuevo: nombre,
        latlog: {
            lat: 3.1416,
            log: 4.1316
        }
    });

const { claveMayor, nombreNuevo, latlog:{ lat, log} } = objfun(personas);

console.log(claveMayor, nombreNuevo, lat);
console.log(`Hola Mundo ${nombre}`);
