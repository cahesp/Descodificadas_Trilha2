function CalculaMedia(){
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var nota4 = parseFloat(document.getElementById('nota4').value);
    var nota5 = parseFloat(document.getElementById('nota5').value);
    media(nota1, nota2, nota3, nota4, nota5);
}

function media(nota1, nota2, nota3, nota4, nota5){
    var media=((nota1+nota2+nota3+nota4+nota5)/5).toFixed(2);
    alert("A nota final é: "+ media);
}