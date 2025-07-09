const formulario = document.getElementById('formulario');
const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // evita el envío inmediato

    const datos = new FormData(formulario);
    fetch(formulario.action, {
        method: formulario.method,
        body: datos,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            mensajeConfirmacion.style.display = 'block';
            formulario.reset();
        } else {
            alert("Hubo un error al enviar. Inténtalo más tarde.");
        }
    }).catch(error => {
        alert("Error de conexión. Revisa tu internet.");
    });
});



const toggleBtn = document.getElementById("mode-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Modo Claro";
  } else {
    toggleBtn.textContent = "🌙 Modo Oscuro";
  }
});

