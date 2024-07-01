
import { describe, it, expect } from 'vitest';
import { arrSum } from './src/app.js';

describe('arrSum', () => {
  it('should return 21 for arrays [1, 2, 3] and [4, 5, 6]', () => {
    expect(arrSum([1, 2, 3], [4, 5, 6])).toBe(21);
  });

  it('should return -21 for arrays [-1, -2, -3] and [-4, -5, -6]', () => {
    expect(arrSum([-1, -2, -3], [-4, -5, -6])).toBe(-21);
  });

  it('should return 15 for arrays [0, 0, 0] and [4, 5, 6]', () => {
    expect(arrSum([0, 0, 0], [4, 5, 6])).toBe(15);
  });

  it('should return 2100 for arrays [100, 200, 300] and [400, 500, 600]', () => {
    expect(arrSum([100, 200, 300], [400, 500, 600])).toBe(2100);
  });

  it('should return 0 for two empty arrays', () => {
    expect(arrSum([], [])).toBe(0);
  });

  it('should return 5 for arrays [5] and []', () => {
    expect(arrSum([5], [])).toBe(5);
  });

  it('should return -5 for arrays [-5] and []', () => {
    expect(arrSum([-5], [])).toBe(-5);
  });

  it('should return 0 for arrays [0] and [0]', () => {
    expect(arrSum([0], [0])).toBe(0);
  });
});
