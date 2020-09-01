export class VercelStrategy implements Strategy<object> {
  options: object;
  constructor() {
      this.options = {}
  }
  setOptions(options: object): void {
    console.log(options);
  }
  validateOptions(options: object): void {
    console.log(options);
  }
  execute(): Promise<ExecutionResult> {
    throw new Error('Method not implemented.');
  }
  getLabel(): string {
    return 'vercel';
  }
}
