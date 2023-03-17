console.groupCollapsed("Symbols")
let id= Symbol("id")
let id2= Symbol("id2") // lo que esta dentro de las parentesis solo es como una descripcion
// aunque el id y id2 no tuvieran descripcion darian false en el siguiente console.log
console.log(id===id2);// output: false
console.log(id, id2);

const NOMBRE=Symbol("nombre")
const persona={
    [NOMBRE]:"Jon"
}

const SALUDAR=Symbol("saludar")

console.log(persona);
// Puedo crear una llave con el "mismo nombre" y no pasa nada
persona.NOMBRE="Jhonatan Mircha"
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]); //Para acceder a la propiedad symbol, solo funcionan los corchetes
//Asignamos una funcion al Symbol Saludar
persona[SALUDAR]=function(){
    console.log(`Hola`);
}
//Llamamos al método con parentesis
persona[SALUDAR]()
console.info(`\n debajo estamos mostrando las propiedades del objeto persona con un for in`)
for (const propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}
console.info("Como se puede notar no nos muestra las propiedades Symbol que tenemos, es por eso que son privadas")
//con esto listamos los simbolos del objeto
console.log(Object.getOwnPropertySymbols(persona));
console.groupEnd()

/* ******* Dato SET ******** */
console.groupCollapsed("Set")
//Este tipo funciona como un array, pero solo puede contener valores unicos
const set= new Set([1,2,{},5,6,{},6,7,8,true, false, true])
console.log(set); //veras que no hay datos repetidos, los objetos son diferentes siempre 
//Agregar valores a un set
const set2=new Set()
set2.add(1)
set2.add(2)
set2.add(true)
set2.add(false)
set2.add(true)
set2.add([1,2])
console.log(set2);
console.log(set2.size); //similar al length de los arrays
//recorrer set 2
console.log(`\n Recorrer el set2 con forEach`);

set2.forEach(item=> console.log(item))
//Para ingresar a un indice especifico, convertimos el set en un array
let arrSet= Array.from(set2)
console.log(`Esto es el indice 3 del set: ${arrSet[3]}`);

//Para eliminar algun elemento del set2
set2.delete(1)
console.log(set2);
//Para buscar un elemento en el set, devuelve true o false
console.log(set.has(2));
//Para limpiar el set
set2.clear()
console.log(set2);
console.groupEnd()

console.groupCollapsed("Maps")
let mapa= new Map()
//Para añandir elementos a mapa
mapa.set("nombre","Stark")
mapa.set("edad",5)
mapa.set(5,"años") // en los objetos, las llaves son siempre strings,en los tipos de dato map, pueden ser cualquier cosa
mapa.set({"a":"a"},{"b":"b"})
mapa.set("apodo","Shapra")

console.log(mapa);
mapa.set("nombre","Señor Stark") // Cambiar valor a una llave
console.log(mapa);
console.log(mapa.has("nombre")); //para buscar una llave, retorna false o true
console.log(mapa.get(5)); //Para obtener el valor, mediante la llave
mapa.delete("apodo"); //Para borrar elemento del map
console.log(mapa);
//los maps son datos iterables
for ([key,value]of mapa){
  console.log(`Llave: ${key}, Valor: ${value}`);
}
console.log(`\n\n Mapa 2`);

/* la forma de inicializar un tipo de dato map */
const mapa2= new Map([
  ["nombre","Rodolfo"],
  ["edad",2],
  [2,"años"],
])
console.log(mapa2);
console.log(`\n Almacenando las llaves y valores de un map en constantes de tipo array`);
const llavesMapa2=[...mapa2.keys()]
const valoresMapa2=[...mapa2.values()]
console.log(llavesMapa2);
console.log(valoresMapa2);
mapa2.clear()  //Para limpiar el contenido del  map
console.log(mapa2)
console.groupEnd()

console.groupCollapsed("WeakSets")
// tantos los weakSets y los WeakMaps se parecen al set y al map pero con algunas diferencias, como por ejemlo
// ninguno acepta llaves que no sean objetos. tampoco podemos verificar su tamaño, es decir no podemos usar el método
// size, tampoco podemos iterarlo
/* const ws=new WeakSet([1,2,3])*/  //Esto no funciona, da error, tenemos que agregar con el método add
const ws= new WeakSet()
let valor1={"valor1":1} 
let valor2={"valor2":2}
let valor3={"valor3":3}

ws.add(valor1) //cuando algunas de estas propiedades se nulifican o se vuelven undefined, se eliminan automaticamente
ws.add(valor2)
console.log(ws)
console.log(ws.has(valor1)) //True
ws.delete(valor2) //queda solo el valor 1
console.log(ws);
ws.add(valor2)
ws.add(valor3)

/* setInterval(()=> console.log(ws),1000)
setTimeout(()=>{
  valor1=null
  valor2=null
  valor3=null
},5000) */

console.log(`\n\n WeakMap`);

/* const wm= new WeakMap([
  ["llave","Valor"]
]) */  // Esto no funciona
const wm= new WeakMap()
let llave1={}
let llave2={}
let llave3={}

wm.set(llave1,1)
wm.set(llave2,2)
console.log(wm);

