type ExecutionStatus = "DEPLOYED" | "FAILED" | "MANUAL_ACTION_NEEDED";

interface ExecutionResult {
    status: ExecutionStatus;
    message: string;
    deploymentUrl?: string;
    originalError?: Error;
}

interface Strategy<O> {
    execute(): Promise<ExecutionResult>;
    getLabel(): string;
    setOptions(options: O): void;
    validateOptions(options: O): void;
}
