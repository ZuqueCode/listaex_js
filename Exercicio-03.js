function balancoFinanceiro() {
    let ganhoAnual = 0;
    let gastoAnual = 0;

    for (let i = 1; i <= 12; i++) {
        let ganho = parseFloat(prompt(`Digite o ganho do mês ${i}:`));
        let gasto = parseFloat(prompt(`Digite o gasto do mês ${i}:`));
        
        ganhoAnual += ganho;
        gastoAnual += gasto;
    }
let saldo = ganho - gasto;
    let resultado = saldo >= 0 ? "Lucro" : "Prejuízo";

    document.getElementById("resultado").innerHTML = `
        Ganho anual: R$ ${ganho} <br>
        Gasto anual: R$ ${gasto} <br>
        Saldo anual: R$ ${saldo} <br>
        Resultado: ${resultado}
    `;
}