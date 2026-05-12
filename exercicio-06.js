function verificarVogalConsoante() {
    let letra = prompt("Digite uma letra:");

    let vogais = ["a", "e", "i", "o", "u"];

    if (vogais.includes(letra.toLowerCase())) {
        console.log("É uma vogal");
    } else {
        console.log("É uma consoante");
    }
}

verificarVogalConsoante();