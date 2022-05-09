const validacion = () => {
  const form = document.getElementById("FormUser");
  const input=document.querySelectorAll(".main-form__group-input");
  form.addEventListener("submit", (e) => {
      // const expNom = /[a-zA-Z ]/g;
      // const usuario = input[0];
      // const flgNom = expNom.test(nombre.value);
      // const expCel = /^[0-9](?!.*00)\d{8}$/g;
      // const cel = document.getElementById("txtCel");
      // const flgCel = expCel.test(cel.value);
      // const expCorreo = /^[A-Za-z0-9+_.-]+@(.+)$/g;
      // const correo = input[1];
      // const flgCorreo = expCorreo.test(correo.value);
      // const mensaje = document.getElementById("txtArea");
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
      



      //nombre
      if (flgNom == false) {
          e.preventDefault();
          nombre.classList.add("contact__form-input--invalid");
          document.getElementById("nombre").innerHTML =
              "❌El campo esta vacio o tiene caracteres especiales y numeros,Ingrese un nombre correcto.";
      } else if (flgNom == true) {
          nombre.classList.remove("contact__form-input--invalid");
          nombre.classList.add("contact__form-input--valid");
          document.getElementById("nombre").innerHTML = "✅";
      }

      //celular
      if (flgCel == false) {
          e.preventDefault();
          cel.classList.add("contact__form-input--invalid");
          document.getElementById("celular").innerHTML =
              "❌El campo esta vacio o tiene mas de 9 digitos,Ingrese un numero de celular correcto.";
      } else if (flgCel == true) {
          cel.classList.remove("contact__form-input--invalid");
          cel.classList.add("contact__form-input--valid");
          document.getElementById("celular").innerHTML = "✅";
      }

      //correo
      if (flgCorreo == false) {
          e.preventDefault();
          correo.classList.add("contact__form-input--invalid");
          document.getElementById("email").innerHTML =
              "❌El campo esta vacio o no contiene el dominio de correo, Ingrese un correo electronico correcto.";
      } else if (flgCorreo == true) {
          correo.classList.remove("contact__form-input--invalid");
          correo.classList.add("contact__form-input--valid");
          document.getElementById("email").innerHTML = "✅";
      }
      //mensaje
      if (mensaje.value.length == 0 || mensaje.value.length > 500) {
          e.preventDefault();
          mensaje.classList.add("contact__form-input--invalid");
          document.getElementById("mensaje").innerHTML =
              "❌El campo esta vacio o ha ingresado mas de 500 caracteres. Ingrese 500 caracteres como maximo.";
      } else if (mensaje.value.length > 0 && mensaje.value.length <= 500) {
          mensaje.classList.remove("contact__form-input--invalid");
          mensaje.classList.add("contact__form-input--valid");
          document.getElementById("mensaje").innerHTML = "✅";
      }
  });
};

export default form;