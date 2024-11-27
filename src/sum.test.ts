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

  it('should return the sum when one number is zero', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(7, 0)).toBe(7);
  });

  it('should return zero when both numbers are zero', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should handle large numbers correctly', () => {
    expect(sum(1e10, 1e10)).toBe(2e10);
  });

  it('should handle NaN inputs', () => {
    expect(sum(NaN, 5)).toBeNaN();
    expect(sum(5, NaN)).toBeNaN();
    expect(sum(NaN, NaN)).toBeNaN();
  });
});
