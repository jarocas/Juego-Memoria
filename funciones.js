document.addEventListener("DOMContentLoaded", function(){
    //variable del juego
    let imagenes = [
    {
        "nombre": "capitan_america",
        "url"   : "imagenes/capitan_america.jpg",
    },
    {
        "nombre": "goku",
        "url"   : "imagenes/goku.jpg",
    },
    {
        "nombre": "goku_ultra",
        "url"   : "imagenes/goku_ultra.jpg",
    },
    {
        "nombre": "ironman",
        "url"   : "imagenes/ironman.jpg",
    },
    {
        "nombre": "ironman",
        "url"   : "imagenes/ironman_gemas.jpg",
    },
    {
        "nombre": "superman",
        "url"   : "imagenes/superman.jpg",
    },
    {
        "nombre": "capitan_america",
        "url"   : "imagenes/capitan_america.jpg",
    },
    {
        "nombre": "goku",
        "url"   : "imagenes/goku.jpg",
    },
    {
        "nombre": "goku_ultra",
        "url"   : "imagenes/goku_ultra.jpg",
    },
    {
        "nombre": "ironman",
        "url"   : "imagenes/ironman.jpg",
    },
    {
        "nombre": "ironman",
        "url"   : "imagenes/ironman_gemas.jpg",
    },
    {
        "nombre": "superman",
        "url"   : "imagenes/superman.jpg",
    }
    ]
    //seleccionar tablero
    let tablero = document.querySelector(".tablero");
    //variables para guardar los numeros de las imagenes
    let numeroImg = [];
    //variables para guardar los nombres de las imagenes
    let nombreImg = [];
    //funcion para agregar las imagenes al tablero
    let agregarImagenes = ()=>{
        for(var x=0; x < imagenes.length; x++){
            let div = document.createElement("div");
            div.setAttribute("class","col-lg-3 col-md-4 col-3");
            //crear etiquetas de imagenes
            let img = document.createElement("img");
            img.setAttribute("class","img-fluid img-thumbnail");
            img.setAttribute("src","imagenes/interrogacion.jpg");
            //agregar un numero a cada imagen
            img.setAttribute("id", x)
            //agregar evento a click imagen
            img.addEventListener("click", mostrarImagen);
            //agregar iamgen al div
             div.appendChild(img);
            //agregar div con las imagenes al teblero
            tablero.appendChild(div)
        }
    }
    //ejecutar funcion 
    agregarImagenes();

    function mostrarImagen(){
        //alert("di click")
        let imgID = this.getAttribute("id");
        //alert("Numero de Imagen: "+imgID)
        this.setAttribute("src", imagenes[imgID].url);
        //guardar los nombre y los numeros de las imagenes
        nombreImg.push(imagenes[imgID].nombre)
        numeroImg.push(imgID);
        //alert(nombreImg[imgID]+" "+numeroImg[imgID])

        //comparar las imagenes despues de que de click dos veces
        if(nombreImg.length === 2){
            setTimeout(compararImagenes, 300)
    }
    }

    function compararImagenes(){
        //guardar imagenes actuales
        let imagenesActuales = document.querySelectorAll(".tablero div img");
        //console.log(imagenesActuales);
        //guardar imagen 1 e imagen 2
        let opcionUno = nombreImg[0];
        let opcionDos = nombreImg[1];
        //comparar las imagenes
        if(opcionUno == opcionDos){
            alert("Acertaste ✨✨✨😉😉😉");
            imagenesActuales[numeroImg[0]].setAttribute("src","imagenes/verdadero.png");
            imagenesActuales[numeroImg[1]].setAttribute("src","imagenes/verdadero.png")
        }else{
            alert("Fallaste");
            imagenesActuales[numeroImg[0]].setAttribute("src","imagenes/interrogacion.jpg");
            imagenesActuales[numeroImg[1]].setAttribute("src","imagenes/interrogacion.jpg")
        }

        numeroImg = [];
        nombreImg = [];
    }
    compararImagenes();
})

