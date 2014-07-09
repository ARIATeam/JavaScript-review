function validarForm(){
   
   //alert("Validando");
  var verificar = true;
  var expRegNombre= /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  var formulario = document.getElementById("contacto-frm");
  var nombre = document.getElementById("nombre");
  var edad = document.getElementById("edad");
  var email = document.getElementById("email");
  var masculino = document.getElementById("M");
  var femenino = document.getElementById("F");
  var asunto = document.getElementById("asunto");
  var comentarios = document.getElementById("comentarios");

  if(!nombre.value){
    alert("El campo nombre es requerido");
    nombre.focus();
    verificar = false;
  }
  else if(!expRegNombre.exec(nombre.value)){
    alert("El campo nombre solo acepta letras y espacios en blanco");
    nombre.focus();
    verificar = false;
  }

  else if(!edad.value){
    alert("El campo edad es requerido");
    edad.focus();
    verificar = false;
  }

  else if(isNaN(edad.value)) //Isnotanumer
  {
    alert("El campo edad solo acepta numeros");
    edad.focus();
    verificar = false;
  }

  else if(edad.value < 18 || edad.value > 60){
    alert("Debes estar en un rango de edad entre los 18 y 60 años");
    edad.focus();
    verificar = false;
  }

  else if(!email.value){
    alert("El campo email es requerido");
    email.focus();
    verificar = false;
  }

  else if(!expRegEmail.exec(email.value)){
    alert("El campo email no es valido");
    email.focus();
    verificar = false;
  }

  else if(!masculino.checked && !femenino.checked){
    alert("El campo sexo es requerido");
    femenino.focus();
    verificar = false;
  }

  else if(!asunto.value){
    alert("El campo asunto es requerido");
    asunto.focus();
    verificar = false;
  }

  else if(!comentarios.value){
    alert("El campo comentarios es requerido");
    comentarios.focus();
    verificar = false;
  }

  else if(comentarios.length > 255){
    alert("El campo comentarios no puede terner mas de 255 caracteres");
    comentarios.focus();
    verificar = false;
  }

  if(verificar){
    alert("se ha procesado el formulario");
    document.contacto_frm.submit();
  }
   
}

function limpiarForm(){
  alert("Limpiado");
  document.getElementById("contacto-frm").reset();
}

window.onload = function(){
  var botonEnviar, botonLimpiar;
  botonLimpiar= document.getElementById("limpiar");
  botonLimpiar.onclick = limpiarForm;

  botonEnviar= document.contacto_frm.enviar_btn;
  botonEnviar.onclick =validarForm;
}
