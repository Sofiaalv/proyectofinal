const Clickbutton = document.querySelectorAll('.botonCompra')
const tbody = document.querySelector('.tbody')
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
    for(let i =0; i < carrito.length; i++){
        
        if(carrito[i].title.trim() === newItem.title.trim()){
            carrito[i].cantidad ++;
            console.log(carrito)
            return null
        }


    }
    carrito.push(newItem)
    renderCarrito()
}

function renderCarrito(){
    tbody.innerHTML=''
    carrito.map(item =>{
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = `              
        <th scope="row">1</th>
        <td class="table__productos">
            <h3 class="title">${item.title}</h3>
        </td>
        <td class="table__precio">${item.precio} </td>
        <td class="table__cantidad">
            <input type="number" min="1" value="${item.cantidad}">
            <button class="delete bnt btn-danger">x</button>
        </td>
        `
        tr.innerHTML = Content;
        tbody.appendChild(tr)
    })
}