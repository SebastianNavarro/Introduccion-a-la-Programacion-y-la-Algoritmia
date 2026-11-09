function definirParidad(){
    array = []
    condicionParada = false
    contadorPares = 0

    while(condicionParada == false){
        numero = prompt("Ingrese un numero")
        if(numero % 2 == 0){
            alert("El numero es par")
            contadorPares++
            array.push(numero)
        }
        else{
            alert("El numero es impar")
        }

        confirmacion = confirm("Deseas continuar?")
        if(confirmacion == false){
            alert("Numeros pares ingresados: " + array)
            alert("Se han ingresado " + contadorPares + " numeros pares")
            condicionParada = true  
        }


    }

    
}