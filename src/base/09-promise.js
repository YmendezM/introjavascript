import { getHeroesById, getHeroesByOwner} from './base/07-import-export';
/*
const promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Se esta ejecutando Ysrael")
        const heroe = getHeroesById(2);
        //console.log(heroe);
        resolve(heroe);
        reject('No se puede encontrar el heroe');
    },2000)

});

promesa.then((heroe)=>{
        console.log('El heroe es: ', heroe)
    }).catch(
        err => console.warn(err));
*/

const getHeroeByIdAsync = (id) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Se esta ejecutando Ysrael")
            const heroe = getHeroesById(id);
            //console.log(heroe);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se puede encontrar el heroe');
            }
        }, 2000);
    });
    return promesa;
}

getHeroeByIdAsync(1)
    .then((heroe) => console.log('El heroe es: ', heroe))
    //.then(console.log)
    .catch(err => console.log(err));


