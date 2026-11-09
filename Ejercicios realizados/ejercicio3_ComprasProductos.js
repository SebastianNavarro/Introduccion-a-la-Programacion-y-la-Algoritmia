const productos = ["Leche", "Pan", "Huevos", "Queso", "Jamón", "Aceite", "Arroz", "Pasta"];
const precios = [1.20, 0.90, 2.50, 4.80, 6.50, 5.99, 1.85, 1.10];

function calcularTotal(precios) {
    let suma = 0
    for (let i = 0; i < precios.length; i++) {
        suma += precios[i]
    }
    return Math.round(suma * 100) / 100

}

function encontrarMasCaro(productos, precios) {
    let element = precios[0]
    for (let i = 1; i < precios.length; i++) {
        if (element < precios[i]) {
            element = precios[i]
        }

    }
    return productos[precios.indexOf(element)], element
}

function contarProductosCaros(precios, umbral) {
    let contador = 0
    for (let i = 0; i < precios.length; i++) {
        if (precios[i] > umbral) {
            contador++
        }

    }
    return contador
}

console.log("Total de productos: " + productos.length)
console.log("Precio total: " + calcularTotal(precios))
console.log("Producto mas caro: " + encontrarMasCaro(productos, precios))
console.log("Productos que cuestan mas de $5: " + contarProductosCaros(precios, 5))
