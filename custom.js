function  bazar_calculation(price,tk) {

    document.getElementById("myList").innerHTML = "";
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`Available= ${tk-price}`);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    document.getElementById("price_box").value = "";
}


