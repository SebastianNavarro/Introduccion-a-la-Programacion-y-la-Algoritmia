let contadorMesas = 5

function reservarMesas() {
    let condicionParada = false
    let contador = 0

    while (contadorMesas > 0 && condicionParada == false) {
        const nombreCliente = prompt("Ingrese el nombre")
        const numeroPersonas = prompt("Ingrese el numero de personas")

        alert(nombreCliente + " ha reservado una mesa para " + numeroPersonas)
        contadorMesas--
        contador++

        const respuesta = confirm("Desea continuar con otra reserva?")
        if (respuesta) {
            if (contadorMesas == 0) {
                alert("Lo sentimos, no hay disponibilidad de mesas")
            }
        } else {
            condicionParada = true
            alert("El sistema de reservas ha finalizado")

        }
    }

}

