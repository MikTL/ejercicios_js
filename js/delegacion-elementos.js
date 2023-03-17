/* ESte es la forma mas optima de trabajar con eventos en JS */
function flujoEventos(e){
    console.log(`Hola te saluda ${this} el evento se originó en ${e.target.className}`);
}
document.addEventListener("click", (e)=>{ // al hacer esto no necesitamos detener la propagación, ya el evento esta en la raiz
    console.log("click en", e.target);
    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e)
    }
    if(e.target.matches(".eventos-flujo a")){ // matches devuelve true o false, si el e.target coincide con el elemento a.
        alert("Hola esto lleva a Youtube")
        e.preventDefault()
    }
})

/* BOM propiedades y eventos */
window.addEventListener("resize",(e)=>{
    console.clear()
    console.log(`El ancho del viewport es ${window.innerWidth}`)
    console.log(`El alto del viewport es ${window.innerHeight}`)
    console.log(`El ancho de la ventana es ${window.outerWidth}`)
    console.log(`El alto de la ventana es ${window.outerHeight}`)
    console.log(e);
})
window.addEventListener("scroll",e=>{
    console.clear()
    console.log(` ****** Evento scroll ******`)
    console.log(window.scrollX)
    console.log(window.scrollY)
    console.log(e);
})
window.addEventListener("load",e=>{
    console.log(` ****** Evento Load ******`)
    console.log(window.screenX)
    console.log(window.screenY)
    console.log(e);
})
document.addEventListener("DOMContentLoaded",e=>{  //es mas rapido porque espera a que se parseen y carguen todos los elementos del documento
    console.log(` ****** Evento DOM content Load ******`)
    console.log(window.screenX)
    console.log(window.screenY)
    console.log(e);
})

/* Métodos del BOM */
// ya vimos el Alert, Confirm y Prompt
let ventana
const $btnAbrir=document.getElementById("abrir-ventana"),
    $btnCerrar=document.getElementById("cerrar-ventana"),
    $btnPrint=document.getElementById("imprimir-ventana")


$btnAbrir.addEventListener("click",()=>{
    ventana=window.open("https://youtube.com")
})
$btnCerrar.addEventListener("click",()=>{
    ventana.close()
})
$btnPrint.addEventListener("click",()=>{
    window.print()
})

/* Objetos del BOM */

// Location

console.groupCollapsed("OBJETO URL location")
console.log(location) // aquí estan sus demas propiedades
console.log(location.origin)
console.groupEnd()

// history
// es el historial de la ventana actual ventana es la que hace posible que regresemos atras y vayamos hacia adelante, 
console.groupCollapsed("OBJETO HISTORIAL history")
console.log(history);
console.log(history.length);

//métodos

//history.back() // ir una pagina hace atras
//history.forward() // ir una pagina hace adelante
//history.go(n) // ir n paginas hacia adelante o atras dependiendo del parámetro 
console.groupEnd()

// Navigator
console.groupCollapsed("OBJETO NAVEGADOR navigator")
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.userAgent);
console.log(navigator.usb);
console.groupEnd()