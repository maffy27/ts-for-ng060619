import { Summator } from './task#02';

describe('task#02', () => {
  it('numbers executed correct', () => {
    Summator(1, 0);
  });

  it('string executed correct', () => {
    Summator('str_1', 'str_2', 'str_3');
  });
});
