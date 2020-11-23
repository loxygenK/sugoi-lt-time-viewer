export class NotEnsuredException extends Error {
  constructor(whatToEnsure: string) {
    super("Not ensured!: " + whatToEnsure);
  }
}
