function contadorDeCaracteres(text) {
  let valor = text
  if (typeof valor === "string") {
    console.log(`La cantidad de caracteres que hay en el texto es: ${valor.length}`)
  } else {
    console.log("Ingrese solo cadenas de texto")
  }
}
function textoRecortado(texto, cantidadTexto) {
  const arraySalida = []
  let stringSalida
  let valor = texto
  if (typeof valor === "string") {
    if (cantidadTexto < valor.length && cantidadTexto > 0) {
      for (let i = 0; i < cantidadTexto; i++) {
          arraySalida.push(valor[i])
      }
      stringSalida = arraySalida.toString()
      stringSalida = stringSalida.replace(/,/g, '')
      console.log(stringSalida)
    } else if (cantidadTexto < 1) {
      console.log("Debe introducir una cantidad mayor a 1")
    } else {
      console.log("Debe introducir una cantidad menor")
    }
  } else {
      console.log("Ingrese solo cadenas de texto")
  }
}
function stringToArray(texto) {
  let valor = texto
  let arrayFinal = []
  if (typeof valor === "string") {
    arrayFinal = valor.split(' ')
    console.log(arrayFinal)
  } else {
    console.log("Ingrese solo cadenas de texto")
  }
}
function repeatText(text, cantidad) {
  let salida = ""
  if (typeof text === "string" && typeof cantidad === "number") {
    for (let i = 0; i < cantidad; i++) {
      salida = `${salida + text} - `
    }
    console.log(salida)
  } else {
    console.log("Ingrese solo cadenas de texto y numero para la cantidad")
  }
}

let invertirString = (texto = "") => {
  /* let stringResultado = ""
  for (let i = texto.length - 1; i >= 0; i--) {
    stringResultado = `${stringResultado + texto[i]}`
  }
  console.log(stringResultado) */
  (!texto)
  ? console.warn("Ingresa Texto")
  : console.info(texto.split("").reverse().join("")) //split convierte a array, reverse lo invierte, y join vuelve a string
}
function invertirCadena(cad) {
  if (cad === "")
    return "";
  else
    return invertirCadena(cad.substr(1)) + cad.charAt(0);
}
//invertirCadena("hola");

/* let contarPalabras = (texto="")=>{
  let copia=texto
  copia=copia.replace(/,/g , '')
  console.log(copia)
  copia=copia.split(" ").sort()
  console.log(copia)
  let copiaDeCopia=[...copia]

  let resultado=[]
  for(let i=0;i<copia.length;i++){
    if(copia[i]===copiaDeCopia[i+1]){
      resultado.push(copia[i])
    }
  }
  console.log(resultado.length+1)
} */
let contarPalabras = (texto = "", palabra = "") => {
  /* let copia = texto
  copia = copia.replace(/,/g, '')
  copia = copia.split(" ").sort()
  console.log(copia)
  let resultado = []
  for (let i = 0; i < copia.length; i++) {
    if (copia[i] === palabra) {
      resultado.push(copia[i])
    }
  }
  console.log(resultado.length) */
  if (!texto) return console.warn("No ingresaste el texto largo")
  if (!palabra) return console.warn("No ingresaste la palabra a evaluar")
  let i = 0, contador = 0
  while (i !== -1) {
      i = texto.indexOf(palabra, i)
      if (i !== -1) {
          i++
          contador++
      }
  }
  return console.info(`Las veces que se repiten son ${contador}`)
}
let palindromos = (text = "") => {
  /* let frase = text.replace(/\s/g, '').toLowerCase()
  let fraseInvertida = ""
  for (let i = frase.length - 1; i >= 0; i--) {
      fraseInvertida += frase[i]
  }
  (frase === fraseInvertida) ? console.log(true) : console.log(false); */
  if (!text) return console.warn("No ingresaste la frase o la cadena de texto")
  let palabra = text.toLowerCase()
  let reves = palabra.split("").reverse().join("")
  return (palabra === reves)
    ? console.info(`Sí la palabra es palíndroma`)
    : console.info(`La palabra no es palíndroma`)

}
let eliminarPatron = (text = "", patron = "") => {
  let pattern = new RegExp(patron, 'g')
  console.log(pattern);
  let output = text.replace(pattern, "")
  console.log(output)
}
let numerosAleatorios = () => {
  let max = 600, min = 501
  return console.info(Math.floor(Math.random() * (max - min + 1) + min))
}

