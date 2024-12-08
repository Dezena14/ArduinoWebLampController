const int buttonPin = 2; // Pino do botão
int buttonState = 0;     // Estado atual do botão
int lastState = 0;       // Último estado do botão

void setup() {
    pinMode(buttonPin, INPUT_PULLUP); // Configura o botão com resistor pull-up interno
    Serial.begin(9600);              // Inicializa comunicação serial
}

void loop() {
    buttonState = digitalRead(buttonPin);
    if (buttonState == LOW && lastState == HIGH) { // Detecta o estado do botão na borda de descida
        Serial.println("TOGGLE"); // Envia o comando TOGGLE ao servidor
        delay(200);               // Debouncing
    }
    lastState = buttonState;    // Atualiza o último estado
}