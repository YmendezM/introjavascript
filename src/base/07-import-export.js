import  heroes, {owner}  from '../data/heroes';

//console.log(heroes)

const getHeroesById = (id) => {
    return heroes.find((heroes) => heroes.id === id );// Devuelve el primero que encuentra
}
//console.log(getHeroesById(2));

const getHeroesByOwner = (owner) =>{
    return heroes.filter((heroes) => heroes.owner === owner); //Devuelve las cantidad que encuentre
}

//console.log(getHeroesByOwner('DC'));
//console.log(owner);

export {
    getHeroesById,
    getHeroesByOwner
}
