//console log 
console.log("Bonjour")

//declaration variable 
let n1 = 10;

//difference string et number 
let h = "5"; //5 ecrit en string 
console.log(h+1); //affiche 51

i = Number("5"); //5 ecrit en Number 
console.log(i+1); //affiche 6
console.log(i+2); //affiche 6

//function
function addition(n1,n2) {
   return n1 + n2;
}

function carre(nombre) {
   return nombre*nombre; 
}

function soustraire(nombre1, nombre2) {
   return nombre1 - nombre2; 
}

function multiplier(nombre1, nombre2) {
   return nombre1 * nombre2;
}

//console log avec appel function avec definition des params 
console.log(addition(n1,50)); 
console.log('');
console.log(soustraire(89,56));

//Longeur d'une chaine de caractere
let mot = "Je suis une chaine de caractere"; 
let longeurMot = mot.length; 
console.log(longeurMot);

//creation d'un objet litteral (litteral = facon de creer mon objet)
let stylo = {
type : "bille",
couleur : "bleu", 
marqu0e : "Bic", 
}
console.log(stylo.type);

//Tableau 
let myArray = ["Pierre", "Laura", "Stéphanie"]; 
console.log(myArray);
//recupere un item du tableau 
console.log(myArray[1]); //affiche Laura
//modifie un item de la liste 
let myArray2 = ["Pierre", "Marc", "Hélene"]; 
console.log(myArray2[1]);//affiche Marc 
myArray2[1] = "Paul"; 
console.log(myArray2[1]);//affiche Paul 
//push un item dans un tableau 
myArray.push('Gael');
console.log(myArray[3]);

