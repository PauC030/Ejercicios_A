// Clase base Animal
class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    hacerSonido() {
        return "El animal hace un sonido.";
    }
}

// Clase León que hereda de Animal
class Leon extends Animal {
    constructor(nombre) {
        super(nombre, 'León');
    }

    hacerSonido() {
        return `${this.nombre} dice: ¡grrr!`;
    }
}

// Clase Elefante que hereda de Animal
class Elefante extends Animal {
    constructor(nombre) {
        super(nombre, 'Elefante');
    }

    hacerSonido() {
        return `${this.nombre} dice: ¡goooof!`;
    }
}

// Clase Tigre que hereda de Animal
class Tigre extends Animal {
    constructor(nombre) {
        super(nombre, 'Tigre');
    }

    hacerSonido() {
        return `${this.nombre} dice: ¡Grrr!`;
    }
}

// Arreglo para almacenar los animales
const animales = [];

// Función para agregar un nuevo animal al arreglo
function agregarAnimal() {
    const nombre = document.getElementById('nombre').value.trim();
    const especie = document.getElementById('especie').value;

    let nuevoAnimal;
    if (especie === 'leon') {
        nuevoAnimal = new Leon(nombre);
    } else if (especie === 'elefante') {
        nuevoAnimal = new Elefante(nombre);
    } else if (especie === 'tigra') {
        nuevoAnimal = new Tigre(nombre);
    }

    animales.push(nuevoAnimal);
    listarAnimales();
    limpiarFormulario();
}

// Función para listar animales en la interfaz
function listarAnimales() {
    const lista = document.getElementById('listaAnimales');
    lista.innerHTML = ''; // Limpiar la lista actual

    animales.forEach(animal => {
        const itemLista = document.createElement('li');
        itemLista.textContent = `${animal.nombre} (${animal.especie})`;
        lista.appendChild(itemLista);
    });

    hacerSonidosAnimales();
}

// Función para hacer que cada animal emita su sonido
function hacerSonidosAnimales() {
    const sonidosLista = document.getElementById('sonidosAnimales');
    sonidosLista.innerHTML = ''; // Limpiar la lista de sonidos

    animales.forEach(animal => {
        const sonidoItem = document.createElement('li');
        sonidoItem.textContent = animal.hacerSonido();
        sonidosLista.appendChild(sonidoItem);
    });
}

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('especie').value = 'leon';
}
