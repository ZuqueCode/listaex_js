function contagem_nasa(){
    for(let i = 10; i > 0; i--){
        resultado += i + "<br>";
    }
    resultado += "Lançamento realizado!";
    document.getElementById("resultado").innerHTML = resultado;
}
