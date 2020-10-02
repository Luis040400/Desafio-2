
var supercombo = document.getElementById('supercombo');
var combopersonal = document.getElementById('combopersonal');
var comboinfantil = document.getElementById('comboinfantil');
var ensalada = document.getElementById('ensalada');
var papafrita = document.getElementById('papafrita');
var ppgrande = document.getElementById('ppgrande');
var ppmediana = document.getElementById('ppmediana');
var pppequeña = document.getElementById('pppequeña');
var bgrande = document.getElementById('bgrande');
var bmediana = document.getElementById('bmediana');
var bpequeña = document.getElementById('bpequeña');
var cafe = document.getElementById('cafe');
var postre = document.getElementById('postre');
var totalprecio = parseFloat(totalprecio);
var tablita = document.getElementById('textsuge');
totalprecio=0;
var ctrl=false;
var input = document.getElementById('sugerencia');
var suge;
input.disabled = true;
var factura= "Factura";
document.onkeydown = function(e){
    if(e.which == 17) ctrl = true;
    if(e.which == 69 && ctrl==true){
    input.disabled = false;
    ctrl = false;
        return false;
    } 
    else if(e.which == 83 && ctrl==true){
        input.disabled = true;
         ctrl = false;
         suge = input.value;
         return false;
    }
}
function total(){
    if(supercombo.checked){
        totalprecio = totalprecio + parseFloat(supercombo.value);
        factura += `<br> Super Combo $ ${supercombo.value}`;

    }
    if(combopersonal.checked){
        totalprecio = totalprecio + parseFloat(combopersonal.value);
        factura += `<br>Combo Personal $ ${combopersonal.value}`;
    }
    if(comboinfantil.checked){
        totalprecio = totalprecio + parseFloat(comboinfantil.value);
        factura += `<br>Combo Infantil $ ${comboinfantil.value}`;
    }
    if(ensalada.checked){
        totalprecio = totalprecio + parseFloat(ensalada.value);
        factura += `<br>Ensalada $ ${ensalada.value}`;
    }
    if(papafrita.checked){
        totalprecio = totalprecio + parseFloat(papafrita.value);
        factura += `<br>Papa Frita $ ${papafrita.value}`;
    }
    if(ppgrande.checked){
        totalprecio = totalprecio + parseFloat(ppgrande.value);
        factura += `<br>Papa Grande $ ${ppgrande.value}`;
    }
    if(ppmediana.checked){
        totalprecio= totalprecio + parseFloat(ppmediana.value);
        factura += `<br>Papa mediana $ ${ppmediana.value}`;
    }
    if(pppequeña.checked){
        totalprecio = totalprecio + parseFloat(pppequeña.value);
        factura += `<br>Papa pequeña $ ${pppequeña.value}`;
    }
    if(bgrande.checked){
        totalprecio = totalprecio + parseFloat(bgrande.value);
        factura += `<br>Bebida grande $ ${bgrande.value}`;
    }
    if(bmediana.checked){
        totalprecio = totalprecio + parseFloat(bmediana.value);
        factura += `<br>Bebida mediana $ ${bmediana.value}`;
    }
    if(bpequeña.checked){
        totalprecio = totalprecio + parseFloat(bpequeña.value);
        factura += `<br>Bebida pequeña $ ${bpequeña.value}`;
    }
    if(cafe.checked){
        totalprecio = totalprecio + parseFloat(cafe.value);
        factura += `<br>Café $ ${cafe.value}`;
    }
    if(postre.checked){
        totalprecio = totalprecio + parseFloat(postre.value);
        factura += `<br>Postre $ ${postre.value}`;
    }
    var mostrar = document.getElementById('total');
    mostrar.value = totalprecio;
    var suges = document.getElementById('sugerencias');
    suges.innerHTML = `${factura}  
        <br>
        Comentarios: ${suge}
    `;

}
function poner(){
    var msj= "Para hacer un comentario presione Ctrl+e <br>"
    msj += "Para guardar el comentario presione Ctrl+s<br>"
    var t = document.getElementById('ttp');
    t.innerHTML = msj;
}
function quitar(){
    var t = document.getElementById('ttp');
    t.innerHTML = "";
}


