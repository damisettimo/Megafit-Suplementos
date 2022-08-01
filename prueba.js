
let button = document.getElementById("hola");

button.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 5000,
    style: {
      background: "red",
    },
  }).showToast();
}); 