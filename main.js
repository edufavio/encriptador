// Funcion para encriptar el mensaje - message encrypt function
function encrypt(message) {
    message = message.replace(/e/igm, "enter");
    message = message.replace(/i/igm, "imes");
    message = message.replace(/a/igm, "ai");
    message = message.replace(/o/igm, "ober");
    message = message.replace(/u/igm, "ufat");

    return message;
}
// Funcion para desencriptar el mensaje - message decrypt function
function decrypt(message) {
    message = message.replace(/enter/igm, "e");
    message = message.replace(/imes/igm, "i");
    message = message.replace(/ai/igm, "a");
    message = message.replace(/ober/igm, "o");
    message = message.replace(/ufat/igm, "u");

    return message;
}
// Funcion para imprimir el mensaje - printing message function
function printMessage(message) {
    document.getElementById("img").style.display = "none";
    document.getElementById("output").innerHTML = message;
    document.getElementById("output").style.justifyContent = "flex-start";
    document.getElementById("output").style.justifyContent = "inherit";
    document.getElementById("output").style.display = "flex";
    document.getElementById("txtOne").style.display = "none";
    document.getElementById("txtTwo").style.display = "none";
    document.getElementById("btnCopy").style.display = "inline";
}
// Funcion para el boton Encriptar - encrypt button function
function btnEncrypt() {
    let message = document.getElementById("input").value.toLowerCase();

    if (message == "") {
        alert("Ingrese un texto a encriptar");
        document.location.href="index.html";
    }

    printMessage(encrypt(message));
}
// Funcion para el boton Desencriptar - decrypt button function
function btnDecrypt() {
    let message = document.getElementById("input").value.toLowerCase();

    if (message == "") {
        alert("Ingrese un texto a desencriptar");
        document.location.href="index.html";
    }

    printMessage(decrypt(message));
}
// Funcion para el boton Copiar - copy button function
function copy() {
    alert("Mensaje copiado");
    var messageCopy = document.getElementById("output");
    navigator.clipboard.writeText(messageCopy.innerText);
}
