
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


// const alertaContenedor = document.getElementById("alerta");
// const carrito = [];

// class Funko {
//     constructor(id, nombre, precio){
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio
//     }
// }

// const ironman = new Funko(1, "Ironman", 15000);
// const spiderman = new Funko(2, "Spiderman", 12000);
// const harryPotter = new Funko(3, "Harry Potter", 15000);
// const hermione = new Funko(4, "Hermione", 13000);
// const chewbacca = new Funko(5, "Chewbacca", 10000);
// const darthVader = new Funko(6, "Darth Vader", 15000);
// const mickey = new Funko(7, "Mickey", 15000);
// const cenicienta = new Funko(8, "Cenicienta", 15000);

// carrito.push(ironman,spiderman,harryPotter,hermione,chewbacca,darthVader,mickey,cenicienta);

// console.log(carrito);

// function mostrarAlert() {
//   const funkoUsuario = prompt("¿Qué funko pop estás buscando?");

//   const funkoFiltrado = carrito.filter(function (funko) {
//     return funko.nombre.toLowerCase() === funkoUsuario.toLowerCase();
//   });

//   if (funkoFiltrado.length > 0) {
//     console.log(funkoFiltrado);
//     alertaContenedor.innerHTML = `
//         <div class="alerta-container">
//         <h1>${funkoFiltrado[0].nombre}</h1>
//          <span>$${funkoFiltrado[0].precio}</span>
//         </div>
//         `;
//     console.log(funkoFiltrado);
//   } else {
//     alertaContenedor.innerHTML = `
//         <div class="alerta-container">
//         <h4 style="text-align: center">No tenemos ningun funko pop con ese nombre</h4>
//         </div>
//         `;
//   }

//   setTimeout(() => {
//     alertaContenedor.innerHTML = "";
//   }, 3000);
// }

// mostrarAlert();


const funkos = [];
const carrito = [];

class FunkosProductos {
    constructor(img, nombre, precio, id) {
        this.img = img;
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    }
}


const Wanda = new FunkosProductos("../imagenes/tamaño-correcto/marvel/wanda.png", "Pop! Wanda", 10000, 1)
const Spiderman = new FunkosProductos("../imagenes/tamaño-correcto/marvel/spiderman1.png", "Pop! Spiderman", 12000, 2)
const Ironman = new FunkosProductos("../imagenes/tamaño-correcto/marvel/iron-man.png", "Pop! Ironman", 14000, 3)
const Thor = new FunkosProductos("../imagenes/tamaño-correcto/marvel/thor-1.png", "Pop! Thor", 9000, 4)
const DoctorStrange = new FunkosProductos("../imagenes/tamaño-correcto/marvel/doctor-strange.png", "Pop! Doctor Strange", 12000, 5)
const StarLord = new FunkosProductos("../imagenes/tamaño-correcto/marvel/star-lord-1.png", "Pop! Star Lord", 10000, 6)
const Gamora = new FunkosProductos("../imagenes/tamaño-correcto/marvel/gamora-1.png", "Pop! Gamora", 8000, 7)
const Groot = new FunkosProductos("../imagenes/tamaño-correcto/marvel/groot.png", "Pop! Baby Groot", 10000, 8)
const Rocket = new FunkosProductos("../imagenes/tamaño-correcto/marvel/rocket-1.png", "Pop! Rocket", 9000, 9)
const Mantis = new FunkosProductos("../imagenes/tamaño-correcto/marvel/mantis-1.png", "Pop! Mantis", 7000, 10)
const BlackPanter = new FunkosProductos("../imagenes/tamaño-correcto/marvel/black-panter.png", "Pop! BlackPanter", 12000, 11)
const AntMan = new FunkosProductos("../imagenes/tamaño-correcto/marvel/ant-man.png", "Pop! Antman", 10000, 12)
const Loki = new FunkosProductos("../imagenes/tamaño-correcto/marvel/loki-1.png", "Pop! Loki", 14000, 13)
const Thanos = new FunkosProductos("../imagenes/tamaño-correcto/marvel/thanos-1.png", "Pop! Thanos", 12000, 14)

funkos.push(Wanda, Spiderman, Ironman, Thor, DoctorStrange, StarLord, Gamora, Groot, Rocket, Mantis, BlackPanter, AntMan, Loki, Thanos);
// Función para inicializar la tienda

function mostrarFunkos() {
    const funkosContainer = document.querySelector('.funkos-marvel');

    funkos.map((funko) => {
        const funkocard = document.createElement('div');
        funkocard.innerHTML =
            `
       <div class="prod-card" data-id=${funko.id}>
            <div>
                <img src= ${funko.img} />
            </div>
            <div>
                <h2>MARVEL</h2>
                <p> ${funko.nombre.toUpperCase()}</p>
                <p class="precio">$${funko.precio}</p>
                <div class="btn-comprar">

                    <button class="boton-productos">AGREGAR</button>
                </div>
            </div>
        </div> `;
        funkosContainer.appendChild(funkocard);

    })

    function agregarAlCarrito(evento) {
        const prodCard = evento.target.closest('.prod-card');
        const idProducto = parseInt(prodCard.dataset.id);
        const nombreProducto = prodCard.querySelector('p:nth-child(2)').textContent.trim();
        const precioProducto = parseInt(prodCard.querySelector('.precio').textContent.slice(1));
        // Buscar si el producto ya está en el carrito
        const productoEnCarrito = carrito.find(item => item.id === idProducto);

        productoEnCarrito ?  productoEnCarrito.cantidad += 1 :  carrito.push({
            id: idProducto,
            nombre: nombreProducto,
            precio: precioProducto,
            cantidad: 1,
        });

        localStorage.setItem("carrito", JSON.stringify(carrito) )
        console.log(carrito);
    }

    const botonesAgregar = document.getElementsByClassName('boton-productos');
    for (const button of botonesAgregar) {
        button.addEventListener('click', agregarAlCarrito);
    }
}

mostrarFunkos()










