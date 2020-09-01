import { Deploymint } from '../src';

let deploymint: Deploymint;

describe('Deploymint Class', () => {
  beforeEach(() => {
    deploymint = new Deploymint();
  });

  it('can list all the targets', () => {
    const targets = deploymint.listTargets();
    expect(targets).toMatchObject(['gh-pages', 'featurepeek', 'vercel']);
  });
});
