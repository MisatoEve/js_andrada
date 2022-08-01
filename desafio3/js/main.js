//Desafío: Incorporar Array y lo visto hasta ahora.
//►Cambiamos idea a tienda de juegos PS4 versión digital - físico
//►Vamos a definir los datos necesarios para comenzar

//►Iniciamos programa

//▼Creamos la estructira de los objetos
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
const juego1 = new Juegos (1, "Call of Duty: Vanguard Standard Edition Activision", 2021, 15.499, "fisico");
const juego1A = new Juegos (2, "Call of Duty: Vanguard Standard Edition Activision", 2021, 6000, "digital");
const juego2 = new Juegos (3,"Rocket League Collector's Edition Psyonix", 2022, 15000, "fisico");
const juego2A = new Juegos (4,"Rocket League Standard Edition Psyonix ", 2015, 500, "digital");
const juego3 = new Juegos (5, "Sonic Forces Standard Edition SEGA", 2017, 15.577, "fisico");
const juego3A = new Juegos (6, "Sonic Forces Standard Edition SEGA", 2017, 1.952, "digital");
const juego4 = new Juegos (7, "Fall Guys", 2020, 1.299, "digital");
const juego5 = new Juegos (8, "FIFA 22 Standard Edition Electronic Arts", 2021, 11.399, "fisico");
const juego5A = new Juegos (9, "FIFA 22 Standard Edition Electronic Arts", 2021, 399, "digital");
const juego6 = new Juegos (10, "Gta V Grand Theft Auto 5 Premium Edition", 2014, 8.399, "fisico");
const juego6A = new Juegos (11, "Grand Theft Auto V Standard Edition Rockstar Games", 2014, 7.895, "fisico");
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

//▼Declaramos función para eliminar un Juego del catálogo
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

//►Mensaje de bienvenida ▼Almaceno el nombre del usuario 
let nombreUsuario = prompt('Bienvenido! Por favor ingrese su nombre.').toLowerCase();

//▼Imprimo en consola el nombre para darle la bienvenida y para identificar a quién vamos a mostrar su catálogo  
console.log (`Detalle de los Juegos de: ${nombreUsuario}`);

//▼Function que consulte al usuario opción deseada
const bienvenido = confirm(`${nombreUsuario}, por favor seleccione "Aceptar" si usted es Cliente para ver catálogo. O "Cancelar" si usted es Usuario, para elegir una de las opciones preestablecidas`);

if(bienvenido){
        //▼Si da Aceptar ingresa como Cliente podrá visualizar el catálogo en consola/ver los objetos
        alert(`Podrá ver el catálogo en consola:`)
        for (let i = 0; i < conjuntoJuegos.length; i++){
            console.log(conjuntoJuegos[i])
        }
    } else{
        //►Si elige Usuario, es decir "Cancelar" podrá ver las opciones para trabajar y luego imprimir en consola 
        function usuarioSelecciona(){
        let seleccionar = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                1. Ver catálogo
                2. Agregar un libro a nuestro catálogo 
                3- Eliminar un libro de nuestro catálogo 
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
