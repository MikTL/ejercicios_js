console.groupCollapsed("This")
console.log(this);
console.log(this===window);
this.nombre="Contexto Global"
console.log(this.nombre);

function imprimir(){
  console.log(this.nombre);
}
imprimir()

const objeto={
  nombre:"Contexto Objeto",
  imprimir: function(){
    console.log(this.nombre);
  }
}
console.log(`\n\n`);
objeto.imprimir()

const obj2= {
  nombre:"Contexto Objeto 2",
  imprimir //esto esta haciendo referencia a la funcion imprimir del scope global
}
obj2.imprimir() // nos mostrara el texto "Contexto Objeto 2"
const obj3={
  nombre:"Contexto Objeto 3",
  imprimir: ()=>{ // con una arrow function, toma como referencia el scope del objeto principal 
    console.log(this.nombre); //Por eso aqui nos imprimirá "Contexto Global"
  }
}
obj3.imprimir()

function Persona(nombre){
  this.nombre=nombre
  /*  return function(){
      console.log(this.nombre) //Esto imprimirá contexto global, ya que no hay ningun this.nombre en su contexto local
  }
    */
  return ()=> console.log(this.nombre) //Ahora si imprimirá  lo que se le pase por parametro al instanciar a Persona
  //Esto sucede porque las arrow function toman el scope del padre.
}
let yul= new Persona("Yul");
yul()
console.groupEnd()
console.groupCollapsed("Call, apply, bind")
this.lugar="Global"
function saludar(saludo, aQuien){
  console.log(`${saludo} ${aQuien} desde el contexto ${this.lugar}`);
}
saludar("Hola", "MichiNegro")
const objj={
  lugar:"Objeto"
}
saludar.call(objj) //imprimira el contexto del this del objeto que se le pase por parámetro
saludar.apply(objj)
//si es que la funcion saludar tiene parametros, entonces se le pase asi.
console.log(`Call con parametros`);

saludar.call(objj,"hola", "Miki")
console.log(`Apply con parametros`);
saludar.apply(objj,["hola", "Miki"])
saludar.apply(null,["hola", "Miki"]) //con null regresamos al contexto Global, tambien podemos usar this, si estamos fuera de una funcion ya que si estamos dentro, no tomará el contexto de dicha funcion

const people={
  nombre:"Miki",
  saludo: function(){
    console.log(`Hola ${this.nombre}`);
  }
}
people.saludo()
const people2={
  saludo:people.saludo.bind(people) //Con el bind, enlazamos el contexto del objeto people
  // si al bind,le pasamos por parametro el this, entonces elazaremos el contexto global.
}
people2.saludo()
console.groupEnd()
console.groupCollapsed("JSON")

console.log(`JSON tiene 2 métodos,  el parse y el stringify`);
console.log(`\nEl parse convierte cualquier cadena de texto en un algo que el lenguaje entienda, ejemplo`);
console.log(`convertir unas llaves entre comillas, las convertirá a objeto, los corchetes a arrays`);
console.log(JSON.parse("{}"));
console.log(JSON.parse("true"));
console.log(`\n tambien tenemos al stringify, que hace lo contrario a parse, convierte un dato de JavaScript y lo convierte a cadena de texto, entendible por los JSON`);
console.log(JSON.stringify({nombre:"miki"}));
console.groupEnd()