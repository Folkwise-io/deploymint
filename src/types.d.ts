type ExecutionStatus = "DEPLOYED" | "FAILED" | "MANUAL_ACTION_NEEDED";

interface ExecutionResult {
    status: ExecutionStatus;
    message: string;
    deploymentUrl?: string;
    originalError?: Error;
}

interface Options {
    platform:string
}

interface Strategy<Options> {
  execute(): Promise<ExecutionResult>;
  getLabel(): string;
  setOptions(options: Options): void;
  validateOptions(options: Options): void;
}
