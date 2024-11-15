

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
let BebidaDelUsuario =  prompt("ingrese su bebida");

let productos = [
    { id: 1, nombre: "gaseosa", precio: 2000, stock: 5, categoria: "bebida sin alcohol"},
    { id: 3, nombre: "agua", precio: 1000, stock: 7, categoria: "bebida sin alcohol"},
    { id: 4, nombre: "jugo", precio: 1500, stock: 2, categoria: "bebida sin alcohol"},
    { id: 6, nombre: "cerveza", precio: 3000, stock: 6, categoria: "bebida alcoholica"},
    { id: 8, nombre: "whisky", precio: 9000, stock: 2, categoria: "bebida alcoholica"},
    { id: 9, nombre: "fernet", precio: 5500, stock: 5, categoria: "bebida alcoholica"},
];

const ProductoBuscado = productos.find((producto) => { 
    return  producto.id === 4
});

if (ProductoBuscado) {
    console.log("Nombre del Producto " + ProductoBuscado.nombre)
}

const ProductoNoEncontrado = productos.find(producto => producto.id === 7)

if (ProductoNoEncontrado === undefined) {
    console.log("No se encuentra el Producto" )
}

let bebidasAlcoholicas = productos.filter(producto => producto.categoria === "bebida alcoholica")
let bebidasSinAlcohol = productos.filter(producto => producto.categoria === "bebida sin alcohol")

if (EdadDelUsuario >= 18) {
    console.log(bebidasAlcoholicas)
    
    const bebidaBuscada = bebidasAlcoholicas.find(producto => producto.nombre === BebidaDelUsuario)
    if (bebidaBuscada) {
        console.log("LA bebida es "+ bebidaBuscada.nombre)
    } else {
        console.log("No se encontro la bebida")
    }
} else {
    const ProductoNoEncontrado = productos.find(producto => producto.id === 7)
    console.log(bebidasSinAlcohol)
}
