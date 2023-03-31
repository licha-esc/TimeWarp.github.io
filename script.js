let velocidad = 1;

function setVelocidad(v) {
    velocidad = v;
}

function calcularMinutosNormales() {
    // petición de minutos y segundos:
    let minutosX = Number(document.getElementById("minutos").value);
    let segundosX = Number(document.getElementById("segundos-adicionales").value);

    // cálculo de segundos totales:
    let segundosTotales = minutosX * 60 * (1 / velocidad) + segundosX * (1 / velocidad);

    // cálculo de minutos y segundos normales:  
    let minutosNormales = Math.floor(segundosTotales / 60); // Math.floor redondea los segundosTotales hacia abajo. Si el resultado es 1.33 minutos me deja en 1.
    let segundosNormales = segundosTotales % 60; // el operador módulo "%" obtiene el resto de segundosTotales divido por 60. El resto de 80 en 60 es 20.

    document.getElementById("resultado").innerHTML = `${minutosNormales}:${segundosNormales < 10 ? "0" : ""}${segundosNormales.toFixed(0)}`;
}