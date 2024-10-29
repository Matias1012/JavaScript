
let cantidadDeClientes =  Number(prompt("ingrese la cantidad de clientes"))

for (let numero = 0; numero < cantidadDeClientes; numero++) {
    
    let cantidadDeProducto =  Number(prompt("ingrese la cantidad de producto por cliente"+ numero))
    let precioDeProducto =  Number(prompt("ingrese el precio del producto" + numero))
    let total = cantidadDeProducto * precioDeProducto

    if (precioDeProducto > 6000) {
        console.log("Usted tendra un descuento de $500 ");
        total = total - 500
    }
    console.log("El total a pagar es " + total);     
    
}

let totalDeProductos =  Number(prompt("ingrese la cantidad de productos"))

while (totalDeProductos < 6) {
    console.log("se ejecuta mientras se cumpla la condicion")
    if (totalDeProductos === 6) {
        break
    }
}