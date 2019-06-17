import { Summator } from './task#02';

describe('task#02', () => {
  it('numbers executed correct', () => {
    const result: string | number = Summator(1, 0, -1);
    expect(result).toBe(0);
  });

  it('string executed correct', () => {
    const result: string | number = Summator('str_1', 'str_2', 'str_3');
    expect(result).toBe('str_1str_2str_3');
  });
});
