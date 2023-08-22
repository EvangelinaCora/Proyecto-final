const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    switch (true) {
        case nombreInput.value.length < 3:
            Toastify({
                text: "El nombre debe tener al menos 3 letras",
                duration: 3000,
                style: {
                    color: "black",
                },
                backgroundColor: "white"
            }).showToast();
            break;

        case !emailInput.value.includes('@') || !emailInput.value.includes('.'):
            Toastify({
                text: "La dirección de correo electrónico no es válida",
                duration: 3000,
                style: {
                    color: "black",
                },
                backgroundColor: "white"
            }).showToast();
            break;

        default:
            Toastify({
                text: "Gracias por ingresarte!",
                duration: 3000,
                style: {
                    color: "black",
                },
                backgroundColor: "white"
            }).showToast();
            break;
    }
});
