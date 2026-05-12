function ordenarDoisNumeros() {
    let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));

    if (num1 > num2) {
        console.log(`Os números em ordem decrescente são: ${num1}, ${num2}`);
    } else {
        console.log(`Os números em ordem decrescente são: ${num2}, ${num1}`);
    }
}

ordenarDoisNumeros();