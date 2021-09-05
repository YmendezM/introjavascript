//const arr = new Array(100);  arreglo con tamaño predefinido pero fija el tamaño final
//arr.push(1) /Final 101 posiciones/
const arr = [1,2,3,4];
const arr2 = [...arr, 5];
arr2.push(1)
let arr3 = arr2.map(function(numero){
    return `Hola Mundo ${numero+2}  Gran resultado`;
})



console.table(arr);
console.table(arr2);
console.table(arr3);





