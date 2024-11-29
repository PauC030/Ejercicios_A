// Clase base CuentaBancaria
class CuentaBancaria {
    constructor(numeroCuenta, saldo) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }

    depositar(cantidad) {
        this.saldo += cantidad;
    }

    retirar(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
        } else {
            alert('Fondos insuficientes');
        }
    }

    mostrarSaldo() {
        return this.saldo;
    }
}

// Clase derivada CuentaAhorros
class CuentaAhorros extends CuentaBancaria {
    aplicarIntereses(tasaInteres) {
        this.saldo += this.saldo * tasaInteres;
    }
}

// Clase derivada CuentaCorriente
class CuentaCorriente extends CuentaBancaria {
    cobrarMantenimiento(cargo) {
        this.saldo -= cargo;
    }
}

// Arreglo para almacenar las cuentas bancarias
const cuentas = [];

// Función para renderizar las cuentas en la tabla
function renderizarCuentas() {
    const tablaCuentas = document.getElementById("tabla-cuentas");
    tablaCuentas.innerHTML = ""; // Limpiar tabla

    cuentas.forEach(cuenta => {
        const fila = document.createElement("tr");

        const columnaNumero = document.createElement("td");
        columnaNumero.textContent = cuenta.numeroCuenta;
        fila.appendChild(columnaNumero);

        const columnaSaldo = document.createElement("td");
        columnaSaldo.textContent = cuenta.mostrarSaldo();
        fila.appendChild(columnaSaldo);

        const columnaAcciones = document.createElement("td");
        const btnVerSaldo = document.createElement("button");
        btnVerSaldo.textContent = "Ver Saldo";
        btnVerSaldo.addEventListener("click", () => {
            alert(`El saldo de la cuenta ${cuenta.numeroCuenta} es: ${cuenta.mostrarSaldo()}`);
        });
        columnaAcciones.appendChild(btnVerSaldo);

        fila.appendChild(columnaAcciones);
        tablaCuentas.appendChild(fila);
    });
}

// Manejo del formulario para agregar una nueva cuenta
document.getElementById("form-cuenta").addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

    const numeroCuenta = document.getElementById("numero-cuenta").value.trim();
    const saldo = parseFloat(document.getElementById("saldo").value.trim());
    const tipoCuenta = document.getElementById("tipo").value;

    if (numeroCuenta && saldo >= 0) {
        let cuenta;
        if (tipoCuenta === "ahorros") {
            cuenta = new CuentaAhorros(numeroCuenta, saldo);
        } else if (tipoCuenta === "corriente") {
            cuenta = new CuentaCorriente(numeroCuenta, saldo);
        }

        cuentas.push(cuenta); 
        renderizarCuentas(); 

       
        document.getElementById("numero-cuenta").value = "";
        document.getElementById("saldo").value = "";
        document.getElementById("tipo").value = "ahorros";
    } else {
        alert("Por favor, completa todos los campos correctamente.");
    }
});
