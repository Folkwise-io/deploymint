export class GithubPagesStrategy implements Strategy<object> {
  setOptions(options: object): void {
    console.log(options);
  }
  validateOptions(options: object): void {
    console.log(options);
  }
  execute(): Promise<ExecutionResult> {
    throw new Error('Method not implemented.');
  }
  getLabel() {
    return 'gh-pages';
  }
}
