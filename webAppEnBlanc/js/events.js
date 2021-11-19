function llenguatgeNavegador(){
    let llenguatge = navigator.language;
    document.getElementById("llenguatge").innerHTML = "Llenguatge del navegador: " + llenguatge;
}

function canviaText(id){
    id.innerHTML = Date();
}

function majuscules(){
    const majuscula = document.getElementById("txtNom");
    majuscula.value = majuscula.value.toUpperCase();
}

function oNo(divTitol){
divTitol.innerHTML = "EVENTS AMB JAVASCRIPT, O NO..."
}

function oSi(divTitol){
    divTitol.innerHTML = "EVENTS AMB JAVASCRIPT"
}