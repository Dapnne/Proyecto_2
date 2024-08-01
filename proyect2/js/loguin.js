
const loginButton= document.getElementById("loginButton"); //campo de entrada de loguinbuton
const form_Loguin = document.getElementById("form-loguin") //obtiene formulario de registro por su id //

loginButton.addEventListener("click", (evento) => { 
     //campos de entrada //
    const email= document.getElementById("email").value.trim() //trim hace que se eliminen sus espacios en blanco
    const pasword= document.getElementById("password").value.trim()
    evento.preventDefault() //previene que el usuario se envie automaticamente //

    //obtiene los usuarios guardados y si no hay usuarios los cinvierte en un array vacio//
    const usuarios_encontrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (email != "" && pasword != "") { //valida si los espacios estan diferentes o vacios
        const encontrados = usuarios_encontrados.find(usu => usu.correo == email && usu.contraseña == pasword) //valida que coincidan
        if (encontrados) {
            alert("Bienvenido")
            localStorage.setItem("usuarios", JSON.stringify(usuarios_encontrados)); //guarda los usuarios en el local
            window.location.href = "tareas.html"
            email = ""
            pasword = ""
        } else {
            alert("Contraseña y correo incorrectos")
        }
    }else{
        alert("INGRESE") //ingresa espacios en blanco que mande este alert
    }
})