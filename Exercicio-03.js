function balancoFinanceiro() {
    let ganhoAnual = 0;
    let gastoAnual = 0;

    for (let i = 1; i <= 12; i++) {
        let ganho = parseFloat(prompt(`Digite o ganho do mês ${i}:`));
        let gasto = parseFloat(prompt(`Digite o gasto do mês ${i}:`));
        
        ganhoAnual += ganho;
        gastoAnual += gasto;
    }

    let saldo = ganhoAnual - gastoAnual;
    let resultado = saldo >= 0 ? "Lucro" : "Prejuízo";

    console.log(`Ganho anual: R$ ${ganhoAnual}`);
    console.log(`Gasto anual: R$ ${gastoAnual}`);
    console.log(`Saldo anual: R$ ${saldo}`);
    console.log(`Resultado: ${resultado}`);
}

balancoFinanceiro();