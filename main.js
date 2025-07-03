document.addEventListener("DOMContentLoaded", function (){
    const button = document.getElementById("button");
    const mensagem = document.getElementById("mensagem");

    button.addEventListener("click", function (){
        mensagem.style.display = "block";
    })
})