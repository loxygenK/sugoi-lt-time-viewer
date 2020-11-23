import * as Log from "../utils/Logger";
import { NotEnsuredException } from "../utils/Assert";

export type Command = "SLT";

export class WebSocketListener {
  private portNumber: number;
  private wsClient: WebSocket | undefined;
  private listeners: Map<string, (argument: string, wsClient: WebSocket) => void> = new Map();

  constructor(portNumber: number) {
    this.portNumber = portNumber;
    Log.Success("WSL-CST", "Hi, I'm WebSocketListener! Call connect() to connect to the server.");
  }

  connect(): void {
    Log.Info("WSL-CNT", `Connecting via port number ${this.portNumber}...`);
    this.wsClient = new WebSocket(`ws://localhost:${this.portNumber}/`);
    this.wsClient.addEventListener("open", () => this.onConnected());
    this.wsClient.addEventListener("message", (e) => this.onMessage(e));
  }

  addCommandListener(
    command: Command,
    onCommand: (argument: string, wsClient: WebSocket) => void,
  ): void {
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
    if (this.wsClient == null) throw new NotEnsuredException("wsClient is not null");
    const message = event.data.toString();
    if (message.startsWith("CLIENT|")) return;
    Log.Success("WSL-MSG", "A message received!\n" + message);

    const body = message.substring(7).split(">>")[1];
    const command = body.split("#");
    if (command[0].startsWith("?")) {
      Log.Failure(
        "WSL-MSG",
        `The command execution failure has been reported.\nCommand : ${command[0]}\nResponse: ${body[1]}`,
      );
      return;
    }
    if (this.listeners.has(command[0])) {
      const func = this.listeners.get(command[0]);
      if (func != null) func(command.slice(1).join("#"), this.wsClient);
    }
  }

  private requestLTInfo(): void {
    Log.Info("WSL-RLT", "Requesting current LT information.");
    this.sendText("RLT");
  }

  private sendText(text: string): void {
    if (this.wsClient == null) throw new NotEnsuredException("wsClient is not null");
    Log.Info("WSL-STX", `TX>> ${text}`);
    this.wsClient.send(`CLIENT|${text}`);
  }
}
