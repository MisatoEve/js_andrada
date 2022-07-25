//PRIMER DESAFÍO
// ▼ PRIMER MENSAJE + PROMP
let value = true
do {
    let usuario = prompt('¡Hola! Para continuar, por favor indícanos tu nombre')
    if(isNaN(usuario) && usuario == null && usuario == ""){
        alert('Ingresa un nombre valido, solo puede contener letras')
    } else{
        value = false
        alert(`Hola ${usuario}! en este desafio podrás saber qué años son bisiestos! Vamos!!`);
    }
// ▼ SE PIDE EL NUMERO Y SE GUARDA EN UNA VARIABLE    
    let anio = prompt(`Por favor, ingresa un año`);
// ▼ CONDICION Y BUCLE PARA RESOLVER EL PROBLEMA    
    if(Number(anio)== anio){
      if(anio%4!=0){
        alert(`${anio} no es un año bisiesto`);
      }else if(anio%100!=0 || anio%400==0){
          alert(`¡Genial ${usuario}! ${anio} Es un año bisiesto!`);
        }
      else {
          alert(`Lo sentimos! No es un año bisiesto...`);
      }
    }else {
      if(anio != undefined){
        alert(`¡Error! Introduce un valor en números que sea un año, por ejemplo "2020"`);
      }
    }
  }while(anio = false)
