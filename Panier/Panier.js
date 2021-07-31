window.onload=function () {
    document.getElementById("Quantite").setAttribute("value", quantity);
    update();
}
var prix = 0;
var quantity = 1;

var nbrclick = 1;
function like() {
    nbrclick++
    if (nbrclick%2 == 0) {
        document.getElementById("heart").style.color = "red";
    }
    else {
        document.getElementById("heart").style.color = "black";
    }
}

function add() {
    quantity++;  
    document.getElementById("Quantite").setAttribute("value", quantity);
    update();

}

function moins() {
    if (quantity > 0) {
        quantity--;
    document.getElementById("Quantite").setAttribute("value", quantity);
    update();


    }
    
    
}

 
function supp() {
    quantity = 0;
    document.getElementById("Quantite").setAttribute("value", quantity);
    update();
    setTimeout(function(){
        alert("Votre panier est vide");
    }, 100);
    
       

}

function update() {
    prix = quantity * 2000;
    console.log(prix);
    document.getElementById("voila").innerHTML = "Total : " + prix;
}



