//Simulador de un Calculador para una importación 
//►Vamos a sacar el Valor en Aduana de un producto a importar y vamos a sacar la base del IVA
//►Sobre el Valor en Aduana se saca el derecho y la tasa estadística, esto se suma aL Valor en Aduana y se convierte en la base del IVA
//►Sobre la base del IVA se calculan los impuestos: IVA, IVA Adicional, Ganancias e Ingresos Brutos.
//►Lo que finalmente se va a pagar, es derecho, tasa, Iva, Iva Ad, Ganancias e IIBB.
//►Consideramos una de las opciones más generales, es decir para un bien a comercializar y sin negociación.
//►Se indicará cuál es el derecho y tasa estadística que debe pagar (a modo estimativo ya que hay más casos) en el cálculo intermedio/parcial
//►Para ello vamos a preguntar el nombre al usuario
//►Vamos a pedir valor FOB, flete, seguro, ajuste a deducir
//►Tomaremos como parámetro general un 14% para el derecho, 3% de tasa estadística
//►Se informará el total de gravámenes a pagar

//►Iniciamos simulador
//▼Almaceno el nombre del usuario 
let nombreUsuario = prompt('Por favor ingrese su nombre.').toLowerCase();
//▼Imprimo en consola el nombre para quién vamos a mostrar su calculador  
console.log (`Detalle gravámenes para: ${nombreUsuario}`);
//▼Declaro las funciones para iniciar 

//▼Pido valor de fob, flete, seguro y ajuste a deducir 
function pedirFob (){
    let valorFob = parseFloat(prompt("ingrese su valor Fob de Factura en USD"));
    return valorFob
}

function pedirFlete (){
    let valorFlete = parseFloat(prompt("ingrese el valor total del flete en USD"));
    return valorFlete
}

function pedirSeguro (){
    let valorSeguro = parseFloat(prompt("ingrese el valor del seguro en USD"));
    return valorSeguro
}

function pedirAjuste (){
    let valorAjuste = parseFloat(prompt("ingrese el ajuste a deducir, desde frontera a destino en USD (puedes verlo en tu documento de transporte CRT)"));
    return valorAjuste
}

function valorAduana (fob, flete, seguro, ajuste){
    let resultado = fob + flete + seguro - ajuste
    return resultado
}
//▼guardo los valores pedidos en variables 
let Fob = pedirFob()
let Flete = pedirFlete()
let Seguro = pedirSeguro()
let Ajuste = pedirAjuste()
//▼imprimo los valores ingresados
console.log (`El valor Fob ingresado es USD ${Fob.toFixed(2)}`)
console.log (`El valor del Flete ingresado es USD ${Flete.toFixed(2)}`)
console.log (`El valor Seguro ingresado es USD ${Seguro.toFixed(2)}`)
console.log (`El valor a deducir ingresado es USD ${Ajuste.toFixed(2)}`)

//▼llamamos a la última función para pasarle los valores ingresados 
let total = valorAduana (Fob, Flete, Seguro, Ajuste)
//▼imprimimos función
console.log (valorAduana)
//▼imprimimos primer resultado
console.log (`Excelente! Su valor en Aduana es USD ${total.toFixed(2)}`)
//▼declaramos la función parcial para el cálculo del derecho (la tomaremos para el cálculo de los demás porcentajes modificando sus valores)
function derecho(valorAduana1, derechos){
    let parcialDerecho = (valorAduana1*derechos)/100;
    return parcialDerecho;
}
//▼guardamos en una variable el valor obtenido para el 14% del derecho
let derechoImp = derecho(total, 14)
console.log(`El importe del derecho de importación a pagar es USD ${derechoImp.toFixed(2)}`)

//▼guardamos en una variable el valor obtenido para el 3% de la tasa estadística
let estadisticaImp = derecho(total, 3)
console.log(`El importe de la tasa estadística a pagar es USD ${estadisticaImp.toFixed(2)}`)

//▼ declaramos la función flecha para realizar la suma de los gravámenes
const sumaBase = (derechoBase, estadisticaBase) => derechoBase + estadisticaBase
let valorSuma =  sumaBase(derechoImp, estadisticaImp)
console.log (valorSuma.toFixed(2))
//▼ declaramos la función flecha para realizar la suma de los gravámenes más el valor en Aduana
const valorBase = (valorEnAduana, gravamenDerecho) => valorEnAduana + gravamenDerecho
let baseDeIva = valorBase(valorSuma, total) 
console.log (`Esta es tu BASE DEL IVA: USD ${baseDeIva.toFixed(2)} , el cual tomarás para los demás impuestos`)

//▼ sacamos los impuestos a pagar llamando la función base incicial "derecho" con la misma fórmula para reutilizarla

let iva = derecho(baseDeIva, 21);
console.log(`El importe del IVA a pagar es USD ${iva.toFixed(2)}`);

let ivaAdicional = derecho(baseDeIva, 20);
console.log(`El importe del IVA Adicional a pagar es USD ${ivaAdicional.toFixed(2)}`);

let ganancia = derecho(baseDeIva, 6);
console.log(`El importe de Ganancias a pagar es USD ${ganancia.toFixed(2)}`);

let iibb = derecho(baseDeIva, 2.5);
console.log(`El importe de Ingresos Brutos a pagar es USD ${iibb.toFixed(2)}`);

//▼Sumamos los derechos y los impuestos, que serán los gavámenes a pagar en una función flecha
const totalImpuestos = (derechoTotal, estadisticaTotal, ivaTotal, ivaAdicionalTotal, gananciaTotal, iibbTotal, arancelSim) => derechoTotal + estadisticaTotal + ivaTotal + ivaAdicionalTotal + gananciaTotal + iibbTotal + arancelSim
let finalAPagar = totalImpuestos (derechoImp, estadisticaImp, iva, ivaAdicional, ganancia, iibb, 10) 
console.log (`El TOTAL de gravámenes a pagar para nacionalizar en USD es: ${finalAPagar.toFixed(2)} (recuerda que este valor incluye el ARANCEL SIM de 10 usd)`)