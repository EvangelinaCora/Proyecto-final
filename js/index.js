
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

const alertaContenedor = document.getElementById("alerta")

const carrito = [
    {
        id: 1,
        nombre: "Ironman",
        precio: 14000

    },
    {
        id: 2,
        nombre: "Spiderman",
        precio: 12000

    },
    {
        id: 3,
        nombre: "Harry potter",
        precio: 15000

    },
    {
        id: 4,
        nombre: "Hermione",
        precio: 13000

    },
    {
        id: 5,
        nombre: "Chewbacca",
        precio: 10000

    },
    {
        id: 6,
        nombre: "Darth vader",
        precio: 15000

    },
    {
        id: 7,
        nombre: "Mickey",
        precio: 15000

    },
    {
        id: 8,
        nombre: "Cenicienta",
        precio: 15000

    },

]


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
        `
        console.log(funkoFiltrado);
    } else {
        alertaContenedor.innerHTML = `
        <div class="alerta-container">
        <h4 style="text-align: center">No tenemos ningun funko pop con ese nombre</h4>
        </div>
        `
    }

    setTimeout(() => {
        alertaContenedor.innerHTML = ""
    }, 3000);
}

mostrarAlert()













