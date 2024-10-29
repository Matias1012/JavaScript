

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

const edad = 24
presentarUsuario("Hugo", edad);
verificarEdad(edad);