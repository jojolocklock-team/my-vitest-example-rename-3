import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(5, -3)).toBe(2);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-4, -6)).toBe(-10);
  });

  it('should return 0 when both numbers are 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should handle large numbers correctly', () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
  });
});
