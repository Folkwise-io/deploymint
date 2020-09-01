export class VercelStrategy implements Strategy {
    execute(): Promise<ExecutionResult> {
        throw new Error("Method not implemented.");
    }
    getLabel(): string {
        return 'vercel';
    }
}