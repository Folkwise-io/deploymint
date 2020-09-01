const main = require('../../node_modules/gh-pages/bin/gh-pages.js');
import execa from "execa"

interface GithubOptions {
    source:string,
    args: string[]
}

export class GithubPagesStrategy implements Strategy<object> {
  options: GithubOptions;
  constructor() {
    this.options = { source: '', args: [] };
  }
  setOptions(options: GithubOptions): void {
    this.options = options;
  }
  validateOptions(options: GithubOptions): void {
    console.log(options);
  }
  async execute(): Promise<ExecutionResult> {
    await execa('npm', ['run build']);
    return await main([...this.options.args, "-d", this.options.source])
  }
  getLabel() {
    return 'gh-pages';
  }
}
