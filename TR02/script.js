function calcular() {

    const operacion = document.getElementById("operacion").value.trim();
    const resultado = document.getElementById("resultado");

    // Comprobar si está vacío
    if (operacion === "") {
        resultado.textContent = "Error: no has introducido ninguna operación.";
        return;
    }

    // Expresión regular de la calculadora
    const patron = /^\s*([+-]?\d+(?:\.\d+)?)\s*([+\-*/])\s*([+-]?\d+(?:\.\d+)?)\s*$/;

    const coincidencia = operacion.match(patron);

    // Comprobar si falta el primer número
    if (/^\s*[*/]/.test(operacion)) {
        resultado.textContent = "Error: falta el primer número.";
        return;
    }

    // Comprobar si falta el segundo número
    if (/[+\-*/]\s*$/.test(operacion)) {
        resultado.textContent = "Error: falta el segundo número.";
        return;
    }

    // Comprobar si falta el operador
    if (!/[+\-*/]/.test(operacion)) {
        resultado.textContent = "Error: falta el operador.";
        return;
    }

    // Comprobar si la operación tiene un formato incorrecto
    if (!coincidencia) {
        resultado.textContent = "Error: operación mal formada.";
        return;
    }

    // Obtener los dos números y el operador
    const numero1 = Number(coincidencia[1]);
    const operador = coincidencia[2];
    const numero2 = Number(coincidencia[3]);

    let total;

    // Realizar la operación
    switch (operador) {

        case "+":
            total = numero1 + numero2;
            break;

        case "-":
            total = numero1 - numero2;
            break;

        case "*":
            total = numero1 * numero2;
            break;

        case "/":
            if (numero2 === 0) {
                resultado.textContent = "Error: no se puede dividir entre cero.";
                return;
            }

            total = numero1 / numero2;
            break;
    }

    // Mostrar el resultado
    resultado.textContent = "Resultado: " + total;
}

