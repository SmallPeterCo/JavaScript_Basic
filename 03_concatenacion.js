var cadena1="cadena de texto 1", cadena2="cadena de texto 2";

//Concatenacion con el operador +
var resultado_1 = cadena1 + " " + cadena2;
document.write("Concatenacion con el operador + : " + resultado_1 + "<br>");

//Concatenacion con el metodo concat()
var resultado_2 = cadena1.concat(" ", cadena2);
document.write("Concatenacion con el metodo concat() : " + resultado_2 + "<br>");

//Concatenacion con el metodo $()
var resultado_3 = `${cadena1} ${cadena2}`;
document.write("Concatenacion con el metodo $() : " + resultado_3 + "<br>");

//Concatenacion con el metodo join()
var resultado_4 = [cadena1, cadena2].join(" ");
document.write("Concatenacion con el metodo join() : " + resultado_4 + "<br>");