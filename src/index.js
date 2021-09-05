const  activo = true;

let mensaje = ( !activo ) ? 'Activo':'Inactivo';

const mensaje2 = activo && 'Activo 2';

/*if(activo){
    mensaje = 'Activo';
}else {
    mensaje = 'Inactivo';
}*/


console.log(mensaje, mensaje2);