console.log(wm.has(llave1)); //True
console.log(wm.has(llave3)); //false

console.log(wm.get(llave1)); // 1
console.log(wm.get(llave3)); // undefined
wm.delete(llave2)
wm.set(llave2,2)
wm.set(llave3,3)
/* setInterval(()=>console.log(wm),1000)
setTimeout(()=>{
  llave1=null
  llave2=null
  llave3=null
},5000)*/
console.groupEnd() 

console.groupCollapsed("Iterables and Iterators")
const iterable=[1,2,3,4,5]
const iterador=iterable[Symbol.iterator]()

/*  console.log(iterador); // retorna tipo de dato: Array Iterator{}, si fuera un string: StringIterator {}
console.log(iterador.next()); //retorna {value: 1 : done: false}, el done si es falso es por que aun hay mas elementos
console.log(iterador.next()); //retorna {value: 2 : done: false}
console.log(iterador.next()); //retorna {value: 3 : done: false}
console.log(iterador.next()); //retorna {value: 4 : done: false}
console.log(iterador.next()); //retorna {value: 5 : done: false}
console.log(iterador.next()); //retorna {value: undefined : done: true}, true nos indica que ya se acabo 
*/

//Esto facilmente se pude hacer con un loop como while, for, etc
console.log(`\n\n Ahora con un while`);
let next=iterador.next();

while(!next.done){ //mientras el el valor de la llave done sea false.
  console.log(next.value); //Mostramos solo los valores del iterable
  next=iterador.next();
} 
// Y esto funciona con cualquier dato que sea iterable, incluyendo los set y map.
console.groupEnd()

console.groupCollapsed("Generators")
/* Un generador nos sirve para iterar codigo de una función, al menos es lo que entiendo */
function* la_iterable(){
  //Yiel es como el return, se ejecuta cada ves que el next() llame
  yield "Hola"
  console.log(`Hola consola`);
  yield "Hola 2"
  console.log(`Seguimos con mas instrucciones de nuestro código`);
  yield "Hola 3"
  yield "Hola 4"
}
let elIterador=la_iterable();
/*
console.log(elIterador);
console.log(elIterador.next()); //Hola
console.log(elIterador.next()); // Hola consola, Hola 2
console.log(elIterador.next()); // seguimos con..., Hola 3
*/
for(let y of elIterador){ // recorrer los resultados de la ejecución del generador
  console.log(y);
}

let arrGen=[...la_iterable()]//Guardar en un array los resultados de cada yield del generador
console.log(arrGen);
/* Elevar al cuadrado con generadores */
function cuadrado(valor){
  setTimeout(()=>{
      // return console.log({valor, resultado: valor*valor}) DESCOMENTAR 
  }, Math.random()*1000)
}
function* generador(){
  console.log(`Inicia Generador`);
  yield cuadrado(0)
  yield cuadrado(1)
  yield cuadrado(2)
  yield cuadrado(3)
  yield cuadrado(4)
  console.log(`Finaliza Generador`);
}
let gen=generador()

for(let y of gen){
  console.log(y);
}

console.groupEnd()

console.groupCollapsed("Proxies")
/* ***** El Objeto Proxy ******* */
/* Hace una vinculacion entre el objeto original (persona) y el objeto copia(miki) y atravez de su objeto manejador podemos hacer validaciones, cambios, etc. antes de asignar valores a la llave de la copia */
const personaa={
  nombre:"",
  apellido:"",
  edad:0
}
const manejador={
  set(obj,prop,valor){
    if(Object.keys(obj).indexOf(prop)===-1){
      return console.error(`La propiedad "${prop}" no existe en el objeto persona`);
    }
    if( //Para comprobar que no introduscan caracteres no validos en un nombre y apellido
      (prop==="nombre"|| prop==="apellido") &&
      !(/^[A-Za-zÀ-ÿ\s]{0,40}$/.test(valor))
    ){
      return console.error(`la propiedad "${prop}" solo acepta letras y espacios en blanco`);

    }
    obj[prop]=valor; // esto hace para que añana un valor a la propiedad del objeto instanciado. *1
  }
}
const miki= new Proxy(personaa,manejador);
miki.nombre="Miki" // esto no funcionaria si no existiria obj[prop]=valor; en la linea 259 *1
miki.apellido="Tucto Leon"
miki.edad=20
//Tambien es posible añadir propiedades que no existen, pero ahora el validador del manejador no nos lo permitirá
console.log(miki);
console.log(personaa)
const alexander= new Proxy(personaa, manejador)
alexander.nombre="Alexander"
alexander.apellido="Romel"
alexander.edad=13
console.log(alexander);
console.log(personaa); //Se quedará con la ultima copia, en este caso alexander
console.groupEnd()


console.groupCollapsed("Propiedades Dinamicas de los objetos")
let keyRandom=Math.round(Math.random()*95+5)
const objUsuario={
  propiedad: "valor",
  [`id_${keyRandom}`]:"Valor Aleatorio"
}
console.log(objUsuario);
const usuarios=["Jon","Javier","Luis","Juan"]
usuarios.forEach((users,index)=> objUsuario[`id_${index}`]=users)
console.log(objUsuario);

console.groupEnd()
