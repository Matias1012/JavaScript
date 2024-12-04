let productos = [
    { id: 1, nombre: "gaseosa", precio: 2000, stock: 5, categoria: "bebida sin alcohol", rutaImagen: "gaseosa.png" },
    { id: 3, nombre: "agua", precio: 1000, stock: 7, categoria: "bebida sin alcohol", rutaImagen: "agua.png"},
    { id: 4, nombre: "jugo", precio: 1500, stock: 2, categoria: "bebida sin alcohol", rutaImagen: "jugo.jpg"},
    { id: 6, nombre: "cerveza", precio: 3000, stock: 6, categoria: "bebida alcoholica", rutaImagen: "cerveza.png"},
    { id: 8, nombre: "whisky", precio: 9000, stock: 2, categoria: "bebida alcoholica", rutaImagen: "whisky.jpg"},
    { id: 9, nombre: "fernet", precio: 5500, stock: 5, categoria: "bebida alcoholica", rutaImagen: "fernet.jpg"},
];

/* 

function presentarUsuario(nombre, edad) {
    console.log("Bienvenido")
    console.log(nombre )
    console.log("su edad es"+edad)
}

function verificarEdad(edad) {
    if (edad >= 18) {
        console.log("es mayor de edad")
        let productoSugerido = retornarProductoSugerido(edad)
        console.log(productoSugerido);
    } else {
        console.log("es menor de edad")
    }
}

function retornarProductoSugerido(edad) {
    let productoSugerido = "";
    switch (edad) {
        case 20:
            productoSugerido = "Cerveza";
        break;
        case 30:
            productoSugerido = "Fernet";
        break;

        default:
            productoSugerido = "Vino";
            break;
    }
    return productoSugerido
} 

let NombreDelUsuario =  prompt("ingrese su nombre");
let EdadDelUsuario =  Number(prompt("ingrese su edad"));
let BebidaDelUsuario =  prompt("ingrese su bebida"); */

let camposUsuarios = [
    { id: "nombre", nombre: "Nombre", type:"text" },
    { id: "edad", nombre: "Edad", type:"number" },
]

function mostrarUsuario() {
    let containerLogin = document.getElementById("containerLogin")
    camposUsuarios.forEach(element => {
        containerLogin.innerHTML += `<div>
            <div>
                <span> ${element.nombre} </span>
                <input id='${element.id}' type=${element.type} />
            </div>
        </div>`
    })

    containerLogin.innerHTML += `<div>
        <button onClick='validarUsuario()'> Log in </button>
     </div>`
    
}

mostrarUsuario()

function validarUsuario() {
    let NombreDelUsuario =  document.getElementById("nombre")
    let EdadDelUsuario =  document.getElementById("edad").value;
    let containerProductos = document.getElementById("containerProductos");
    let containerLogin = document.getElementById("containerLogin");
    //let BebidaDelUsuario =  prompt("ingrese su bebida"); 

    let bebidasAlcoholicas = productos.filter(producto => producto.categoria === "bebida alcoholica")
    let bebidasSinAlcohol = productos.filter(producto => producto.categoria === "bebida sin alcohol")
    
    containerLogin.classList.add("ocultar")
    containerProductos.classList.remove("ocultar")

    if (Number(EdadDelUsuario) < 18) {
        console.log(bebidasAlcoholicas)
        //const bebidaBuscada = bebidasAlcoholicas.find(producto => producto.nombre === BebidaDelUsuario)
        productos = bebidasSinAlcohol
    }
    crearTarjetaProductos()

}

function crearTarjetaProductos (){
    let contenedor = document.getElementById ("ContenedorProductos")
    productos.forEach(producto => {
        contenedor.innerHTML += `<div class='item-producto'>
            <div class='producto'>
                <img src='Imagenes/${producto.rutaImagen}'></img>
                <h3>${producto.nombre}</h3>
            </div>
            <div class='formulario'>
                <div class="mb-10">
                    <span> Precio </span>
                    <strong>${producto.precio}</strong>
                </div>
                <div class="mb-10">
                    <span> Cantidad </span>
                    <input id='cantidad-${producto.id}' type='number' />
                </div>
                <br> <br>
                <button class="btn" onClick="agregarCarrito(${producto.id}, ${producto.precio})"> Agregar </button> 
            </div>
        </div>
        `
    });
}

let total = 0

function agregarCarrito(idPrducto, precio) {
    let idCampoCantidad = document.getElementById(`cantidad-${idPrducto}`)
    let valorCantidad = idCampoCantidad.value
    
    total = (valorCantidad * precio ) + total
    let totalElement = document.getElementById("total")
    totalElement.innerHTML = total
}


/* const ProductoBuscado = productos.find((producto) => { 
    return  producto.id === 4
});

if (ProductoBuscado) {
    console.log("Nombre del Producto " + ProductoBuscado.nombre)
}

const ProductoNoEncontrado = productos.find(producto => producto.id === 7)

if (ProductoNoEncontrado === undefined) {
    console.log("No se encuentra el Producto" )
}

 */