// main.js
import Autobus from './Autobus.js';
import Bicicleta from './Bicicleta.js';

const transportes = [
    new Autobus(50, 'Diésel'),
    new Bicicleta(1),
    new Autobus(30, 'Gasolina'),
    new Bicicleta(1)
];

// Recorrer el arreglo y ejecutar métodos
transportes.forEach(transporte => {
    transporte.arrancar(); // Polimorfismo
    transporte.mostrarDetalles(); // Muestra detalles específicos
});
