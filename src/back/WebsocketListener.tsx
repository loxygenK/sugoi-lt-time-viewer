export class WebSocketListener {
  private wsClient: WebSocket;

  constructor(portNumber: number) {
    console.log("--> Generating WebSocket...");
    this.wsClient = new WebSocket(`ws://localhost:${portNumber}/`);
    console.log("--> Registering EventListener...");
    this.wsClient.addEventListener("open", () => this.onConnected());
    this.wsClient.addEventListener("message", (e) => this.onMessage(e));
    console.log("--> Completed generating WebSocketListener.");
  }

  private onConnected(): void {
    console.log("Ok connected");
    this.sendText("echo Hi client, let's do our best together!");
  }

  private onMessage(event: MessageEvent): void {
    const message = event.data.toString();
    if (message.startsWith("CLIENT|")) return;
    console.log(`RX<< ${message}`);
    //this.sendText(`Did you just said "${message}"?`);
  }

  private sendText(text: string): void {
    console.log(`TX>> ${text}`);
    this.wsClient.send(`CLIENT|${text}`);
  }
}
