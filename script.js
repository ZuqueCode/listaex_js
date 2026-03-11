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

function somarNumeros(){

    let soma = 0;
    let continuar = true;

    while(continuar){
        let numero = parseFloat(prompt("digite um numero (ou digite '0' para encerrar): "));
        
        // soma = soma + numero
        soma += numero;

        if(isNaN(numero)){
            alert("por favor, digie um numero válido !");
        } else {
            soma += numero;
        }
            continuar = confirm("deseja adicionar mais um numero.");
    }
        alert("A soma dos numeros é : " + soma);
        console.log(" a soma dos numeros é:" + soma);
}

somarNumeros();