



const getImagen = async() => {
    try {
        const apiKey = 'btE1I1Ny99wI3sISIa8PFDDk8flKwsKd';
        const peticion =  await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await peticion.json();
        const {url} = data.images.original;
        console.log(url);
    }catch(error) {
        console.error(error);
    }
}
getImagen();

