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


class Leon extends Animal {
    constructor(nombre) {
        super(nombre, 'León');
    }

    hacerSonido() {
        return `${this.nombre} dice: ¡grrr!`;
    }
}


class Elefante extends Animal {
    constructor(nombre) {
        super(nombre, 'Elefante');
    }

    hacerSonido() {
        return `${this.nombre} dice: ¡goooof!`;
    }
}


class Tigre extends Animal {
    constructor(nombre) {
        super(nombre, 'Tigre');
    }

    hacerSonido() {
        return `${this.nombre} dice: ¡Grrr!`;
    }
}


const animales = [];


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


function hacerSonidosAnimales() {
    const sonidosLista = document.getElementById('sonidosAnimales');
    sonidosLista.innerHTML = ''; // Limpiar la lista de sonidos

    animales.forEach(animal => {
        const sonidoItem = document.createElement('li');
        sonidoItem.textContent = animal.hacerSonido();
        sonidosLista.appendChild(sonidoItem);
    });
}


function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('especie').value = 'leon';
}
