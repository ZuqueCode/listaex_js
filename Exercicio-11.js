function folhaDePagamentoComDescontoVariavel() {
    let salario = parseFloat(prompt("Digite o salário:"));
    let desconto = 0;

    if (salario <= 1000) {
        desconto = salario * 0.08;
    } else if (salario <= 1500) {
        desconto = salario * 0.085;
    } else {
        desconto = salario * 0.09;
    }

    let salarioLiquido = salario - desconto;

    console.log(`Salário informado: R$ ${salario}`);
    console.log(`Desconto aplicado: R$ ${desconto}`);
    console.log(`Salário líquido: R$ ${salarioLiquido}`);
}

folhaDePagamentoComDescontoVariavel();