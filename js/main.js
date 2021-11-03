//CONTACTO//

function comprobar(){
    
    let fname = document.getElementById("fname");
    let mail = document.getElementById("mail");
    let country = document.getElementById("country");
    let subject = document.getElementById("subject");

    if (fname.value == "" && mail.value == "" && country.value == "bsas" ||country.value == "otro"  && subject.value == "" ){
        
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Ups...Volve a completar los datos";

        parrafo.style.backgroundColor = "#c79393";
        parrafo.style.color = "white";
        parrafo.style.textAlign = "center";
        parrafo.style.fontSize = "25px"
        
        console.log (parrafo);
        let saludo = document.getElementById("saludo");
        saludo.appendChild(parrafo);

    } else{
        console.log ("Datos recibidos");
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Gracias por contactarnos! En breve te responderemos.";

        parrafo.style.backgroundColor = "#c79393";
        parrafo.style.color = "white";
        parrafo.style.textAlign = "center";
        parrafo.style.fontSize = "25px"
        
        console.log (parrafo);
        let saludo = document.getElementById("saludo");
        saludo.appendChild(parrafo);
    }

    console.log(fname.value);
    console.log(mail.value);
    console.log(country.value);
    console.log(subject.value);
}


/// PRODUCTOS ///

let botonCompra = document.querySelectorAll(".botonCompra");
let carrito = [];
console.log( botonCompra );


for (let boton of botonCompra){
    boton.addEventListener("click", agregarCarrito);

}

function agregarCarrito(e){
    
    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;
    let nombreProducto = padre.querySelector("h2").textContent;
    let img = padre.querySelector("img").src;
    let precio = padre.querySelector("p").textContent;


    const producto = {

        nombre: nombreProducto,
        img: img,
        precio: precio,
        cantidad: 1

    }


    carrito.push(producto);
    mostrarCarrito(producto);

}

function mostrarCarrito(producto){
    let fila = document.createElement("tr");
    fila.innerHTML = ` <td>${producto.nombre}</td>
                        <td>${producto.cantidad}</td>
                        <td>${producto.precio}</td>
                        <td><button class="btn btn-danger">Eliminar</button></td>
                    `
    let tbody = document.getElementById("tbody");
    
    tbody.appendChild(fila)
}


console.log (carrito);
