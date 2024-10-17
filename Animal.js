// Definir la clase Animal
class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    hacerSonido() {
      console.log("El animal hace un sonido");
    }
  }
  
  // extends es para heredar
  class Perro extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad); // Llamar al constructor de la clase (Animal)
      this.raza = [];
    }
    //punto 2
        Raza(raza) {
        this.raza.push(raza); 
    }
  
    hacerSonido() {
      console.log("El perro ladra: ¡Guauuu!");
    }
  }
  
  // Crear la instancia de la class Animal
  const animal = new Animal("otro animal", 5 ,);
  animal.hacerSonido(); 
  
  // Crear la instacia de la class perro
  const perro = new Perro("Maximiliano", 5);
  perro.hacerSonido(); 
  console.log(perro);
  perro.Raza("criollo");
  console.log(perro);