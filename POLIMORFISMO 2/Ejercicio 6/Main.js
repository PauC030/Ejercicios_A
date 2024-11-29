// Clase base Vehiculo
class Vehiculo {
  constructor(marca, modelo, anio) {
      this.marca = marca;
      this.modelo = modelo;
      this.anio = anio;
  }

  obtenerInformacion() {
      return `${this.marca} ${this.modelo} (${this.anio})`;
  }
}

// Clase derivada Auto
class Auto extends Vehiculo {
  constructor(marca, modelo, anio) {
      super(marca, modelo, anio);
  }

  conducir() {
      console.log(`Conduciendo el auto ${this.obtenerInformacion()}`);
  }
}

// Clase derivada Moto
class Moto extends Vehiculo {
  constructor(marca, modelo, anio) {
      super(marca, modelo, anio);
  }

  conducir() {
      console.log(`Conduciendo la moto ${this.obtenerInformacion()}`);
  }
}


const vehiculos = [];


function renderizarVehiculos() {
  const tablaVehiculos = document.getElementById("tabla-vehiculos");
  tablaVehiculos.innerHTML = ""; 

  vehiculos.forEach(vehiculo => {
      const fila = document.createElement("tr");

      const columnaMarca = document.createElement("td");
      columnaMarca.textContent = vehiculo.marca;
      fila.appendChild(columnaMarca);

      const columnaModelo = document.createElement("td");
      columnaModelo.textContent = vehiculo.modelo;
      fila.appendChild(columnaModelo);

      const columnaAnio = document.createElement("td");
      columnaAnio.textContent = vehiculo.anio;
      fila.appendChild(columnaAnio);

      const columnaTipo = document.createElement("td");
      columnaTipo.textContent = vehiculo instanceof Auto ? "Auto" : "Moto";
      fila.appendChild(columnaTipo);

      const columnaAcciones = document.createElement("td");
      const btnConducir = document.createElement("button");
      btnConducir.textContent = "Conducir";
      btnConducir.addEventListener("click", () => vehiculo.conducir());
      columnaAcciones.appendChild(btnConducir);

      fila.appendChild(columnaAcciones);
      tablaVehiculos.appendChild(fila);
  });
}

document.getElementById("form-vehiculo").addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar que el formulario recargue la página

  const marca = document.getElementById("marca").value.trim();
  const modelo = document.getElementById("modelo").value.trim();
  const anio = parseInt(document.getElementById("anio").value.trim());
  const tipo = document.getElementById("tipo").value;

  if (marca && modelo && anio && tipo) {
      let vehiculo;
      if (tipo === "auto") {
          vehiculo = new Auto(marca, modelo, anio);
      } else if (tipo === "moto") {
          vehiculo = new Moto(marca, modelo, anio);
      }

      vehiculos.push(vehiculo); 
      renderizarVehiculos(); 

      
      document.getElementById("marca").value = "";
      document.getElementById("modelo").value = "";
      document.getElementById("anio").value = "";
      document.getElementById("tipo").value = "auto"; 
  } else {
      alert("Por favor, completa todos los campos correctamente.");
  }
});


document.getElementById("listarAutos").addEventListener("click", () => {
  const autos = vehiculos.filter(vehiculo => vehiculo instanceof Auto);
  renderizarVehiculos(autos); 
});


document.getElementById("listarMotos").addEventListener("click", () => {
  const motos = vehiculos.filter(vehiculo => vehiculo instanceof Moto);
  renderizarVehiculos(motos); 
});
