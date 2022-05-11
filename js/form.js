const formulario = document.getElementById("formUser");
debugger;
const validacion = () => {
  console.log("hola mundo");
  formulario.addEventListener("submit", (e) => {
    const input=document.querySelectorAll(".main-form__group-input");
    console.log(input);
      const usuario = input[0];
      const correo = input[1];
      const nombres=input[2];
      const apellidos=input[3];
      const direccion=input[4];
      const ciudad=input[5];
      const codigo=input[6];
      const acerca=input[7];
      const expUsuario = /[a-zA-Z\d]/g;
      const expCorreo = /^[A-Za-z0-9+_.-]+@(.+)$/g;
      const expNom = /[a-zA-Z ]/g;
      const expDireccion=/[A-Za-z0-9_]/g;
      const flgUsuario = expUsuario.test(usuario.value);
      const flgCorreo= expCorreo.test(correo.value);
      const flgNombres=expNom.test(nombres.value);
      const flgApellidos=expNom.test(apellidos.value);
      const flgDireccion=expDireccion.test(direccion.value);
      const flgCiudad=expNom.test(ciudad.value);
      const flgCodigo=expUsuario.test(codigo.value);
  



//usuario
if(flgUsuario==false){
  e.preventDefault();
  
    Swal.fire({
    icon: 'error',
    title: 'El campo esta vacio',
    text: 'Ingrese un nombre de usuario valido',
    timer:2000
  })}else{
    alert("hola mundo");
  };
if(flgCorreo==false){
  e.preventDefault();
  
    Swal.fire({
    icon: 'error',
    title: 'El campo esta vacio o el correo electronico es invalido',
    text: 'Ingrese un correo electronico valido',
    timer:2000
  })};
if(flgNombres==false){
  e.preventDefault();
  
    Swal.fire({
    icon: 'error',
    title: 'El campo esta vacio o el Nombre contiene numeros o caracteres especiales',
    text: 'Ingrese un Nombre Valido',
    timer:2000
  })};
if(flgApellidos==false){
  e.preventDefault();
  
    Swal.fire({
    icon: 'error',
    title: 'El campo esta vacio o el Apellido contiene numeros o caracteres especiales',
    text: 'Ingrese un Apellido Valido',
    timer:2000
  })};
if(flgDireccion==false){
  e.preventDefault();
  
    Swal.fire({
    icon: 'error',
    title: 'El campo esta vacio o la direccion es invalida',
    text: 'Ingrese una direccion correcta',
    timer:2000
  })};

  if(flgCiudad==false){
    e.preventDefault();
    
      Swal.fire({
      icon: 'error',
      title: 'El campo esta vacio',
      text: 'Ingrese la Ciudad',
      timer:2000
    })};
  if(flgCodigo==false){
    e.preventDefault();
    
      Swal.fire({
      icon: 'error',
      title: 'El campo esta vacio o el codigo de postal es invalido',
      text: 'Ingrese un codigo de postal correcto',
      timer:2000
    })};







    
      
  });
};

export default validacion;