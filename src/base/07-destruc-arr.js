const arr = ['Goku','Vegeta','Trunks'];
const [,,p3] = arr;
console.log(p3);

const arr2 = () => (['Goten','Bulma']);

//const [] = arr2;

const [letras, numeros] = arr2();
console.log(letras, numeros);

const arr4 = () => {
    return ['Ysrael', ()=>{console.log('Hola Mundo')}]
}

const arr5 = arr4();
console.log(arr5[0], arr5[1]());
//const [nombre,setNombre] = arr4();
//console.log(nombre);
//setNombre();

