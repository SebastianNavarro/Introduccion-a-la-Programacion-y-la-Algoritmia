function calcularCostoEnvio(peso, tipoEnvio){
    let costo
    if(tipoEnvio == "Estandar"){
        switch (true) {
            case peso <= 1:
                costo = 5
                break;

            case peso > 1 && peso <= 5:
                costo = 10
                break;
            
            case peso > 5:
                costo = 15
                break;            
        
            default:
                break;
        }
    }
    else{
        switch (true) {
            case peso <= 1:
                costo = 8
                break;

            case peso > 1 && peso <= 5:
                costo = 14
                break;
            
            case peso > 5:
                costo = 20
                break;            
        
            default:
                break;
        }
    }

    console.log("El costo de es de $" + costo)
}

function simularEnvios(){
    calcularCostoEnvio(4, "Estandar")
    calcularCostoEnvio(2, "Expres")
    calcularCostoEnvio(1, "Estandar")
    calcularCostoEnvio(1, "Expres")
}

simularEnvios()