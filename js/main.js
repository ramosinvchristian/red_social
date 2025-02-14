$(document).ready(function() {
    $("#formLogin").submit(function(e) {
      e.preventDefault();
      let user = $("#loginUsername").val().trim();
      let pass = $("#loginPassword").val().trim();
      if (user === "" || pass === "") {
        alert("Faltan datos");
      } else {
        if (user === "demo" && pass === "demo") {
          window.location.href = "timeline.html";
        } else {
          alert("Credenciales inválidas");
        }
      }
    });
  
    $("#regGenero").change(function() {
      if ($(this).val() === "Otro") {
        $("#otroGeneroContainer").removeClass("d-none");
      } else {
        $("#otroGeneroContainer").addClass("d-none");
        $("#otroGenero").val("");
      }
    });
  
    $("#formRegistro").submit(function(e) {
      e.preventDefault();
      let user = $("#regUsername").val().trim();
      let pass = $("#regPassword").val().trim();
      let conf = $("#regConfirm").val().trim();
      let email = $("#regEmail").val().trim();
      let nombre = $("#regNombre").val().trim();
      let genero = $("#regGenero").val();
      let fecha = $("#regFecha").val();
  
      if (user === "" || pass === "" || conf === "" || email === "" || nombre === "" || genero === "[Seleccione]" || fecha === "") {
        alert("Faltan datos obligatorios");
        return;
      }
  
      if (pass !== conf) {
        alert("Las contraseñas no coinciden");
        return;
      }
  
      if (!email.includes("@") || !email.includes(".")) {
        alert("Correo inválido");
        return;
      }
  
      let fechaNacimiento = new Date(fecha);
      let hoy = new Date();
      let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
      let mes = hoy.getMonth() - fechaNacimiento.getMonth();
      if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
      }
      if (edad < 18) {
        alert("Debes tener al menos 18 años");
        return;
      }
  
      alert("Registro exitoso");
      window.location.href = "login.html";
    });
  
    $(".like-btn").click(function() {
      let likeCount = $(this).siblings(".like-count");
      let currentLikes = parseInt(likeCount.text());
      if ($(this).text() === "Like") {
        likeCount.text(currentLikes + 1);
        $(this).text("Quitar Like");
        $(this).removeClass("btn-primary");
        $(this).addClass("btn-danger");
      } else {
        likeCount.text(currentLikes - 1);
        $(this).text("Like");
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-primary");
      }
    });
  });
  