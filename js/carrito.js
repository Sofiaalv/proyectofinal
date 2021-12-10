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
    
    tbody.appendChild(fila);
}


console.log (carrito);