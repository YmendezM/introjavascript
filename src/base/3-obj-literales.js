const obj = {
    nombre: 'Ysrael',
    apellido: 'Mendez',
    edad: 30,
    direccion:{
        x:50,
        y:60,
        z:70
    }
}

const obj2 = {...obj}
obj2.nombre = 'Ivan'
console.table({obj});
console.table({obj2});
console.table({obj});




