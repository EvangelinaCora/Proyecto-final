let carrito = [];
const funkos = [];



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


funkos.push(Wanda, Spiderman, Ironman, Thor, DoctorStrange, StarLord, Gamora, Groot, Rocket, Mantis);

// visualizar cards de marvel
function mostrarFunkos() {
  const funkosContainer = document.querySelector(".funkos-marvel");

  funkos.map((funko) => {
    const funkocard = document.createElement("div");
    funkocard.innerHTML = `
       <div class="prod-card" data-id=${funko.id}>
            <div>
                <img class="funko-img" src= ${funko.img} />
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
  });
  const botonesAgregar = document.getElementsByClassName("boton-productos");
  for (const button of botonesAgregar) {
    button.addEventListener("click", agregarAlCarrito);
  }
}
// Función para inicializar la tienda
function agregarAlCarrito(evento) {
  const prodCard = evento.target.closest(".prod-card");
  const idProducto = parseInt(prodCard.dataset.id);

  console.log(idProducto);
  const productoEnCarrito = carrito.find((item) => item.id === idProducto);
  console.log(productoEnCarrito);
  if (productoEnCarrito) {
    console.log(carrito);
    productoEnCarrito.cantidad += 1;
  } else {
    const nombreProducto = prodCard
      .querySelector("p:nth-child(2)")
      .textContent.trim();
    const precioProducto = parseInt(
      prodCard.querySelector(".precio").textContent.slice(1)
    );
    const funkoImagen = prodCard.querySelector(".funko-img").src;
    console.log({ nombreProducto,});
    carrito.push({
      id: idProducto,
      nombre: nombreProducto,
      precio: precioProducto,
      cantidad: 1,
      imagen: funkoImagen,
    });
    console.log(carrito);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
//   Recuperar dato
  const miDatoRecuperado = JSON.parse(localStorage.getItem("carrito"));
  const nuevoProducto = miDatoRecuperado[miDatoRecuperado.length - 1];
  mostrarNotificacion(nuevoProducto.nombre, nuevoProducto.cantidad);
}

// Carrito
function mostrarCarrito() {
  carritoContenedor.innerHTML = ""; 
  const miDatoRecuperado = JSON.parse(localStorage.getItem("carrito"));

  miDatoRecuperado.forEach((funko) => {
    const funkocard = document.createElement("div");
    funkocard.innerHTML = `
       <div data-id=${funko.id}>
            <div class=div-js>
            <img class=img-js src=${funko.imagen} />
            
                <p class=nombre-js> ${funko.nombre.toUpperCase()}</p>
                
                <p class="precio precio-js">$${funko.precio}</p>
                <p class="cantidad cantidad-js">Cantidad: ${funko.cantidad}</p>
                <button class="eliminar-producto boton-js">
                <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div> `;
    carritoContenedor.appendChild(funkocard);

    const botonEliminar = funkocard.querySelector(".eliminar-producto");
    botonEliminar.addEventListener("click", () => eliminarProducto(funko.id));
  });
}

function eliminarProducto(idProducto) {
  const productoEnCarrito = carrito.find((item) => item.id === idProducto);

  if (productoEnCarrito) {
    if (productoEnCarrito.cantidad > 1) {
      productoEnCarrito.cantidad -= 1;
    } else {
      carrito = carrito.filter((item) => item.id !== idProducto);
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }
}


function mostrarNotificacion(nombreProducto, cantidadProductos) {
    Toastify({
        text: `El Funko ${nombreProducto.toLowerCase()} ha sido agregado al carrito (${cantidadProductos}) `,
        duration: 3000,
        style: {
          color: "black",
          background: "white"
      },
    }).showToast()
}

const carritoContenedor = document.querySelector(".cart-dropdown");

// Abrir y cerrar carrito
document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cart-icon");
  const cartDropdown = document.getElementById("cart-dropdown");

  // Manejar clics en el icono del carrito
  cartIcon.addEventListener("click", function (event) {
    event.stopPropagation(); 
    cartDropdown.classList.toggle("active");
  });

  // Manejar clics en cualquier parte del documento
  document.addEventListener("click", function (event) {
    const isCartIconClicked = event.target === cartIcon;
    const isCartDropdownClicked = cartDropdown.contains(event.target);

    if (!isCartIconClicked && !isCartDropdownClicked) {
      cartDropdown.classList.remove("active");
    }
  });

 // Manejar clics en los botones de eliminar dentro del carrito
   cartDropdown.addEventListener("click", function (event) {
    if (event.target.classList.contains("eliminar-producto")) {
      event.stopPropagation();
  
      const idProducto = parseInt(event.target.closest(".prod-card").getAttribute("data-id"));
      eliminarProducto(idProducto);
    }
  });
  
});

mostrarFunkos(); 



