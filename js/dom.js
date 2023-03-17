console.groupCollapsed("Elementos del DOM")
console.log(`******Elementos del Documento*****`)
console.log(window.document)
console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.doctype)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)
console.log(document.scripts)
setTimeout(() => {
  console.log(document.getSelection().toString())
}, 4000) // para mostrar lo que esta seleccionado, recarga la pagina y selecciona un texto en menos de 4s
document.write(`<h2>Hola desde el JS</h2`) //
console.groupEnd()

console.groupCollapsed("Métodos para capturar elementos de HTMl")
console.log(document.getElementsByTagName("li")) //todos los li del html (HTML collection)
console.log(document.getElementsByClassName("card")) //todos elemento con dicha clase del html (HTML collection)
console.log(document.getElementsByName("nombre")) //todo elemento con dicho valor en el atributo name  (NodeList)
console.log(document.getElementById("menu")) //elemento con dicho id  (codigo HTML)
console.log(document.querySelector("#menu")) //elemento con dicho id, se pone "#" si es id  (codigo HTML)
console.log(document.querySelector("a")) //primer elemento a del html  (codigo HTML)
console.log(document.querySelectorAll("a")) //Todos los elementos a del html  (NodeList)
console.log(document.querySelectorAll("a").length) //Cantidad de elementos en el Node List
document.querySelectorAll("a").forEach((el) => console.log(el)) //recorriendo el node list y mostrando el codigo HTML en consola
console.log(document.querySelectorAll(".card")[2]) // el elemento 3 del node list (codigo HTML)
console.log(document.querySelector("#menu li")) // primer elemento li dentro de #menu (codigo HTML)
console.log(document.querySelectorAll("#menu li")) // todos los  elementos li dentro de #menu (NodeList)
console.groupEnd()

console.groupCollapsed("Atributos y Data-Attributes")
console.log(document.querySelector(".link-dom").href) // tomara toda la dirección de la web (incluyendo el live server)
console.log(document.querySelector(".link-dom").getAttribute("href")) // este nos mostrará solo lo que esta escrito en el href

/* Cambiar el lenguaje para el contenido de la web */
document.documentElement.lang = "en"
console.log(document.documentElement.lang) //Ahora sea ingles, aunque en el código esté es
document.documentElement.setAttribute("lang", "es") // otra manera de cambiar
console.log(document.documentElement.lang)

/* guardar elemento del dom en una const */
const $linkDOM = document.querySelector(".link-dom")
//ahora agregamos un atributo al elemento con la clase .link-dom
$linkDOM.setAttribute("target", "_blank") // Asi podemos agregar cualquier atributo con su valor
$linkDOM.setAttribute("rel", "noopene r")
$linkDOM.removeAttribute("rel") //Ahora para remover un atributo
$linkDOM.hasAttribute("rel") //devolverá false porque eliminamos el atributo

console.log($linkDOM.getAttribute("data-description"))
console.log($linkDOM.dataset) //data set guarda los data-attributes es un dato de tipo map (DOMStringMap)
console.log($linkDOM.dataset.description) //accedemos al valor de data-description del elemento en HTML
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento") //cambiar el valor de un data-attribute
$linkDOM.dataset.description = "Aprendi a cambiar valor de un data-attribute"
console.log($linkDOM.dataset)
console.groupEnd()
console.groupCollapsed("Estilo y variables css")
console.log($linkDOM.style) // un objeto con todas las propiedades css disponibles y su valor, si es que no tiene es: ""
console.log($linkDOM.getAttribute("style")) //nos trae todos los estilos que tiene declarado el elemento.
console.log(getComputedStyle($linkDOM)) //nos trae todos los estilos que tiene declarado el elemento, tambien mas abajo estan las propiedades con su valor, si es que no lo especificaste, estan los valores por defecto
console.log($linkDOM.style.backgroundColor) // accedemos al valor de background-color, del elemento.
console.log($linkDOM.style.color)
console.log(window.getComputedStyle($linkDOM))

