// visualizar cards restantes
const fetchData = async () => {
    const response = await fetch("../data/productos.json");
    const data = await response.json();
    mostrarFunkos(data);
  };
  
  function mostrarFunkos(data) {
    const funkosContainer = document.querySelector(".funkos-harry");
  
    data.map((funko) => {
      console.log(funko);
      const funkocard = document.createElement("div");
      funkocard.innerHTML = `
         <div class="prod-card" data-id=${funko.id}>
              <div>
                  <img class="funko-img" src=${funko.img} />
              </div>
              <div>
                  <h2>${funko.empresa}</h2>
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
  
  fetchData();