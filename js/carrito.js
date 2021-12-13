const Clickbutton = document.querySelectorAll('.botonCompra')
let carrito = []


Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e){
    const botonCompra = e.target
    const item = botonCompra.closest('.card')
    const itemTitle = item.querySelectorAll('.card-title').textContent;
    const itemPrice = item.querySelectorAll('.precio').textContent;
    

    const newItem= {
        title: itemTitle,
        precio: itemPrice,
        cantidad:1
    }

    addItemCarrito(newItem)
}    

function addItemCarrito(newItem){
    carrito.push(newItem)
    renderCarrito()
}

function renderCarrito(){
    console.log(carrito)
}