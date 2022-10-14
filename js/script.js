var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn0 = document.getElementById("btn0");
var btn00 = document.getElementById("btn00");

var addition = document.getElementById("add");
var subtraction = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var AC = document.getElementById("AC");
var Back = document.getElementById("Back");
var equal = document.getElementById("equal");
var point = document.getElementById("point");

btn1.addEventListener("click", function() {
    document.getElementById("display").value += "1";
})
btn2.addEventListener("click", function() {
    document.getElementById("display").value += "2";
})
btn3.addEventListener("click", function() {
    document.getElementById("display").value += "3";
})
btn4.addEventListener("click", function() {
    document.getElementById("display").value += "4";
})
btn5.addEventListener("click", function() {
    document.getElementById("display").value += "5";
})
btn6.addEventListener("click", function() {
    document.getElementById("display").value += "6";
})
btn7.addEventListener("click", function() {
    document.getElementById("display").value += "7";
})
btn8.addEventListener("click", function() {
    document.getElementById("display").value += "8";
})
btn9.addEventListener("click", function() {
    document.getElementById("display").value += "9";
})
btn0.addEventListener("click", function() {
    document.getElementById("display").value += "0";
})
btn00.addEventListener("click", function() {
    document.getElementById("display").value += "00";
})
point.addEventListener("click", function() {
    document.getElementById("display").value += ".";
})
addition.addEventListener("click", function() {
    document.getElementById("display").value += "+";
})
subtract.addEventListener("click", function() {
    document.getElementById("display").value += "-";
})
multiply.addEventListener("click", function() {
    document.getElementById("display").value += "*";
})
divide.addEventListener("click", function() {
    document.getElementById("display").value += "/";
})

equal.addEventListener("click", function() {
    var equation =  document.getElementById("display").value;
    var result = eval(equation);
    document.getElementById("display").value += "=";
})

AC.addEventListener("click", function() {
    document.getElementById("display").value += "";
})

Back.addEventListener("click", function() {
    var str = document.getElementById("display").value;
    var back = str.subtr(0, str.length -1);
    document.getElementById("display").value = back;
})