import { GithubPagesStrategy } from './GithubPagesStrategy';
import { FeaturePeekStrategy } from './FeaturePeekStrategy';
import { VercelStrategy } from './VercelStrategy';

const strategies: Strategy<object>[] = [
    new GithubPagesStrategy(),
    new FeaturePeekStrategy(),
    new VercelStrategy()
];

export default strategies;