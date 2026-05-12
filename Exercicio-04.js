function ordenarValores() {
    let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));
    let num3 = parseInt(prompt("Digite o terceiro número:"));
    let num4 = parseInt(prompt("Digite o quarto número:"));

    let numeros = [num1, num2, num3, num4];
    numeros.sort((a, b) => b - a);

    document.getElementById("resultado").textContent = "Os números em ordem decrescente são: " + numeros;
}

