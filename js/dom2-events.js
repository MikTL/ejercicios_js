function holaMundo() {
  alert("Hola mundo")
  console.log(event);
}
console.groupCollapsed("evento Semántico")
//evento semántico
const $eventoSemantico = document.getElementById("evento-semantico")

//$eventoSemantico.onclick=holaMundo => tambien se puede hacer asi
$eventoSemantico.onclick = (e) => { // funciona con el onclick
  alert("con el evento semántico solo puede haber un evento.")
  console.log(e);
}
console.groupEnd()
// evento multiple

console.groupCollapsed("evento Multiple")
const $eventoMultiple = document.getElementById("evento-multiple")

$eventoMultiple.addEventListener("click", holaMundo)
$eventoMultiple.addEventListener("click", function (e) {
  alert("segundo evento")
  console.log(e.type);
  console.log(e.target);
  console.log(e)
  console.log(event);
})
console.groupEnd()

//Eventos con párametros

/* Al usar una función para ser llamada en un evento, el único parámetro que puede tener es la del evento en si,
entonces hacemos el siguiente truco para usar una funcion que si o si, necesite parámetros */

function saludar(nombre = "Desconocido") {
  alert(`hola ${nombre}`)
  console.log(event)
}
const $eventoParams = document.getElementById("evento-params")

$eventoParams.addEventListener("click", () => { saludar() }) //llamamos a la función, dentro de la funcion principal

//remover eventos
const $removerEventos = document.getElementById("event-remove")
/* para remover un evento, la funcion tiene que estar guardada previamente, no funcionara, una funcion anónima ni con una arrow function */
const removerDobleClick = (e) => {
  alert(`removiendo el evento de tipo ${e.type}`)
  console.log(e);
  $removerEventos.removeEventListener("dblclick", removerDobleClick) //esta es el método para remover
}
$removerEventos.addEventListener("dblclick", removerDobleClick)

/* Flujo del Dom (burbuja(por defecto) Captura) */
function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className} el evento se originó en ${e.target.className}`);
  e.stopPropagation() // esto detiene la propagación
}
const $divEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a")

$divEventos.forEach(div => {
  div.addEventListener("click", flujoEventos) // el tercer parametro por defecto es false
  //div.addEventListener("click",flujoEventos,true) // con true cambiamos el flujo a captura( de afuera hacia adentro)

  /* true o false no son el tercer parametro que podemos poner, tambien es posible poner un objeto */

  /* div.addEventListener("click", flujoEventos,{
      capture: true, // si es false el flujo es Burbuja
      once: true // el evento solo puede ejecutarse una vez, en false, todas la veces que se llame al evento.
  }) */
})

/* ***** Parar la Propación de los evento y prevenir las acciones por defecto de un elemento HTML ****** */
// se para la propagacion con el metodo "event.stopPropagation()"
$linkEventos.addEventListener("click", (e) => {
  alert("Hola esto es youtube")
  e.preventDefault() //esto evita el funcionamiento por defecto del elemento al que llamo el evento, en este caso, el funcionamiento correcto de un enlace es llevarte a otra pagina, pero con este método evitamos eso.
  e.stopPropagation() // para que no se propage al div padre. 
}) 