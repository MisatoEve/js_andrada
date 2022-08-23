//Desafío: Optimizando proyecto
//►tienda de juegos PS4 versión digital - físico
//►Vamos a definir los datos necesarios para comenzar

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
//▼Construímos -> función constructora |
const juego1 = new Juegos(1, "Call of Duty: Vanguard Standard Edition Activision", 2021, 15499, "fisico", "multimedios/CallOfDutyF.jpg");
const juego1A = new Juegos(2, "Call of Duty: Vanguard Standard Edition Activision", 2021, 6000, "digital", "multimedios/CallOfDutyD.PNG");
const juego2 = new Juegos(3,"Rocket League Collector's Edition Psyonix", 2022, 15000, "fisico", "multimedios/RocketLeagueF.jpg");
const juego2A = new Juegos(4,"Rocket League Standard Edition Psyonix ", 2015, 500, "digital", "multimedios/rocket-leagueD.jpg");
const juego3 = new Juegos(5, "Sonic Forces Standard Edition SEGA", 2017, 15577, "fisico", "multimedios/SonicForcesF.jpg");
const juego3A = new Juegos(6, "Sonic Forces Standard Edition SEGA", 2017, 1952, "digital", "multimedios/SonicForcesD.PNG");
const juego4 = new Juegos(7, "Fall Guys", 2020, 1299, "digital", "multimedios/fall-guys.jpg");
const juego5 = new Juegos(8, "FIFA 22 Standard Edition Electronic Arts", 2021, 11399, "fisico", "multimedios/fifaF.PNG");
const juego5A = new Juegos(9, "FIFA 22 Standard Edition Electronic Arts", 2021, 399, "digital", "multimedios/fifaD.jpg");
const juego6 = new Juegos(10, "Gta V Grand Theft Auto 5 Premium Edition", 2014, 8399, "fisico", "multimedios/gtaPF.PNG");
const juego6A = new Juegos(11, "Grand Theft Auto V Standard Edition Rockstar Games", 2014, 7895, "fisico", "multimedios/gtav_F.jpg");
const juego6B = new Juegos(12, "Grand Theft Auto V Standard Edition Rockstar Games", 2014, 299, "digital", "multimedios/gtavd.jpg");

//▼Creamos los nuevos Array
let conjuntoJuegos = []
let productosEnCarrito = []

//▼Elementos DOM 
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')
let acumulador
let divProductos = document.getElementById("productos")
divProductos.setAttribute("class", "productosEstilos")

//▼Capturamos btn mostrar catalogo y pasamos eventos con function correspondiente
let mostrarCatalogoBtn = document.getElementById("verCatalogo")
mostrarCatalogoBtn.addEventListener("click", mostrarCatalogo)

//▼Capturamos btn ocultar catalogo y pasamos eventos con function correspondiente
let ocultarCatalogoBtn = document.getElementById("ocultarCatalogo")
ocultarCatalogoBtn.onclick = ocultarCatalogo

//▼Capturo guardarJuegoBtn y asignamos evento
const guardarJuegoBtn = document.getElementById("guardarJuegoBtn")
guardarJuegoBtn.addEventListener("click", guardarNuevojuego)

//▼Evento botonCarrito
botonCarrito.addEventListener('click', () => {
    cargarProductosCarrito(productosEnCarrito)
})
//▼Eventos ▲Eventos :P ►Eventos◄

//▼Inicio del array vacío
if(localStorage.getItem("conjuntoJuegos")){

    conjuntoJuegos = JSON.parse(localStorage.getItem("conjuntoJuegos"))
    console.log(conjuntoJuegos)
}else{
    console.log(`primera vez que carga array conjuntoJuegos`)
    conjuntoJuegos.push(juego1, juego1A, juego2, juego2A, juego3, juego3A, juego4, juego5, juego5A, juego6, juego6A, juego6B)
    localStorage.setItem("conjuntoJuegos", JSON.stringify(conjuntoJuegos))
}
console.log(conjuntoJuegos)
//▼Inicio del array carrito
if(localStorage.getItem("carrito")){
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    console.log(`primera vez`)
    localStorage.setItem("carrito", [])
}
//▼Desestructur Array 
let [a, ,b , c] = conjuntoJuegos
a = "id: 1, titulo: Call of Duty: Vanguard Edition Activision, 2021, 18499, fisico"
console.log(a) //►imprime en consola el valor asignado en la líne anterior y reemplaza el original
//►id 2 se declara vacío
console.log(b) //►imprime en consola {id: 3, titulo: "Rocket League Collector's Edition Psyonix", anio: 2022, precio: 15000, formato: 'fisico', …}
console.log(c) //►imprime en consola {id: 4, titulo: 'Rocket League Standard Edition Psyonix ', anio: 2015, precio: 500, formato: 'digital', …}
console.log(conjuntoJuegos) //►imprime en consola array ok
console.log(...conjuntoJuegos) //►imprime en consola array ok
//▼Buscar por título ||▼Se aplica Operador Nullish
let tituloBuscado = conjuntoJuegos.find(juego => juego.titulo == "Fall Guys") ?? "No tenemos ese libro en stock"
console.log(tituloBuscado) //►imprime según titulo buscado en consola {id: 7, titulo: 'Fall Guys', anio: 2020, precio: 1299, formato: 'digital', …}

