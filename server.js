const express = require("express");
const http = require("http");
const { SerialPort, ReadlineParser } = require("serialport");
const socketIo = require("socket.io");

// Configuração do servidor
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Estado da lâmpada
let lampState = false; // false = apagada, true = acesa

// Configuração da porta serial
const serialPort = new SerialPort({
    path: "COM3", // Substitua pelo caminho da sua porta
    baudRate: 9600,
});

const parser = serialPort.pipe(new ReadlineParser({ delimiter: "\r\n" }));

// Quando o Arduino enviar dados
parser.on("data", (data) => {
    console.log("Recebido do Arduino:", data); // Log para verificar a entrada
    if (data.trim() === "TOGGLE") {
        lampState = !lampState;
        io.emit("lampState", lampState);
        console.log(`Estado da lâmpada: ${lampState ? "Acesa" : "Apagada"}`);
    }
  });
  

// Servir os arquivos estáticos da interface web
app.use(express.static("public"));

// Inicia o servidor
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});