let inputEmail = document.getElementById("correo");
let button = document.getElementById("boton");

button.addEventListener("click", (event)=> {
    event.preventDefault();
    validarEmail(inputEmail.value);
})

function validarEmail(correo){
    let expresionRegular = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    if (expresionRegular.test(correo) == true){
        window.location = "./newsletter.html"
    }else{
        inputEmail.style.border = "2px solid red";
    }
    
}

 




