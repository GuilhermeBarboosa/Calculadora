var partOne = 0;
var partTwo = 0;
var operador = null;

function pegarOperador(operadorFront) {
    operador = operadorFront;
    $("#resultado").text("");
}

function inserirValor(valor) {
    if (operador == null) {
        if (partOne == 0) {
            partOne = valor;
        } else {
            partOne += valor;
        }
        $("#resultado").text(partOne);
    } else {
        if (partTwo == 0) {
            partTwo = valor;
        } else {
            partTwo += valor;
        }
        $("#resultado").text(partTwo);
    }
}

function resultado() {
    if(operador != null){
        partOne = parseFloat(partOne);
        partTwo = parseFloat(partTwo);
        console.log(`${partOne} ${operador} ${partTwo}`);

        // $("#resultado").text(partTwo);
    }
   
}