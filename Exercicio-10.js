function folhaDePagamento() {
    let nome = prompt("Digite o nome do funcionário:");
    let salarioBruto = parseFloat(prompt("Digite o salário bruto:"));
    let descontoINSS = salarioBruto * 0.08;
    let salarioLiquido = salarioBruto - descontoINSS;

   document.getElementById("resultado").innerHTML = `
        Nome: ${nome}<br>
        Salário Bruto: R$ ${salarioBruto}<br>
        Desconto INSS: R$ ${descontoINSS}<br>
        Salário Líquido: R$ ${salarioLiquido}
    `;
}