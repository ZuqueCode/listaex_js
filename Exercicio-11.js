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

   document.getElementById("resultado").innerHTML = `
        Salário informado: R$ ${salario}<br>
        Desconto aplicado: R$ ${desconto}<br>
        Salário líquido: R$ ${salarioLiquido}
    `;
}