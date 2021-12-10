//CONTACTO//

function comprobar(){
    
    let fname = document.getElementById("fname");
    let mail = document.getElementById("mail");
    let country = document.getElementById("country");
    let subject = document.getElementById("subject");

    if (fname.value == "" && mail.value == "" && country.value == "bsas" ||country.value == "otro"  && subject.value == "" ){
        
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Ups...Volve a completar los datos";

        parrafo.style.backgroundColor = "#c79393";
        parrafo.style.color = "white";
        parrafo.style.textAlign = "center";
        parrafo.style.fontSize = "25px"
        
        console.log (parrafo);
        let saludo = document.getElementById("saludo");
        saludo.appendChild(parrafo);

    } else{
        console.log ("Datos recibidos");
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Gracias por contactarnos! En breve te responderemos.";

        parrafo.style.backgroundColor = "#c79393";
        parrafo.style.color = "white";
        parrafo.style.textAlign = "center";
        parrafo.style.fontSize = "25px"
        
        console.log (parrafo);
        let saludo = document.getElementById("saludo");
        saludo.appendChild(parrafo);
    }

    console.log(fname.value);
    console.log(mail.value);
    console.log(country.value);
    console.log(subject.value);
}




///MAPA///

$("#maps").hide();

$("#btnMaps").click(function(){
    
    $("#maps").toggle(2000);
});
