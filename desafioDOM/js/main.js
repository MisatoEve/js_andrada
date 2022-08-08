//Desafío: Incorporar Array y lo visto hasta ahora.
//►Cambiamos idea a tienda de juegos PS4 versión digital - físico
//►Vamos a definir los datos necesarios para comenzar

//►Iniciamos programa

//▼Creamos la estructura de los objetos
class Juegos{
    constructor (id, titulo, anio, precio, formato, imagen){
        this.id = id;
        this.titulo = titulo;
        this.anio = anio;
        this.precio = precio;
        this.formato = formato;
        this.imagen = imagen
    };
    verificarDatos (){
        console.log (`El id es ${this.id}. El título es ${this.titulo}, el año es ${this.anio} y su precio es $${this.precio}, formato: ${this.formato}`)
    };
};
//▼Construímos - función constructora | Array
const juego1 = new Juegos (1, "Call of Duty: Vanguard Standard Edition Activision", 2021, 15499, "fisico", "multimedios/CallOfDutyF.jpg");
const juego1A = new Juegos (2, "Call of Duty: Vanguard Standard Edition Activision", 2021, 6000, "digital", "multimedios/CallOfDutyD.PNG");
const juego2 = new Juegos (3,"Rocket League Collector's Edition Psyonix", 2022, 15000, "fisico", "multimedios/RocketLeagueF.jpg");
const juego2A = new Juegos (4,"Rocket League Standard Edition Psyonix ", 2015, 500, "digital", "multimedios/rocket-leagueD.jpg");
const juego3 = new Juegos (5, "Sonic Forces Standard Edition SEGA", 2017, 15577, "fisico", "multimedios/SonicForcesF.jpg");
const juego3A = new Juegos (6, "Sonic Forces Standard Edition SEGA", 2017, 1952, "digital", "multimedios/SonicForcesD.PNG");
const juego4 = new Juegos (7, "Fall Guys", 2020, 1299, "digital", "multimedios/fall-guys.jpg");
const juego5 = new Juegos (8, "FIFA 22 Standard Edition Electronic Arts", 2021, 11399, "fisico", "multimedios/fifaF.PNG");
const juego5A = new Juegos (9, "FIFA 22 Standard Edition Electronic Arts", 2021, 399, "digital", "multimedios/fifaD.jpg");
const juego6 = new Juegos (10, "Gta V Grand Theft Auto 5 Premium Edition", 2014, 8399, "fisico", "multimedios/gtaPF.PNG");
const juego6A = new Juegos (11, "Grand Theft Auto V Standard Edition Rockstar Games", 2014, 7895, "fisico", "multimedios/gtav_F.jpg");
const juego6B = new Juegos (12, "Grand Theft Auto V Standard Edition Rockstar Games", 2014, 299, "digital", "multimedios/gtavd.jpg");
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

        const carrito = [];

        let productosOfrecidos = "Para comprar. Por favor elija el numero de Id del juego segun corresponda"
        //▲Muestra via prompt mensaje con productos     
        
        function agregarCarrito(){
            //►recorremos arrayProductos y por cada elemento que tenga sumamos el item a nuestro mensaje
   
            for (item of conjuntoJuegos){
                productosOfrecidos += `\n ${item.id} - ${item.titulo} a $ ${item.precio}, formato ${item.formato}`
            }
            productosOfrecidos += `\n Ingrese el número de Item que desea agregar al carrito. Para finalizar ingrese 99`       
            let accionUsuario = parseInt(prompt(productosOfrecidos))
        
            while (isNaN(accionUsuario)) {
                alert("Por favor, ingrese sólo números")
                accionUsuario = parseInt(prompt(productosOfrecidos))
            }
        
            while (accionUsuario != 99) {
        
                switch (accionUsuario) {
        
                    case 0:
                        carrito.push(conjuntoJuegos[0])
                        alert(`Agregamos al carrito el producto ${conjuntoJuegos[0].titulo}`)
                        break;
                    case 1:
                        carrito.push(conjuntoJuegos[1])
                        alert(`Agregamos al carrito el producto ${conjuntoJuegos[1].titulo}`)
                        break;
                    case 2:
                        carrito.push(conjuntoJuegos[2])
                        alert(`Agregamos al carrito el producto ${conjuntoJuegos[2].titulo}`)
                        break;
                    case 3:
                        carrito.push(conjuntoJuegos[3])
                        alert(`Agregamos al carrito el producto ${conjuntoJuegos[3].titulo}`)
                        break;
                    case 4:
                        carrito.push(conjuntoJuegos[4])
                        alert(`Agregamos al carrito el producto ${conjuntoJuegos[3].titulo}`)
                        break;
                    case 5:
                        carrito.push(conjuntoJuegos[5])
                        alert(`Agregamos al carrito el producto ${conjuntoJuegos[3].titulo}`)
                        break;  
                    case 6:
                        carrito.push(conjuntoJuegos[6])
                        alert(`Agregamos al carrito el producto ${conjuntoJuegos[2].titulo}`)
                        break;
                    case 7:
                        carrito.push(conjuntoJuegos[7])
                        alert(`Agregamos al carrito el producto ${conjuntoJuegos[3].titulo}`)
                        break;
                    case 8:
                        carrito.push(conjuntoJuegos[8])
                        alert(`Agregamos al carrito el producto ${conjuntoJuegos[3].titulo}`)
                        break;
                    case 9:
                        carrito.push(conjuntoJuegos[9])
                        alert(`Agregamos al carrito el producto ${conjuntoJuegos[3].titulo}`)
                        break; 
                    case 10:
                        carrito.push(conjuntoJuegos[10])
                        alert(`Agregamos al carrito el producto ${conjuntoJuegos[3].titulo}`)
                        break;             
                    case 11:
                        carrito.push(conjuntoJuegos[11])
                        alert(`Agregamos al carrito el producto ${conjuntoJuegos[3].titulo}`)
                        break;
                    case 12:
                        carrito.push(conjuntoJuegos[12])
                        alert(`Agregamos al carrito el producto ${conjuntoJuegos[3].titulo}`)
                        break;                          
                    default:
                        console.log("No tenemos el id elegido :( ")
                        break;
                }
        
                accionUsuario = parseInt(prompt(productosOfrecidos))
            }
        
            //▼una vez que sale del while por haber recibido un 99, llamamos a la function mostrarCarrito()
            console.log("Cerramos tu pedido")
            mostrarCarrito()
        
        }    
        
        //▼Mostramos total a llevar
        let productosCarrito = "Vas a llevar:"
        let precioCarrito = 0;
        
        function mostrarCarrito() {
            for (itemsElegidos of carrito) {
                productosCarrito += `\n - ${itemsElegidos.titulo}`
                precioCarrito += itemsElegidos.precio
            }
        
            alert(`Repasemos: \n ${productosCarrito} \n por un total de $${precioCarrito}`)
        }
        agregarCarrito()


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

//▲FIN DECLARACIONES

//▼PLANTILLA DOM
let divProductos = document.getElementById("productos")
divProductos.setAttribute("class", "productosEstilos")

conjuntoJuegos.forEach((juego)=>{
    let nuevoProducto = document.createElement("div")
    nuevoProducto.innerHTML =  `<article id="${juego.id}" class="card container-fluid" style="width: 28rem;">
                                <img src="${juego.imagen}" alt="${juego.titulo}>
                                <article class="card-body">
                                    <h3 class="card-title">${juego.titulo}</h3>
                                    <p class="">Formato: ${juego.formato}</p>
                                    <p class="card-text">Año: ${juego.anio}</p>
                                    <p class="">Precio: ${juego.precio}</p>
                                    <a href="" class="btn btn-primary click">Agregar al carrito</a>
                                </article>` 
    divProductos.appendChild(nuevoProducto)
})
