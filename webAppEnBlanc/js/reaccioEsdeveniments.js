
    let botoTitol = document.getElementById("botoTitol");
    let titol = document.getElementById("titol");
    let imatge = document.getElementById("imatge");
    let boto = document.getElementById("boto");
    let esBoto = null;

    imatge.addEventListener("click", hanFetClick(false));
    boto.addEventListener("click", hanFetClick(true));

    botoTitol.addEventListener("click", function(){
        titol.innerHTML = "Reacció a esdeveniments (faltava el accent)";
    });


function hanFetClick(esBoto){
    let resposta = document.getElementById("textResposta");
    if(esBoto == true){
        resposta.innerHTML = "Has clicat al boto";
    }else if(esBoto == false){
        resposta.innerHTML = "Has clicat a la imatge";
    }else{
        resposta.innerHTML = "Clica a una imatge";
    }
}