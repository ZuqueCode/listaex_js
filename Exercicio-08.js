function operacoesComVariaveis() {
    let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));

       document.getElementById("resultado").innerHTML = `
        A diferença entre os dois números é: ${num1 - num2}<br>
        O dobro do primeiro número somado ao triplo do segundo é: ${2 * num1 + 3 * num2}<br>
        A multiplicação entre os dois números é: ${num1 * num2}
    `;
}

operacoesComVariaveis();