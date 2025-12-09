//variables globales
var textos = "Esto es un cade de texto o string";
var numero_1 = 10, numero_2 = 20.2;
var booleano_1 = true, booleano_2 = false;
var indefinida;
var nula = null;
var nan;
//Constantes
const constante_1= "siempre constante", constante_2 = 3.1416;
//promps
let nombre = prompt("Cual es tu nombre?");


//mostrar variables en alertas
alert(textos);
alert("esto es un number "  + numero_1);
alert("esto es un number "  + numero_2);
alert("esto es un booleano " + booleano_1);
alert("esto es un booleano " + booleano_2);
alert("esto es una constante " + constante_1);
alert("esto es una constante " + constante_2);
alert("sino se inicializa una var es " + indefinida);
alert("cuando esta vacia es " + nula);
alert("not a number cuando no se puede operar " + 5 * "texto");
alert("Un prompt es una ventana que pide un dato al usuario, en este caso tu nombre es " + nombre);