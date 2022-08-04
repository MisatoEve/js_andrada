//Desafío: Incorporar Array y lo visto hasta ahora.
//►Cambiamos idea a tienda de juegos PS4 versión digital - físico
//►Vamos a definir los datos necesarios para comenzar

//►Iniciamos programa

//▼Creamos la estructura de los objetos
class Juegos{
    constructor (id, titulo, anio, precio, formato){
        this.id = id;
        this.titulo = titulo;
        this.anio = anio;
        this.precio = precio;
        this.formato = formato
    };
    verificarDatos (){
        console.log (`El id es ${this.id}. El título es ${this.titulo}, el año es ${this.anio} y su precio es $${this.precio}, formato: ${this.formato}`)
    };
};
//▼Construímos - función constructora | Array
const juego1 = new Juegos (1, "Call of Duty: Vanguard Standard Edition Activision", 2021, 15499, "fisico");
const juego1A = new Juegos (2, "Call of Duty: Vanguard Standard Edition Activision", 2021, 6000, "digital");
const juego2 = new Juegos (3,"Rocket League Collector's Edition Psyonix", 2022, 15000, "fisico");
const juego2A = new Juegos (4,"Rocket League Standard Edition Psyonix ", 2015, 500, "digital");
const juego3 = new Juegos (5, "Sonic Forces Standard Edition SEGA", 2017, 15577, "fisico");
const juego3A = new Juegos (6, "Sonic Forces Standard Edition SEGA", 2017, 1952, "digital");
const juego4 = new Juegos (7, "Fall Guys", 2020, 1299, "digital");
const juego5 = new Juegos (8, "FIFA 22 Standard Edition Electronic Arts", 2021, 11399, "fisico");
const juego5A = new Juegos (9, "FIFA 22 Standard Edition Electronic Arts", 2021, 399, "digital");
const juego6 = new Juegos (10, "Gta V Grand Theft Auto 5 Premium Edition", 2014, 8399, "fisico");
const juego6A = new Juegos (11, "Grand Theft Auto V Standard Edition Rockstar Games", 2014, 7895, "fisico");
const juego6B = new Juegos (12, "Grand Theft Auto V Standard Edition Rockstar Games", 2014, 299, "digital");
const conjuntoJuegos = [juego1, juego1A, juego2, juego2A, juego3, juego3A, juego4, juego5, juego5A, juego6, juego6A, juego6B]

//▼Declaramos function que permita al Usuario agregar un Juego 
function nuevoJuego(){
    let tituloIngresado = prompt("Ingrese el título del juego");
    let anioIngresado = parseInt(prompt("Ingrese el año de lanzamiento del juego"));
    let precioIngresado = parseInt(prompt("Ingrese el precio"));
    let formatoIngresado = prompt("Ingrese el formato: fisico/digital");
    let juegoCreado = new Juegos (conjuntoJuegos.length+1, tituloIngresado, anioIngresado, precioIngresado, formatoIngresado)
    console.log(juegoCreado)
    conjuntoJuegos.push(juegoCreado)
}

//▼Declaramos funcción para mostrar catálogo con "for of" para usuario 
function verCatalogo(){
    alert(`Podrá ver el catálogo en consola:`)
    for(let juego of conjuntoJuegos){
        juego.verificarDatos()
    }
}

//▼Declaramos función para eliminar un Juego del catálogo utilizando splice (opción3)
function eliminarJuego(){
    let idEliminar = prompt("Ingrese el ID del Juego a eliminar")
    for(let buscarJuego of conjuntoJuegos){
        if (buscarJuego.id == idEliminar){
            console.log("Este es el libro " + buscarJuego.titulo)
            conjuntoJuegos.splice(idEliminar-1, 1)
            console.log(conjuntoJuegos)
        }
    }
}

