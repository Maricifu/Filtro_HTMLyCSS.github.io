let user = document.querySelector(".user");
let gato = document.querySelector("#usuario");

user.addEventListener("click",function(){
    gato.classList.toggle("active");
});

let homem = document.querySelector(".1");
let homep = document.querySelector("#home");

homem.addEventListener("click",function(){
    homep.classList.toggle("active");
});