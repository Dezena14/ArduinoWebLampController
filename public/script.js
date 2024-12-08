const socket = io();

const lamp = document.getElementById("lamp");

// Atualiza o estado da lâmpada na interface
socket.on("lampState", (state) => {
  if (state) {
    lamp.src = "bulb_on.svg";
    lamp.classList.remove("off");
    lamp.classList.add("on");
    //lamp.textContent = "💡🌞"; // Lâmpada acesa
  } else {
    lamp.src = "bulb_off.svg";
    lamp.classList.remove("on");
    lamp.classList.add("off");
    //lamp.textContent = "💡🌜"; // Lâmpada apagada
  }
});