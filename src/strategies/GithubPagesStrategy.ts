export class GithubPagesStrategy implements Strategy {
    execute(): Promise<ExecutionResult> {
        throw new Error("Method not implemented.");
    }
    getLabel() {
        return 'gh-pages'
    }
}