$linkDOM.style.setProperty("text-decoration", "none") // una forma de dar estilos desde javaScript
$linkDOM.style.display = "block" //otra forma de dar estilos desde JavaScript
$linkDOM.style.width = "50%"
$linkDOM.style.textAlign = "center"
$linkDOM.style.marginLeft = "auto"
$linkDOM.style.marginRight = "auto"
$linkDOM.style.padding = "1rem"
$linkDOM.style.borderRadius = "0.5rem"

/* ****** Variables CSS -- Custom Properties CSS ****** */
const $html = document.documentElement,
  $body = document.body

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color") //obtenemos el valor de la variable --dark-color del  html.
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")
console.log(varDarkColor, varYellowColor)
$body.style.backgroundColor = varDarkColor //estamos poniendo un bg-color al body
$body.style.color = varYellowColor

$html.style.setProperty("--dark-color", "#000") // añadimos una variable al html
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color") //actualizamos la variable, con el valor de la variable css
$body.style.backgroundColor = varDarkColor // el color de fondo se modificó
console.groupEnd()

console.groupCollapsed("Clases CSS")
const $card = document.querySelector(".card")
console.log($card.className) //nos da los nombres de las clases del elemento
console.log($card.classList) //nos da un DOMtokenList con clases del elemento
console.log($card.classList.contains("rotate-45")) //true o false dependiendo de que si existe esa clase o no (false)
$card.classList.add("rotate-45") //Añadir una clase al elemento
console.log($card.classList.contains("rotate-45")) //(true)
$card.classList.remove("rotate-45") //eliminar dicha clase del elemento
$card.classList.toggle("rotate-45") //Si ya tiene la clase la quita, si no lo tiene lo agrega
$card.classList.replace("rotate-45", "rotate-135") //reemplaza la clase con el segundo parametro
$card.classList.add("sepia")
console.log($card.classList)
console.groupEnd()

console.groupCollapsed("Texto y HTML")
const $whatIsDOM = document.getElementById("que-es")

let text = `
    <p>
        El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un
        API para documentos HTML y XML.
    </p>
    <p>
        Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>`

$whatIsDOM.innerText = text //  respeta la identación y saltos de linea, no reconoce las etiquetas html, por lo que lo imprime.
$whatIsDOM.textContent = text // no respeta la identación y saltos de line, y tampoco reconoce las etiquetas, por lo que lo imprime en el DOM
$whatIsDOM.innerHTML = text // Reconoce las etiquetas e pone el codigo html dentro del elemento.
$whatIsDOM.outerHTML = text // escribe el codigo html, pero no dentro del elemento, si no lo reemplaza.
console.groupEnd()
console.groupCollapsed("Traversing: Recorriendo el DOM")
const $cards = document.querySelector(".cards")
console.log($cards) // todo el codigo html de cards
console.log($cards.children) //(HTMLCollection) con todos los hijos dentro de cards
console.log($cards.children[2]) //Codigo HTML del tercer Hijo
console.log($cards.parentElement) // codigo html del padre.
console.log($cards.firstChild) // si es que tabulaciones despues de la etiqueta padre, ese será el primer hijo.(#text)
console.log($cards.firstElementChild) // código HTML del primer elemento hijo.
console.log($cards.lastElementChild) //   codigo html del ultimo
console.log($cards.previousSibling) // caracteres antes de la etiqueta con clase cards (#text)
console.log($cards.previousElementSibling) //código HTML del hermano anterior a la etiqueta con la clase cards
console.log($cards.nextElementSibling) //código HTML del hermano siguiente a la etiqueta con la clase cards
console.log($cards.closest("body")) //Para verificar el ancestro, en eeste caso solo es el body. (codigo HMTL)
console.log($cards.children[2].closest("section")) // Devuelve el mismo elemento de la clase .cards
console.groupEnd()
console.groupCollapsed("Creando Elementos y fragmento")
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figCaption = document.createElement("figcaption"),
  $figCaptionText = document.createTextNode("Animals"),
  $figure2 = document.createElement("figure")

