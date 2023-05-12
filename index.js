function encriptar() {
    let texto = document.getElementById("texto"); 
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");

    let textoCifrado = texto.value 
        .replace(/e/gi, "enter") 
        .replace(/i/gi, "imes") 
        .replace(/a/gi, "ai") 
        .replace(/o/gi, "ober") 
        .replace(/u/gi, "ufat");

    if (texto.value) {
        tituloMensaje.innerHTML = "Texto encriptado con éxito:";
        parrafo.innerHTML = textoCifrado; 
    }
    else {
        alert("Debes ingresar algún texto"); 
    }
}

function desencriptar() {
    let texto = document.getElementById("texto"); 
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");

    let textoCifrado = texto.value 
        .replace(/enter/gi, "e") 
        .replace(/imes/gi, "i") 
        .replace(/ai/gi, "a") 
        .replace(/ober/gi, "o") 
        .replace(/ufat/gi, "u");

    if (texto.value) {
        tituloMensaje.innerHTML = "Texto desencriptado con éxito:";
        parrafo.innerHTML = textoCifrado; 
    }
    else {
        alert("Debes ingresar algún texto"); 
    }
}

const btncopiar = document.querySelector(".btn-copiar");
    btncopiar.addEventListener("click", copiar = () => {
    var contenido = document.getElementById("parrafo").innerHTML;
    var titulo = document.getElementById("titulo-mensaje");
    navigator.clipboard.writeText(contenido);
    titulo.innerHTML = "Texto copiado con éxito";
})
    