    let i = 0;

    let botoTitol = document.getElementById("botoTitol");
    let titol = document.getElementById("titol");

    botoTitol.addEventListener("click", function(){
        titol.innerHTML = "Reacció a esdeveniments (faltava el accent)";
    });


function hanFetClick(id){
        alert("S'ha fet click a: " + id);
}

//LLISTA ELEMENTS
function afegirElement(){
  i++;
  let llista = document.getElementById("llista");
  let element = document.createElement("li");
  element.id = "i";

  llista.append(element);
  element.append("Element "+i);
}

function eliminarElement(){
  let element = document.getElementById(i);
  let llista = document.getElementById("llista");

  llista.removeChild(element);
}