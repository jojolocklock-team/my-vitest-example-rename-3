import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(1, -2)).toBe(-1);
  });

  it('should return 0 when both numbers are 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should handle very large numbers', () => {
    expect(sum(1e10, 1e10)).toBe(2e10);
  });

  it('should return NaN when one of the numbers is NaN', () => {
    expect(sum(NaN, 1)).toBeNaN();
    expect(sum(1, NaN)).toBeNaN();
  });

  it('should return NaN when both numbers are NaN', () => {
    expect(sum(NaN, NaN)).toBeNaN();
  });
});