let numerosCapicua = (num = 0) => {
  if (!num) return console.warn(`Ingrese un numero`)
  if (typeof num !== "number") console.warn(`El valor ingresado no es un numero`);
  let resultado = parseFloat(num.toString().split("").reverse().join(""))

  return (num === resultado) ? console.info(`Es un numero capicúa`) : console.info(`No es un numero capicúa`);

}
let factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("Tiene que ingresar un numero")
  if (typeof numero !== "number") return console.error("El dato ingresado no es un numero")
  if (numero === 0) return console.warn("El numero 0 no es válido")
  if (Math.sign(numero) === -1) console.warn("El numero 0 no es válido")
  let number = numero
  let resultado = 1
  for (let i = 1; i <= number; i++) {
    resultado *= i
  }
  console.log(resultado);
}
let numPrimos = (numero = undefined) => {
  /* let resultado=[]
  for(let i=1;i <=num;i++){
    if(num%i===0){
      resultado.push(i)
    }
  }
  (resultado.length===2)? console.info("El numero es primo"): console.info("El numero no es primo") */
  if (numero === undefined) return console.warn("Tiene que ingresar un numero")
  if (typeof numero !== "number") return console.error("El dato ingresado no es un numero")
  if (numero === 0) return console.warn("El numero 0 no es válido")
  if (numero === 1) return console.warn("El numero 1 no es válido")
  if (Math.sign(numero) === -1) console.warn("No se aceptan valores negativos")
  let divisible = false
  for (let i = 2; i < numero; i++) { //No incluimos el uno ni el mismo numero para romper el bucle en el primer resultado que de 0 en el modulo
    if (numero % 2 === 0) {
      divisible = true
      break
    }
  }
  (divisible) ? console.log("El numero no es primo") : console.log("El numero es primo")
}
let conversorTemperatura = (grados = undefined, unidad = undefined) => {
  /* let resultado
  let tipo= parseFloat(prompt("presione 1 si quieres convertir de Celsius a Fahrenheit y 2 si quieres hacer lo contrario: "))
  if(tipo===NaN) return console.warn("Debe ingresar los numeros 1 o 2")
  if(typeof tipo!=="number") return console.warn("El dato ingresado no es un número")
  if(tipo<1 && tipo > 2) return console.warn("Yo no mencione esa opcion solo se acepta 1 y 2")

  if(tipo===1){
    resultado=`${(grados*9/5)+32} °F`
  }
  if(tipo===2){
    resultado=`${(grados-32)*5/9} °C`
  }
  console.info(resultado) */
  if (grados === undefined) return console.warn("No ingresaste datos a convertir")
  if (typeof grados !== "number") return console.error(`El valor ${grados} no es un número`)
  if (unidad === undefined) return console.warn(`No ingresaste el tipo de grado a convertir`)
  if (typeof unidad !== "string") return console.error(`El valor ${grados} no es un número`)
  if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido")

  if (unidad === "C") {
      return console.log(`${(grados * 9 / 5) + 32} °F`)
  }
  if (unidad === "F")
      return console.log(`${(grados - 32) * 5 / 9} °C`)
}
let binaryToDecimal = (num = undefined, validador = undefined) => {
  if (num === undefined) return console.warn("Debes ingresar un número")
  if (typeof num !== "number") return console.error("El dato no es un numero")
  if (Math.sign(num) === -1) return console.error("No se aceptan valores negativos")
  if (validador === undefined) return console.warn(`Debes ingresar "B" o "D"`)
  if (typeof validador !== "string") return console.error(`Solo se acepta la letra "B y "D"`)
  const tablaPotencia = [128, 64, 32, 16, 8, 4, 2, 1]
  let numero = num.toString()
  let resultado = []
  let positionTabla = 7
  let respuesta = 0
  if (validador === "B") {
    //validamos si el numero tiene numeros diferentes de 0 y 1, tambien si tienen una longitud mayor a 8
    for (let i = numero.length - 1; i >= 0; i--) {
      console.log(i)
      if (numero[i] !== "0") {
        resultado.push(tablaPotencia[positionTabla])
      }
      positionTabla--
    }
    for (let i of resultado) respuesta += i.
    console.log(respuesta)
  }
  if (validador === "D") {
    //validamos si el numero es mayor a 123
    for (const iterator of tablaPotencia) {
      if (num < iterator) resultado.push(0)
      if (num >= iterator) {
        resultado.push(1)
        num -= iterator
      }
    }
    console.log(parseFloat(resultado.join("")))
  }
}
let convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (base === 2) {
      return console.info(`en Decimales el numero binario ${numero} es ${parseInt(numero, base)} base 10`)
  }
  if (base === 10) {
      return console.info(`En binario el numero decimal ${numero} es ${numero.toString(base)}`)
  }
}