//▼Desestructurar un objeto "juego1" ▼Se aplica Alias a "juego1A" ||▼Se aplica Operador AND - OR
const {titulo, precio} = juego1
const {titulo: titulo1, precio: precio1} = juego1A
let ComparaPrecio = precio
if(ComparaPrecio == precio1){
    console.log(`Estos juegos valen lo mismo: ${precio}`)
}else{
    console.log(`Estos juegos no valen lo mismo: ${titulo} vale ${precio} y ${titulo1} vale ${precio1}`)
}
ComparaPrecio > 10000 && console.log("Su producto es mayor a diez mil")
console.log(ComparaPrecio || "El valor es 0 o no existe")

//▼PLANTILLA DOM
function mostrarCatalogo(){
    divProductos.innerHTML= ""
    conjuntoJuegos.forEach((juego)=>{
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML =  `<article id="${juego.id}" class="card container-fluid" style="width: 28rem;">
                                    <img src="${juego.imagen}" alt="${juego.titulo}>
                                    <article class="card-body">
                                        <h3 class="card-title">${juego.titulo}</h3>
                                        <p class="">Formato: ${juego.formato}</p>
                                        <p class="card-text">Año: ${juego.anio}</p>
                                        <p class="precioCard">Precio: ${juego.precio}</p>
                                        <button id="agregarBtn${juego.id}" class="btn btn-primary click">Agregar al carrito</button>
                                    </article>` 
        divProductos.appendChild(nuevoProducto)

        let btnAgregar = document.getElementById(`agregarBtn ${juego.id}`)
        console.log(btnAgregar);
        btnAgregar.addEventListener("click", () =>{agregarAlCarrito(juego)})
        })

    }

function agregarAlCarrito(juego){
    console.log(`su juego ${juego.titulo} formato ${juego.formato} ha sido agregado. N° id: ${juego.id}`)
    productosEnCarrito.push(juego)
    console.log(productosEnCarrito);
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    //▲Seteo al storage
}
function ocultarCatalogo(){
    divProductos.innerHTML =""
}

//▼Inputs  
function guardarNuevojuego(){
    let tituloInput = document.getElementById("tituloInput")
    let anioInput = document.getElementById("anioInput")    
    let precioInput = document.getElementById("precioInput")    
    let formatoInput = document.getElementById("formatoInput")
    let juegoCreado = new Juegos(conjuntoJuegos.length+1, tituloInput.value, anioInput.value, precioInput.value, formatoInput.value, "multimedios/newJuego.jpg")
    console.log(juegoCreado)
    conjuntoJuegos.push(juegoCreado)
    localStorage.setItem("conjuntoJuegos", JSON.stringify(conjuntoJuegos))
    //▲Seteo al storage conjuntoJuegos
    //▲CLAVE: "conjuntoJuegos"
}

function cargarProductosCarrito(productosDelStorage) {

    modalBody.innerHTML = " "  
    productosDelStorage.forEach((productoCarrito) => {
        
        modalBody.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
                <img class="card-img-top" src="${productoCarrito.imagen}" alt="${productoCarrito.titulo}">
                <div class="card-body">
                        <h4 class="card-title">${productoCarrito.titulo}</h4>
                        <p class="card-text">$${productoCarrito.precio}</p> 
                        <button class= "btn btn-danger" id="botonEliminar"><i class="fas fa-trash-alt"></i></button>
                </div>    
            </div>
    `
})
//▼Declaro función para calcular total ||▼Se aplica Spread ...
compraTotal(...productosDelStorage)
}

function compraTotal(...productosTotal) {
    acumulador = 0;
    acumulador = productosTotal.reduce((acumulador, productoCarrito)=>{
        return acumulador + productoCarrito.precio 
    },0)
    console.log(acumulador)

//▼Se declara if para acumulador = 0 o != ||▼Se aplica Operador Ternario ? : 
acumulador > 0 ? parrafoCompra.innerHTML = `El importe de su compra es ${acumulador}`: parrafoCompra.innerHTML = `<p>El carrito está vacío</p>`
}

//▼Session Storage | ▼Aplico DarkMode
let btnDarkMode = document.getElementById("botonDarkMode")
let btnLightMode = document.getElementById("botonLightMode")

let darkMode
console.log(localStorage.getItem("darkMode"))
if(localStorage.getItem("darkMode")){
    darkMode = localStorage.getItem("darkMode")
}else{
    console.log("entra primera vez")
    localStorage.setItem("darkMode", "light")
} 

if(darkMode == "dark"){
    document.body.classList.add("darkMode")
}

btnDarkMode.addEventListener("click", ()=>{
    document.body.classList.add("darkMode")
    localStorage.setItem("darkMode", "dark")

})
btnLightMode.addEventListener("click", ()=>{
    document.body.classList.remove("darkMode")
    localStorage.setItem("darkMode", "light")
})

let eliminarModo = document.getElementById("eliminarMode")
eliminarModo.addEventListener("click", ()=>{
    localStorage.removeItem("darkMode")
})
//▲Fin declaraciones 