//▼Declaramos función aplicando Find que busque por título (opción4)
function buscarTitulo(){
        let buscado = prompt("Ingrese el título del juego que desea buscar")
        let busqueda = conjuntoJuegos.find((unidad)=>unidad.titulo.toLowerCase() == buscado.toLowerCase())
        if(busqueda == undefined){
            console.log("Disculpa, no encontramos coincidencia o aún no está disponible el juego que buscas")
        }else{
            console.log(`Tenemos el título ${busqueda.titulo} en formato ${busqueda.formato}, y su valor es $${busqueda.precio}`)
        }        
}
//▼Delcaramos función para buscar y ordenar por precio, aplicando sort (opción5)
function ordenadorDePrecio(){
    let opciones = prompt(`Ingrese MAYOR para ordenar de mayor a menor.
    Ingrese MENOR para ordenar de menor a mayor.
    `)
    if(opciones.toUpperCase() == "MAYOR"){
        console.log(conjuntoJuegos.sort((menor,mayor)=> (mayor.precio - menor.precio)))
    }else if(opciones.toUpperCase() == "MENOR"){
        console.log(conjuntoJuegos.sort((menor,mayor)=> (menor.precio - mayor.precio)))
    }
}
//▼Declaramos función para filtrar por formato, aplicando filter (opción6)
function buscarFormato(){
    let formatoBuscado = prompt("Ingrese el formato del juego fisico/digital")
    let busquedaPorFormato = conjuntoJuegos.filter((juego)=>juego.formato.toLowerCase() == formatoBuscado.toLowerCase())
    if((busquedaPorFormato !== "fisico") || (busquedaPorFormato !== "digital")){
        console.log(busquedaPorFormato)
    }else{
        console.log("Disculpa, no encontramos coincidencia o aún no está disponible el juego que buscas")
    }     
}

//►Mensaje de bienvenida ▼Almaceno el nombre del usuario 
let nombreUsuario = prompt('Bienvenido! Por favor ingrese su nombre.').toLowerCase();

//▼Imprimo en consola el nombre para darle la bienvenida y para identificar a quién vamos a mostrar su catálogo  
console.log (`Detalle de los Juegos de: ${nombreUsuario}`);

//▼Function que consulte al usuario opción deseada
const bienvenido = confirm(`${nombreUsuario}, por favor seleccione "Aceptar" para acceder al catálogo rápido. O "Cancelar" para acceder al menú con las opciones preestablecidas`);

if(bienvenido){
        //▼Si da Aceptar ingresa como Cliente podrá visualizar el catálogo en consola/ver los objetos
        alert(`Podrá ver el catálogo en consola:`)
        for (let i = 0; i < conjuntoJuegos.length; i++){
        console.log(conjuntoJuegos[i])
        }
        const CARRITO = [];

        function eleccionJuego() {
    
            let eleccion = prompt(`
                Para comprar. Por favor elija el numero de Id del juego segun corresponda:
                1. Nombre: ${conjuntoJuegos[0].titulo}
                Precio: ${conjuntoJuegos[0].precio}
                2. Nombre: ${conjuntoJuegos[1].titulo},
                Precio: $${conjuntoJuegos[1].precio}
                3. Nombre: ${conjuntoJuegos[2].titulo},
                Precio: $${conjuntoJuegos[2].precio}
                4. Nombre: ${conjuntoJuegos[3].titulo},
                Precio: $${conjuntoJuegos[3].precio}
                5. Nombre: ${conjuntoJuegos[4].titulo},
                Precio: $${conjuntoJuegos[4].precio}
                6. Nombre: ${conjuntoJuegos[5].titulo}
                Precio: ${conjuntoJuegos[5].precio}
                7. Nombre: ${conjuntoJuegos[6].titulo},
                Precio: $${conjuntoJuegos[6].precio}
                8. Nombre: ${conjuntoJuegos[7].titulo},
                Precio: $${conjuntoJuegos[7].precio}
                9. Nombre: ${conjuntoJuegos[8].titulo},
                Precio: $${conjuntoJuegos[8].precio}
                10. Nombre: ${conjuntoJuegos[9].titulo},
                Precio: $${conjuntoJuegos[9].precio}
                11. Nombre: ${conjuntoJuegos[10].titulo}
                Precio: ${conjuntoJuegos[10].precio}
                12. Nombre: ${conjuntoJuegos[11].titulo},
                Precio: ${conjuntoJuegos[11].precio}
            `)
    
            // Aqui sera llamada la funcion 
            informeTotalDeLaCompra(eleccion);
        }
    
        eleccionJuego();
    
        function informeTotalDeLaCompra(caso) {
    
            let seguirComprando = ""
    
            switch (caso) {
                case "1":
                        seguirComprando = prompt("Queres seguir comprando ?? si/no").toLowerCase();
    
                    if (seguirComprando === "si") {
                        eleccionJuego()
                    } else {
                        console.log("Gracias por tu compra");
                    }
                    break;
                case '2':
                    //mensaje = `El total de la compra es: $${conjuntoJuegos[1].precio}`;
    
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionJuego();
                    } else {
    
                        console.log('Gracias por tu compra')//${mensaje}
                       
                    }
                    break;
                case '3':
                    //mensaje = `El total de la compra es: $${conjuntoJuegos[2].precio}`;
    
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionJuego();
                    } else {
    
                        console.log('Gracias por tu compra')//${mensaje}
    
                    }
                    break;
                case '4':
                    //mensaje = `El total de la compra es: $${conjuntoJuegos[2].precio}`;
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionJuego();
                    } else {
    
                        imprimir('Gracias por tu compra') // ${mensaje}
    
                    }
    
                    break;
                case '5':
                    //mensaje = `El total de la compra es: $${conjuntoJuegos[2].precio}`;
    
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionJuego();
                    } else {
    
                        imprimir('Gracias por tu compra') //${mensaje}
    
                    }
                    break; // RETORNAR PRECIO
                case '6':
                    //mensaje = `El total de la compra es: $${conjuntoJuegos[2].precio}`;
    
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionJuego();
                    } else {
    
                        imprimir('Gracias por tu compra') //${mensaje}
    
                    }
                    break; // RETORNAR PRECIO
                case '7':
                    //mensaje = `El total de la compra es: $${conjuntoJuegos[2].precio}`;
    
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionJuego();
                    } else {
    
                        imprimir('Gracias por tu compra') //${mensaje}
    
                    }
                    break; // RETORNAR PRECIO
                case '8':
                    //mensaje = `El total de la compra es: $${conjuntoJuegos[2].precio}`;
    
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionJuego();
                    } else {
    
                        imprimir('Gracias por tu compra') //${mensaje}
    
                    }
                    break; // RETORNAR PRECIO
                case '9':
                    //mensaje = `El total de la compra es: $${conjuntoJuegos[2].precio}`;
    
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionJuego();
                    } else {
    
                        imprimir('Gracias por tu compra') //${mensaje}
    
                    }
                    break; // RETORNAR PRECIO
                case '10':
                    //mensaje = `El total de la compra es: $${conjuntoJuegos[2].precio}`;
    
                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {
    
                        eleccionJuego();
                    } else {
    
                        imprimir('Gracias por tu compra') //${mensaje}
    
                    }
                    break; // RETORNAR PRECIO
                    default:
                        alert("Por favor ingrese un numero valido");
                        informeTotalDeLaCompra(caso);
                        break;
                }
