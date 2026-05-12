// console.log ("hello world")

// let nome = "joão";

// console.log(nome)

// const pi = 3.14;
// console.log(pi);

// let n1 = 1;
// let n2 = 2;

// console.log(n1 + n2);

// function saudacao(){
//     console.log("olá meu nome é " + nome);
// };



// function somar(n3,n4){
//     console.log(n3 + n4);

// };

// saudacao();
// somar(4,5);
function exercicio1() {
    let somaExercicio1 = 0;
    let continuarExercicio1 = true;

    while (continuarExercicio1) {
        let numeroExercicio1 = parseFloat(prompt("Digite um número (ou digite '0' para encerrar):"));

        if (isNaN(numeroExercicio1)) {
            alert("Por favor, digite um número válido!");
        } else {
            somaExercicio1 += numeroExercicio1;
        }

        continuarExercicio1 = confirm("Deseja adicionar mais um número?");
    }

    document.getElementById("resultado1").textContent = "A soma dos números é: " + somaExercicio1;
}








