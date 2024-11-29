// main.js
import Perro from './Perro.js';
import Gato from './Gato.js';

const mascotas = [
    new Perro('Rex'),
    new Gato('Miau'),
    new Perro('Fido'),
    new Gato('Luna')
];

// Hacer que cada mascota realice su acción
mascotas.forEach(mascota => {
    mascota.hacerSonido(); // Polimorfismo
    mascota.mostrarDetalles(); // Muestra detalles específicos
});