/*                case '11':
                    //mensaje = `El total de la compra es: $${conjuntoJuegos[2].precio}`;

                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {

                        eleccionJuego();
                    } else {

                        imprimir('Gracias por tu compra') //${mensaje}

                    }
                    break; // RETORNAR PRECIO
                case '12':
                    //mensaje = `El total de la compra es: $${conjuntoJuegos[2].precio}`;

                    seguirComprando = prompt("Queres seguirComprando ? si/no").toLowerCase();
                    if (seguirComprando == "si") {

                        eleccionZapatilla();
                    } else {

                        imprimir('Gracias por tu compra') //${mensaje}

                    }
                    break; // RETORNAR PRECIO
                default:
                    alert("Por favor ingrese un numero valido");
                    informeTotalDeLaCompra(caso);
                    break;*/
            }
    
            conjuntoJuegos.forEach((producto)=>{
                console.log(`${producto.titulo} - $${producto.precio}`)
            })        
            
            console.log(`El total de compra es: $${totalDeLaCompra()}`)
            
        function totalDeLaCompra(){
       
            let total = conjuntoJuegos.reduce((total, juegos)=> total + juegos.precio, 0);
            return total;
        }
} else{
    //►Si elige "Cancelar" podrá ver las opciones para trabajar detalladamente y luego imprimir en consola 
    function usuarioSelecciona(){
    let seleccionar = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
            1. Ver catálogo
            2. Agregar un juego a nuestro catálogo 
            3. Eliminar un juego de nuestro catálogo 
            4. Encontrar por titulo completo:
            5. Ordenar catálogo por precios:
            6. Filtrar por formato juego:
            0. Para salir
            `))
    menu(seleccionar)
    }
    //▼Generamos la función del menú seleccionado
    function menu(opcionSeleccionada){
            switch(opcionSeleccionada){
                case 0:
                    salir = true
                    alert(`Apu dice: ¡Gracias, vuelva prontos!`)
                break    
                case 1:
                    verCatalogo()
                break 
                case 2: 
                    nuevoJuego()
                break 
                case 3: 
                    eliminarJuego()
                break
                case 4: 
                    buscarTitulo()
                break
                case 5: 
                    ordenadorDePrecio()
                break 
                case 6:
                    buscarFormato()
                break
                default: 
                alert(`La ocpión ingresada no existe. Por favor ingrese una opción correcta`)
                break
            }
        }
    let salir 
    while(salir != true){
        usuarioSelecciona()
    }
}
