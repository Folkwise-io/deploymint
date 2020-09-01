interface FeaturePeekOptions {

}

export class FeaturePeekStrategy implements Strategy<FeaturePeekOptions> {
    setOptions(options: FeaturePeekOptions): void {
        throw new Error("Method not implemented.");
    }

    validateOptions(options: FeaturePeekOptions): void {
        throw new Error("Method not implemented.");
    }

    execute(): Promise<ExecutionResult> {
        throw new Error("Method not implemented.");
    }
    
    getLabel() {
        return 'featurepeek'
    }
}