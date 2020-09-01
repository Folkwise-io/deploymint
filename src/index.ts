import strategies from './strategies';

export class Deploymint {
  listTargets() {
    return strategies.map(s => s.getLabel());
  }

  execute(label: string): Promise<ExecutionResult> {
    const strategy = strategies.find(s => s.getLabel() === label);
    
    if (!strategy) {
      throw new Error('No strategy of that name found.');
    }

    return strategy.execute();
  }
}