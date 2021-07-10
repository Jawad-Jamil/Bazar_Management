function sum(num1, num2) {

    document.getElementById("myList").innerHTML = "";
    var node = document.createElement("LI");
    var textNode = document.createTextNode(`Sum = ${num1 + num2}`);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);
}

function sub(num1, num2) {

    document.getElementById("myList").innerHTML = "";
    var node = document.createElement("LI");
    var textNode = document.createTextNode(`Sub = ${num1 - num2}`);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);
}

function mul(num1, num2) {

    document.getElementById("myList").innerHTML = "";
    var node = document.createElement("LI");
    var textNode = document.createTextNode(`Mul = ${num1 * num2}`);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);
}

function div(num1, num2) {

    document.getElementById("myList").innerHTML = "";
    var node = document.createElement("LI");
    var textNode = document.createTextNode(`Div = ${num1 / num2}`);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);
}

function mod(num1, num2) {

    document.getElementById("myList").innerHTML = "";
    var node = document.createElement("LI");
    var textNode = document.createTextNode(`Mod = ${num1 % num2}`);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);
}


