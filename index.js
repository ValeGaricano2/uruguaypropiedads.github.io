document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

  
    //para ingresar a oculto
  const passwordForm = document.getElementById("passwordForm");
  const message = document.getElementById("message");
  const contraseñaEspecifica = "a";

  passwordForm.addEventListener("click", function (e) {
      e.preventDefault();

      const passwordInput = document.getElementById("password");
      const userPassword = passwordInput.value;

      if (userPassword === contraseñaEspecifica) {
          message.textContent = "¡Contraseña válida! Acceso concedido.";
          // Redirige al usuario a "oculto.html"
          window.location.href = "oculto.html";
      } else {
          message.textContent = "Contraseña incorrecta. Intenta de nuevo.";
      }
  });

});