function folhaDePagamento() {
    let nome = prompt("Digite o nome do funcionário:");
    let salarioBruto = parseFloat(prompt("Digite o salário bruto:"));
    let descontoINSS = salarioBruto * 0.08;
    let salarioLiquido = salarioBruto - descontoINSS;

    console.log(`Nome: ${nome}`);
    console.log(`Salário Bruto: R$ ${salarioBruto}`);
    console.log(`Desconto INSS: R$ ${descontoINSS}`);
    console.log(`Salário Líquido: R$ ${salarioLiquido}`);
}

folhaDePagamento();