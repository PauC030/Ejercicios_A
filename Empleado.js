class Empleado {
    constructor(nombre,salario){
        this.nombre = nombre;
        this.salario = salario;
    
    }

    obtenerDetalles() {
        return `Nombre: ${this.nombre},
         Salario: ${this.salario}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, salario) {
        super(nombre, salario); // Inicializa nombre y salario en la clase padre
        this.departamento = [];   
    }

    Departamento (departamento){
        this.departamento.push(departamento); 
    }


    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Departamento: ${this.departamento}`;
    }
}


const empleado = new Empleado("Andrea", 3000);
console.log(empleado.obtenerDetalles()); 

const gerente = new Gerente("Pau", 5000, "Ventas");
console.log(gerente.obtenerDetalles()); 