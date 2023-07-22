
// function calcularCompra() {

//     let precio = parseInt(prompt("Cuanto seria el maximo que esta dispuesto a gastar?"));



//     while (precio < 7000) {
//         precio = parseInt(prompt("No hay productos disponibles a ese valor"));
//     }

//     if (precio <= 10000) {
//         alert("Podes conseguir los siguientes Funkos: Thor, Gamora, Rocket, Mantis, Hedwig ")

//     } else {
//         alert("Poder conseguir la mayoria de los productos!")
//     }

// }

// calcularCompra()


const alertaContenedor = document.getElementById("alerta");
const carrito = [];

class Funko {
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio
    }
}

const ironman = new Funko(1, "Ironman", 15000);
const spiderman = new Funko(2, "Spiderman", 12000);
const harryPotter = new Funko(3, "Harry Potter", 15000);
const hermione = new Funko(4, "Hermione", 13000);
const chewbacca = new Funko(5, "Chewbacca", 10000);
const darthVader = new Funko(6, "Darth Vader", 15000);
const mickey = new Funko(7, "Mickey", 15000);
const cenicienta = new Funko(8, "Cenicienta", 15000);

carrito.push(ironman,spiderman,harryPotter,hermione,chewbacca,darthVader,mickey,cenicienta);

console.log(carrito);

function mostrarAlert() {
  const funkoUsuario = prompt("¿Qué funko pop estás buscando?");

  const funkoFiltrado = carrito.filter(function (funko) {
    return funko.nombre.toLowerCase() === funkoUsuario.toLowerCase();
  });

  if (funkoFiltrado.length > 0) {
    console.log(funkoFiltrado);
    alertaContenedor.innerHTML = `
        <div class="alerta-container">
        <h1>${funkoFiltrado[0].nombre}</h1>
         <span>$${funkoFiltrado[0].precio}</span>
        </div>
        `;
    console.log(funkoFiltrado);
  } else {
    alertaContenedor.innerHTML = `
        <div class="alerta-container">
        <h4 style="text-align: center">No tenemos ningun funko pop con ese nombre</h4>
        </div>
        `;
  }

  setTimeout(() => {
    alertaContenedor.innerHTML = "";
  }, 3000);
}

mostrarAlert();












