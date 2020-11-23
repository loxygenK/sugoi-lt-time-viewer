import * as Log from "../utils/Logger";

export class WebSocketListener {
  private wsClient: WebSocket;

  constructor(portNumber: number) {
    this.wsClient = new WebSocket(`ws://localhost:${portNumber}/`);
    this.wsClient.addEventListener("open", () => this.onConnected());
    this.wsClient.addEventListener("message", (e) => this.onMessage(e));
  }

  private onConnected(): void {
    Log.Success("WSL-CON", "Successfully connected!\nRetrieving LT Information...");
    this.requestLTInfo();
  }

  private onMessage(event: MessageEvent): void {
    const message = event.data.toString();
    if (message.startsWith("CLIENT|")) return;
    Log.Success("WSL-MSG", "A message received!");
    Log.Info("WSL-MSG", `RX<< ${message}`);

    const body = message.substring(7).split(">>");
    if (body[1].startsWith("?")) {
      Log.Failure(
        "WSL-MSG",
        `The command execution failure has been reported.\nCommand : ${body[0]}\nResponse: ${body[1]}`,
      );
      return;
    }
  }

  private requestLTInfo(): void {
    Log.Info("WSL-RLT", "Requesting current LT information.");
    this.sendText("RLT");
  }

  private sendText(text: string): void {
    Log.Info("WSL-STX", `TX>> ${text}`);
    this.wsClient.send(`CLIENT|${text}`);
  }
}
