interface FeaturePeekOptions {
  logged: boolean;
  init: boolean;
}

import execa from 'execa';

export class FeaturePeekStrategy implements Strategy<FeaturePeekOptions> {
  options: FeaturePeekOptions;
  constructor() {
    this.options = { logged: false, init: false };
  }
  setOptions(options: FeaturePeekOptions): void {
    throw new Error('Method not implemented.');
    console.log(options);
  }

  validateOptions(options: FeaturePeekOptions): void {
    throw new Error('Method not implemented.');
    console.log(options);
  }

  async execute(): Promise<ExecutionResult> {
    const { options } = this;
    if (options.logged) {
      return {
        status: "MANUAL_ACTION_NEEDED",
        message: "featurepeek login"
      }
    }
    if (options.init) {
      return {
        status: 'MANUAL_ACTION_NEEDED',
        message: 'featurepeek init',
      };
    }

    let success = await execa('featurepeek');
    return {
      status: 'DEPLOYED',
      message: 'Website succesfuly deployed',
      deploymentUrl: 'www.example.com',
    };
  }

  getLabel() {
    return 'featurepeek';
  }
}
