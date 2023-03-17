 // codigo sincrono bloqueante
(()=>{
  console.log("Código Síncrono");
  console.log("Inicio")

  function dos(){
    console.log("dos")
  }
  function uno(){
    console.log("uno")
    dos()
    console.log(3)
  }
  uno();
  console.log("Fin")

})();
(()=>{
  console.log("Código Asíncrono");
  console.log("Inicio")

  function dos(){
    setTimeout(function(){
      console.log("dos")
    },1000)
  }
  function uno(){
    setTimeout(function (){
      console.log("uno")
    },0)
    dos()
    console.log("Tres")
  }
  uno();
  console.log("Fin")

})();

// Callback
function cuadradoCallback(valor, callback){
  setTimeout(()=>{
    callback(valor, valor*valor)
  },0| Math.random()*1000)
}
cuadradoCallback(0,(valor,resultado)=>{
  console.log("Inicia CallBack");
  console.log(`Callback ${valor}, ${resultado}`);
  cuadradoCallback(1,(valor,resultado)=>{
    console.log(`Callback ${valor}, ${resultado}`);
    cuadradoCallback(2,(valor,resultado)=>{
      console.log(`Callback ${valor}, ${resultado}`);
      cuadradoCallback(3,(valor,resultado)=>{
        console.log(`Callback ${valor}, ${resultado}`);
      })
    })
  })
})

// Promesas
function cuadradoCallback(valor){
  if(typeof valor !=="number"){
    return Promise.reject(`Error, el valor "${valor}" ingresado no es un número`)
  }
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve({
        valor,
        respuesta: valor*valor
      })
    },0| Math.random()*1000)
  })
}
cuadradoCallback(0)
.then((obj)=>{
  console.log("Inicia Promesa")
  console.info(`Promise: ${obj.valor}, ${obj.respuesta}`)
  return cuadradoCallback(1)
})
.then((obj)=>{
  console.info(`Promise: ${obj.valor}, ${obj.respuesta}`)
  return cuadradoCallback(2)
})
.then((obj)=>{
  console.info(`Promise: ${obj.valor}, ${obj.respuesta}`)
  return cuadradoCallback(3)
})
.then((obj)=>{
  console.info(`Promise: ${obj.valor}, ${obj.respuesta}`)
  return console.info("Fin promise")
})
.catch(err=> console.error(err));

// ASYNC

function cuadradoPromise(valor){
if(typeof valor !=="number"){
    return Promise.reject(`Error, el valor "${valor}" ingresado no es un número`)
}
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve({
      valor,
      respuesta: valor*valor
    })
  },0| Math.random()*1000)
  })
}
async function funcionAsincronaDeclarada(){
  try {
    console.log("inicio Async Function");
    let obj= await cuadradoPromise(0)
    console.log(`Async Function: ${obj.valor}, ${obj.respuesta}`);

    obj= await cuadradoPromise(1)
    console.log(`Async Function: ${obj.valor}, ${obj.respuesta}`);

    obj= await cuadradoPromise("2")
    console.log(`Async Function: ${obj.valor}, ${obj.respuesta}`);

    obj= await cuadradoPromise(3)
    console.log(`Async Function: ${obj.valor}, ${obj.respuesta}`);
  } catch (error) {
    console.error(error);
  }
}
//Tambien podemos crear funciones asincronas Expresadas: const a= async()=>{};
funcionAsincronaDeclarada()