$img.src = "https://placeimg.com/200/200/animals"
$img.alt = "Animals"
$figure.appendChild($img)
$figCaption.appendChild($figCaptionText)
$figure.appendChild($figCaption)
$figure.classList.add("card")
$cards.appendChild($figure)

//Otra manera
$figure2.innerHTML = `
        <img src="https://placeimg.com/200/200/people" alt="People">
        <figcaption>People</figcaption>
        `
$figure2.classList.add("card")
$cards.appendChild($figure2)

/* li de manera dinámica  */
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul")

document.write(" <br><h3>Estaciones del Año</h3>")
document.body.appendChild($ul)

estaciones.forEach((el) => {
  const $li = document.createElement("li")
  ;($li.textContent = el), $ul.appendChild($li)
})
// otra manera
const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul")
document.write("<h3>Continentes del Mundo</h3>")
document.body.appendChild($ul2)
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`))

/* **** Fragmentos ****** */
//Método más optimo para los recursos del usuario
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment()

meses.forEach((el) => {
  const $li = document.createElement("li")
  $li.textContent = el
  $fragment.appendChild($li)
})
document.write("<h3>Meses del Año</h3>")
$ul3.appendChild($fragment)
document.body.appendChild($ul3)
console.groupEnd()
console.groupCollapsed("Templates HTML")
console.log(
  `Las etiquetas template en HTML no se renderizan en el documento, fueron creadas para tener un modelo a seguir para crear estructuras del DOM dinamicamente`
)

const $template = document.getElementById("template-card").content,
  $fragment2 = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ]
console.log($template) // (document-fragment), aqui esta el contenido de la etiqueta que tiene el id "template-card"
cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img)
  $template.querySelector("img").setAttribute("alt", el.title)
  $template.querySelector("figcaption").textContent = el.title

  let $clone = document.importNode($template, true) //el true es para copiar toda la estructura interna, con false solo copiaria la etiqueta de apertura y cierre
  $fragment2.appendChild($clone)
})
$cards.appendChild($fragment2)
console.groupEnd()
console.groupCollapsed("Modificando elementos (old Style)")
const $cloneCards = $cards.cloneNode(true) //clonamos la estructura de cards, con todo su contenido
document.body.appendChild($cloneCards) //Añadimos al body

const $newCard = document.createElement("figure")
$newCard.innerHTML = `
        <img src="https://placeimg.com/200/200/any" alt="Any">
        <figcaption>Any</figcaption>`
$newCard.classList.add("card")

/* Aparte */
$cloneCards.firstElementChild.classList.remove("rotate-135", "sepia")
/* continuamos */

$cloneCards.replaceChild($newCard, $cloneCards.children[2]) //reemplazamos el la tarjeta 3 por el newCard
$cloneCards.removeChild($cloneCards.lastElementChild) //borrar un hijo. el ultimo
$cloneCards.insertBefore($newCard, $cloneCards.firstElementChild) //Insertar antes del elemento del segundo argumento
console.groupEnd()
console.groupCollapsed("Modificiando Elementos (Cool Style)")
/*
InsertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)
posiciones:
  beforebegin (hermano Anterior)
  afterbegin (primer hijo)
  beforeend (ultimo hijo)
  afterend (hermano siguiente)
*/
$newCard.innerHTML = "" //aparte
const $contentCard = `
            <img src="https://placeimg.com/200/200/any" alt="Any">
            <figcaption></figcaption>
        `
$newCard.insertAdjacentHTML("afterbegin", $contentCard)
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any") //insertando texto en el figcaption
$cards.insertAdjacentElement("beforebegin", $newCard)

/* 
$cards.prepend($newCard) // Añande como primer hijo
$cards.append($newCard) // Añade como ultimo hijo
$cards.before($newCard) // Como hermano anterior
$cards.after($newCard)  // como hermano despues
*/

console.groupEnd()
