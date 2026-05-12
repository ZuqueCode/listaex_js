function verificarVogalConsoante() {
    let letra = prompt("Digite uma letra:");

    let vogais = ["a", "e", "i", "o", "u"];

    if (vogais.includes(letra.toLowerCase())) {
        document.getElementById("resultado").textContent = "É uma vogal";
    } else {
        document.getElementById("resultado").textContent = "É uma consoante";
    }
}

