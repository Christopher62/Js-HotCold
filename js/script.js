console.log("Début du Script");

var chiffre = Math.floor(Math.random()*100);
console.log("Le chiffre secret est : " + chiffre);

function enter(){
  var entree = document.getElementById('userinput').value;
  var resultat = Math.abs(chiffre - entree);

  if (resultat == 0){
    document.getElementById("mydiv").innerHTML = "Bravo";
  }
  else if (resultat <= 10){
    document.getElementById("mydiv").innerHTML = "Chaud";
  }
  else {
    document.getElementById("mydiv").innerHTML = "Froid";
  }

console.log(entree);

console.log("Fin du Script");
}
