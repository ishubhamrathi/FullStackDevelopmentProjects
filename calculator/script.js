
const addition = () => {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var sum = parseInt(a + b);
    document.getElementById("result").innerHTML=(`Addition of : ${a} + ${b} is : ` + sum);

}



const subtract = () => {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var sub = parseInt(a - b);
    document.getElementById("result").innerHTML=(`Subtraction of : ${a} - ${b} is : ` + sub);

}



const multiply = () => {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var mul = parseInt(a * b);
    document.getElementById("result").innerHTML=(`Multiplication of : ${a} * ${b} is : ` + mul);

}




const divide = () => {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var div = parseFloat(a / b);
    document.getElementById("result").innerHTML=(`Division of : ${a} / ${b} is : ` + div);

}