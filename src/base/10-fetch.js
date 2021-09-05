const apiKey = 'btE1I1Ny99wI3sISIa8PFDDk8flKwsKd';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/*peticion.then((resp)=>{
    console.log(resp);
}).catch(err => console.log(err));*/

/*peticion.then((resp)=>{
    resp.json().then((data) =>{
        console.log(data);
    })
}).catch(err => console.log(err));*/

peticion.then((resp)=> resp.json())
        .then(({data, meta}) => {
            const {url} = data.images.original;

            const img = document.createElement('img');
            img.src = url;
            document.body.append( img );

        });

