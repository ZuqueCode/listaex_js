function transformarParImpar() {
    let numero = parseInt(prompt("Digite um número inteiro:"));

    if (numero % 2 === 0) {
        numero += 1;
        document.getElementById("resultado").textContent = "Número transformado em ímpar: " + numero;
    } else {
        numero -= 1;

        document.getElementById("resultado").textContent = "Número transformado em par: " + numero;
    }
}

