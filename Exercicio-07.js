function sistemaDePrecos() {
    let preco = 0;
    let sabor = prompt("Escolha um sabor (a: Chocolate, b: Morango, c: Creme, d: Manga, e: Melancia, f: Vanilla Ice, g: Céu Azul, h: Brownie, i: Hawaiano):");

    switch (sabor) {
        case 'a':
            preco = 1.50;
            break;
        case 'b':
            preco = 2.50;
            break;
        case 'c':
            preco = 2.50;
            break;
        case 'd':
            preco = 3.20;
            break;
        case 'e':
            preco = 3.40;
            break;
        case 'f':
            preco = 3.00;
            break;
        case 'g':
            preco = 3.60;
            break;
        case 'h':
            preco = 4.00;
            break;
        case 'i':
            preco = 5.00;
            break;
        default:
           document.getElementById("resultado").textContent = "Sabor inválido";
            return;
    }

    document.getElementById("resultado").textContent = `Preço do picolé escolhido: R$ ${preco}`;
}
    


