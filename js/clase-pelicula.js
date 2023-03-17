class Pelicula {
  constructor({id,titulo,director,estreno,pais,generos,calificacion}){
      this.id=id
      this.titulo=titulo
      this.director=director
      this.estreno=estreno
      this.paises=pais
      this.genero=generos
      this.calificacion=calificacion
      this.validarIMDB(id)
      this.validarTitulo(titulo)
      this.validarDirector(director)
      this.validarEstreno(estreno)
      this.validarPais(pais)
      this.validarGenero(generos)
      this.validarCalificacion(calificacion)
  }
  static get listaGeneros(){
      return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
  }
  static generosAceptados(){
      return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`)
  }
  validarCadena(propiedad,valor){
      if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`)
      if(typeof valor!=="string") return console.error(`${propiedad} "${valor}" ingresado, No es una cadena de texto`);
      return true
  }
  validarLongitudCadena(propiedad,valor,longitud){
      if(valor.length>longitud) return console.error(`"${propiedad}" "${valor}" excede el número de caracteres, permitidos (${longitud})`)
      return true
  }
  validarNumero(propiedad,valor){
      if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`)
      if(typeof valor!=="number") return console.error(`${propiedad} "${valor}" ingresado, No es un número`);
      return true
  }
  validarArreglo(propiedad,valor){
      if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`)
      if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" no es un array`)
      if(valor.length===0) return console.error(`${propiedad} "${valor}" no tiene datos`)
      for (const iterator of valor) {
          if(typeof iterator!=="string") return console.error(`El dato ${iterator} no es un string`)
      }
      return true
  }

  validarIMDB(id){
      if(this.validarCadena("IMDB id", id)){
          if(!/^([a-z]){2}([0-9]{7})$/.test(id)) return console.error(`"IMDB id" "${id}" no es valido, debe tener 9 caracteres, los dos primeros letras en minisculas, los 7 restantes numeros`);
      }
  }
  validarTitulo(titulo){
      if(this.validarCadena("Titulo",titulo))
          this.validarLongitudCadena("Titulo",titulo,100)
  }
  validarDirector(director){
      if(this.validarCadena("Director",director))
          this.validarLongitudCadena("Director",director,50)
  }
  validarEstreno(estreno){
      if(this.validarNumero("Año de estreno",estreno)) 
          if (!(/^([0-9]{4})$/.test(estreno))) return console.error(`Año de estreno "${estreno}" no es válido, debe ser un numero de 4 digitos`)
  }
  validarPais(pais){
      this.validarArreglo("Pais", pais)
  }
  validarGenero(generos){
      if(this.validarArreglo("Generos", generos))
          for (const genero of generos) {
              if(!Pelicula.listaGeneros.includes(genero)){
                  console.error(`Genero(s) incorrectos "${generos.join(",")}"`)
                  Pelicula.generosAceptados()
              }
          }
  }
  validarCalificacion(calificacion){
      if(this.validarNumero("Calificación", calificacion))
          return (calificacion<0 || calificacion > 10)
              ? console.error(`La calificación tiene que estar en un rango entre 0 y 10`)
              :this.calificacion=calificacion.toFixed(1) 
  }
  fichaTecnica(){
      console.info(`Ficha Técnica:
      Titulo: ${this.titulo}
      Director: ${this.director}
      Año: ${this.estreno}
      Pais: ${this.paises.join("-")}
      Géneros: ${this.genero.join(", ")}
      Calificación: ${this.calificacion}
      IMDB id: ${this.id}`)
  }
}
let peli= new Pelicula({
  id: "tt1234567",
  titulo: "Una peli",
  director: "Name Director",
  estreno: 2015,
  pais: ["Francia"],
  generos: ["Comedy", "Sport"],
  calificacion: 8.87

})
//peli.fichaTecnica()
const misPelis=[
  {
  id: "tt2123547",
  titulo: "Dos Pelis",
  director: "Primer Director",
  estreno: 2011,
  pais: ["USA"],
  generos: ["Action", "Drama"],
  calificacion: 9.87
  },
  {
  id: "tt1334567",
  titulo: "Tres peli",
  director: "Segundo Director",
  estreno: 2015,
  pais: ["UK"],
  generos: ["Adventure", "Drama"],
  calificacion: 5.87
  },
  {
  id: "tt4234567",
  titulo: "Cuatro peli",
  director: "Tercer Director",
  estreno: 2018,
  pais: ["Francia"],
  generos: ["Comedy", "Crime"],
  calificacion: 7.789
  }
]
misPelis.forEach(el=>new Pelicula(el).fichaTecnica())