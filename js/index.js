function calcularCompra() {

    let precio = parseInt(prompt("Cuanto seria el maximo que esta dispuesto a gastar?"));



    while (precio < 7000) {
        precio = parseInt(prompt("No hay productos disponibles a ese valor"));
    }
   
    if (precio <= 10000) {
        alert("Podes conseguir los siguientes Funkos: Thor, Gamora, Rocket, Mantis, Hedwig ")

    } else {
        alert("Poder conseguir la mayoria de los productos!")
    }

}

calcularCompra()