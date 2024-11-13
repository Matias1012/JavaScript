function paraCadaUno (array, function){
    for (let i = 0; i < array.length; i++) 
        {funcion (array[i])}
    
    }


let productos [
    { id: 1, nombre: "gaseosa", precio: 2000, stock: 5, categoria: "bebida sin alcohol"}
    { id: 3, nombre: "agua", precio: 1000, stock: 7, categoria: "bebida sin alcohol"},
    { id: 4, nombre: "jugo", precio: 1500, stock: 2, categoria: "bebida sin alcohol"},
    { id: 6, nombre: "cerveza", precio: 3000, stock: 6, categoria: "bebida alcoholica"},
    { id: 8, nombre: "whisky", precio: 9000, stock: 2, categoria: "bebida alcoholica"},
    { id: 9, nombre: "fernet", precio: 5500, stock: 5, categoria: "bebida alcoholica"},
]

const ProductoBuscado = productos.find{producto.id => producto.id === 4}
const ProductoNoEncontrado = productos.find{producto.id => producto.id === 7}
if (ProductoBuscado) {
    console.log("Nombre del Producto" ProductoBuscado.nombre)
}

let productosFiltrados = productos.filter{producto.categoria = bebida alcoholica}
console.log {productosFiltrados}