//-----------campos de entrada---------//
const form_registro = document.getElementById("form-registro"); //obtiene formulario de registro por su id //
const user_value = document.getElementById("input-user"); 
const correo_value = document.getElementById("input-email"); 
const contraseña_value = document.getElementById("input-contraseña");
const boton_cerrar = document.getElementById('cerra-boton');
const modal = document.getElementById('modal');

boton_cerrar.addEventListener('click', () => {
  modal.close() //boton de cierre de el evento
})

//eventos,que encuentra usuarios del local storage
form_registro.addEventListener("submit", (evento) => {
  const usuarios_guardaddos = //agrega los usuarios al local
    JSON.parse(localStorage.getItem("usuarios")) || []; // si no agrega nada, se crea arrray vacio
  evento.preventDefault(); //su comportamiento al recargar la pagina
  
//-----------validacion------------//
  if (user_value.value.trim() == "" || correo_value.value.trim() == "" || contraseña_value.value.trim() == '') {
    modal.showModal() //si los campos estan vacios, se muestra el modal
  }
  if (user_value.value.trim() != "" && correo_value.value.trim() != "" && contraseña_value.value.trim() != "") {
    const usuario = { //si los espacios no estan iguales o vacios se crea un objeto
      nombre: user_value.value, //objeto
      correo: correo_value.value, //objeto
      contraseña: contraseña_value.value, //objeto
    };
    usuarios_guardaddos.push(usuario);  //guarda la lista en el local  
    localStorage.setItem("usuarios", JSON.stringify(usuarios_guardaddos));
    form_registro.reset(); //resetea los valores
    alert("Registro exitoso") //alert de registro exitoso
    window.location.href = "loguin.html" //redirige a la pagina de loguin
   
  }
});