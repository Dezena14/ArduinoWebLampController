const socket = io();

const lamp = document.getElementById("lamp");

// Atualiza o estado da lâmpada na interface
socket.on("lampState", (state) => {
  if (state) {
    // Lâmpada acesa
    lamp.src = "bulb_on.svg";
    lamp.classList.remove("off");
    lamp.classList.add("on");
  } else {
    // Lâmpada apagada
    lamp.src = "bulb_off.svg";
    lamp.classList.remove("on");
    lamp.classList.add("off");
  }
});

// Alternar entre os temas claro e escuro
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");

  // Trocar o ícone usando os ícones LightMode e DarkMode
  if (document.body.classList.contains("light-theme")) {
    themeIcon.textContent = "light_mode";
  } else {
    themeIcon.textContent = "dark_mode";
  }
});