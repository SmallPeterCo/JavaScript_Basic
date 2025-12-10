var num1=10, num2=8;

document.write("num_1: " + num1 + "<br>" + "num_2: " + num2 + "<br>");
document.write("Operador > (num1>num2): " + (num1>num2) + "<br>");
document.write("Operador < (num1>num2): " + (num1<num2) + "<br>");
document.write("Operador >= (num1>=num2): " + (num1>=num2) + "<br>");
document.write("Operador <= (num1<=num2): " + (num1<=num2) + "<br>");
document.write("Operador == (num1==num2): " + (num1==num2) + "<br>");
document.write("Operador != (num1!=num2): " + (num1!=num2) + "<br>");

if (num1>5&&num2>5){
    document.write("if (num1>5&&num2>5) Ambos numeros son mayores que 5<br>");
}

if (num1>5||num2>5){
    document.write("if (num1>5||num2>5) Al menos uno de los numeros es mayor que 5<br>");
}

if (num1!=num2){
    document.write("if (num1!=num2) num_1 es distinto de num2 <br>");
}

