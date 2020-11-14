import { schedule } from '../src/batcher';

export const waitBatch = () =>
  new Promise(r => {
    schedule(r);
  });
