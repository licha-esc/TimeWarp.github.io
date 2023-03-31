function minutosAceleradosANormales() {
    let velocidadAcelerada = 1.5;

    // petición de minutos y segundos acelerados:
    let minutosAcelerados = Number(prompt("Ingrese la cantidad de minutos acelerados:"));
    let segundosAcelerados = Number(prompt("Ingrese la cantidad de segundos adicionales (si los hay):"));

    // cálculo de segundos totales:
    let segundosTotales = minutosAcelerados * 60 * (1 / velocidadAcelerada) + segundosAcelerados * (1 / velocidadAcelerada);

    // cálculo de minutos y segundos normales:  
    let minutosNormales = Math.floor(segundosTotales / 60); // Math.floor redondea los segundosTotales hacia abajo. Si el resultado es 1.33 minutos me deja en 1.
    let segundosNormales = segundosTotales % 60; // el operador módulo "%" obtiene el resto de segundosTotales divido por 60. El resto de 80 en 60 es 20.

    return `${minutosNormales}:${segundosNormales < 10 ? "0" : ""}${segundosNormales.toFixed(0)}`;
}

document.write(minutosAceleradosANormales());