let aniosPasados = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("Debes ingresar una fecha")
  if (typeof fecha !== "object") return console.warn("El dato ingresado no es correcto")
  if (
      fecha.getFullYear() === new Date().getFullYear() &&
      fecha.getMonth() === new Date().getMonth()
  ) return console.warn("No ingrese la fecha actual")
  let anioActual = new Date().getFullYear()
  console.log(typeof fecha)
  let anioIngresado = fecha.getFullYear()
  console.log(`Han pasado ${anioActual - anioIngresado} años`)
}
let calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("Debes ingresar una fecha")
  if (!(fecha instanceof Date)) return console.error("El valor ingresado es incorrecto")
  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
      aniosEnMs = 1000 * 60 * 60 * 24 * 365,
      aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs)
  return (Math.sign(aniosHumanos) === -1)
      ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para llegar al año ${fecha.getFullYear()}`)
      : (Math.sign(aniosHumanos) === 1) ? console.info(`Han pasado ${aniosHumanos} años desde el año ${fecha.getFullYear()}`)
          : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)

}
let contadorVocalesConsonantes = (texto = undefined) => {
  if (texto === undefined) return console.warn("Debe de ingresar un texto")
  if (typeof texto !== "string") return console.error("Dato incorrecto")
  let frase = texto
  frase = frase.replace(/ /g, '')
  let cantLetras = frase.length
  frase = frase.replace(/(a|e|i|o|u)/g, '')
  console.log(`La cantidad de vocales son ${cantLetras - frase.length} y los consonantes ${frase.length}`)
}
let validadorDeNombres = (nombre = undefined) => {
  let patron = new RegExp(/^[a-zA-ZÀ-ÿ\s]{0,40}$/)
  if (nombre === undefined) return console.warn("Debes ingresar un nombre")
  if (typeof nombre !== "string") return console.error("Dato incorrecto");

  (patron.test(nombre)) ? console.info("Es un nombre Válido") : console.info("Nombre invalido")
}
let validadorDeCorreos = (correo = undefined) => {
  let patron = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
  // /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
  console.log(patron.test(correo))
}
// **** Arrays
let arrayAlCuadrado=(arr=undefined)=>{
  if(arr===undefined) return console.warn("Debes ingresar un arreglo")
  if(!(arr instanceof Array)) return console.error("El dato ingresado no es un arreglo")
  for (const iterator of arr) {
      if(typeof iterator!=="number") return console.error(`El dato ${iterator} no es un string`)
  }
  /* let arregloResultado=[]
  for (const iterator of arreglo){
      arregloResultado.push(Math.pow(iterator,2))
  } */
  const newArray=arr.map(el=>el*el)
  console.log(`El nuevo array es ${newArray} el anterior ${arr}`)
}
let ordenarArray= arr=>{
  if(arr===undefined) return console.warn("Debes ingresar un arreglo")
  if(!(arr instanceof Array)) return console.error("El dato ingresado no es un arreglo")
  for (const iterator of arr) {
      if(typeof iterator!=="number") return console.error(`El dato ${iterator} no es un string`)
  }
  /* 
  for(let i=0;i<arr.length;i++){
    for(let j=0 ;j<arr.length;j++){
      if(arr[j]>arr[j+1]){
        let aux=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=aux
      }
    }
  }
  let elementoMayor= arr[arr.length-1]
  let elementoMenor= arr[0]
  console.log(arr);
  console.log(`El elemento mayor del array es ${elementoMayor} y el menor es ${elementoMenor}`); */
  return console.log(`El numero mayor es ${Math.max(...arr)} y el menor ${Math.min(...arr)}`)
}
let arrImparPar = (arr)=>{
  if(arr===undefined) return console.warn("Debes ingresar un arreglo")
  if(!(arr instanceof Array)) return console.error("El dato ingresado no es un arreglo")
  for (const iterator of arr) {
    if(typeof iterator!=="number") return console.error(`El dato ${iterator} no es un string`)
  }
  /* const objetoNumero={
    arrayPares:[],
    arrayImpares:[]
  }
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
      objetoNumero.arrayPares.push(arr[i])
    }else{
      objetoNumero.arrayImpares.push(arr[i])
    }
  }
  console.log(objetoNumero) */
  console.log({
    pares: arr.filter(numero=>numero%2 ===0),
    inpares: arr.filter(numero=>numero%2 ===1)
  })
}
let ascendenteYdescendente=(arr)=>{
  console.log({
    ascendente: [...arr.sort(function(a,b) {return a-b})],
    descendente:[...arr.sort(function(a,b) {return a-b}).reverse()]
  })
}
let borrarDuplicados= (arr)=>{
  // Hacemos las validadiones para los arrays
  // agregamos  una validacion para que no manden arrays vacios o con un solo elemento
  let salida= arr.filter((value,index,self)=>self.indexOf(value)===index)
    //el filter almacena el valor (value) en la variable salida solo si lo que retorna la funcion es true.

    // indexof retorna el primer indice (si es que el elemento se repite, si no solo 
    // retorna el indice del elemento) de un elemento del array.
    // si el valor no se repite, entonces al comparar el indice que retorna el indexof 
    // con el indice(index) del array esto nos dara un "true", entonces dicho elemento 
    // será almacenado en la variable salida, si  hay dos valores iguales en un array, entonces
    // el indexof arrojara la posicion del primer elemento repetido, entonces en la iteración  al comparar con el 
    // el indice del otro elemento nos dará un "false", entonces este elemento no se almacenará 
    // en la varible salida, por lo que en dicha variable solo puede haber elementos unicos.
  return console.log(salida)
  // La otra solucion seria con el Set. que tiene la caracteristica de tener elemementos unicos.
  // let sinDuplicados=[...new Set(arr)];

}
let promedio =(arr)=>{
  if(arr===undefined) return console.warn("Debes ingresar un arreglo")
  if(!(arr instanceof Array)) return console.error("El dato ingresado no es un arreglo")
  for (const iterator of arr) {
      if(typeof iterator!=="number") return console.error(`El dato ${iterator} no es un string`)
  }
  /* let promedioArr=0
  for(let i=0;i<arr.length;i++){
      promedioArr=(promedioArr+arr[i])
  }
  console.log(parseFloat((promedioArr/arr.length).toFixed(3))) */
  return console.info(
    arr.reduce((total,num,index,arr)=>{
      // total acumulará en cada iteracion la cantidad que tiene sumado el valor del array es 
      //este iteración.
      total+=num
      if(index===arr.length-1){
          return `El promedio de ${arr.join("+")} es ${total/arr.length}`
      }
      return total
    })
  )
}

class Pelicula{
  constructor(idPeli,titulo,director,anioEstreno,paises,genero,calificacion){
    this.id=idPeli
    this.titulo=titulo
    this.director=director
    this.anioEstreno=anioEstreno
    this.paises=paises
    this.genero=genero
    this.calificacion=calificacion
  }
  static generosAceptados(){
    return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
  }
  fichaTecnica(){
    return {
      idPelicula:this.id,
      Titulo:this.titulo,
      Director:this.director,
      Estreno:this.anioEstreno,
      Paises:this.paises,
      Genero:this.genero,
      Calificacion:this.calificacion
    }
  }
}
let avatar=new Pelicula(5221,"Avatar","James Cameron",2009,["Estados Unidos"],["Acción","Aventura","Fantasia"],7.8)
console.log(avatar) 
// titulo,director,anioEstreno,paises, genero, calificacion
let validador =(id)=>{
  if(id===undefined) return console.warn("El id es obligatorio")
  if(typeof id!=="string") return console.error("Dato erroneo, asi no es un id")
  if(id.length!==9) return console.error("Un id valido tiene 9 caracteres")
  let pal=id.split("")
  pal.forEach((self,index)=>{
    if(index>1) {
      // si el caracter string es un numero, lo convierte a tipo de dato number
      if(/^[0-9]$/.test(self)){
        self=parseFloat(self)
        pal[index]=self
      }
    }
  })
  if(pal[0]!=="t"|| pal[1]!=="t") return console.error("Los dos primeros caracteres deben ser letras 't'")
  for(let i=2;i<pal.length;i++){
      if(typeof pal[i]!=="number") return console.error("Despues de los dos primeros caracteres solo se aceptan numeros")
  }
  console.log(pal)
}
let valiladadorTitulo= (titulo)=>{
  console.info(titulo.length)
  if(!(/^[a-zA-ZÀ-ÿ\s]{0,100}$/.test(titulo))) return console.error("Solo se admiten 100 caracteres")
}

const generosPelicula=["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
let validadorGenero=(arr)=>{
  if(arr===undefined) return console.warn("Debes ingresar un arreglo")
  if(!(arr instanceof Array)) return console.error("El dato ingresado no es un arreglo")
  for (const iterator of arr) {
    if(typeof iterator!=="string") return console.error(`El dato ${iterator} no es un string`)
  }
  /* let valGen=generosPelicula.filter((value,i,self)=>{
    let indiceArrUser =arr.indexOf(value)
    if(arr.indexOf(value)!==-1){
      console.log(`El género ${arr[indiceArrUser]} es correcto`)
    }
    if(indiceArrUser===-1){
      console.log(`El género '${arr[indiceArrUser]}' no es un género aceptado`)
    }
  }) */
  let valGen=arr.filter((value,i,self)=>{
    if(generosPelicula.indexOf(value)===-1){
      return console.error(`El género '${self[i]}' no es un género aceptado, ese array no puede pasar`)
    }
    return (generosPelicula.indexOf(value))!==-1
  })
  if(valGen.length!==arr.length) return []
  if(valGen.length===arr.length) return valGen
}
let validadorPuntuacion=(num)=>{
  if(num===10) return num
  if(/^[0-9]{1}.[1-9]{1}$/.test(num)|| /^[0-9]{1}$/.test(num)) return num
}