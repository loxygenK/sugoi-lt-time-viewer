import * as Log from "../utils/Logger";

export class WebSocketListener {
  private portNumber: number;
  private wsClient: WebSocket | undefined;
  private listeners: Map<string, (argument: string, wsClient: WebSocket) => void> = new Map();

  constructor(portNumber: number) {
    this.portNumber = portNumber;
    Log.Success("WSL-CST", "Hi, I'm WebSocketListener! Call connect() to connect to the server.");
  }

  connect() {
    Log.Info("WSL-CNT", `Connecting via port number ${this.portNumber}...`);
    this.wsClient = new WebSocket(`ws://localhost:${this.portNumber}/`);
    this.wsClient.addEventListener("open", () => this.onConnected());
    this.wsClient.addEventListener("message", (e) => this.onMessage(e));
  }

  addCommandListener(command: Command, onCommand: (argument: string, wsClient: WebSocket) => void) {
    if (this.wsClient) {
      Log.Failure(
        "WSL-ACL",
        `A command listener for the command "${command}" has been added after the ` +
          `connect() is called.\n` +
          `Please consider adding command listeners before calling connect().`,
      );
    }
    this.listeners.set(command, onCommand);
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
