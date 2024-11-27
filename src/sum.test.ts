import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(1, -2)).toBe(-1);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it('should return the sum of a number and zero', () => {
    expect(sum(5, 0)).toBe(5);
    expect(sum(0, 5)).toBe(5);
  });

  it('should return zero when adding zero and zero', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should handle NaN inputs', () => {
    expect(sum(NaN, 1)).toBeNaN();
    expect(sum(1, NaN)).toBeNaN();
    expect(sum(NaN, NaN)).toBeNaN();
  });

  it('should handle large numbers', () => {
    expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    expect(sum(Number.MIN_SAFE_INTEGER, -1)).toBe(Number.MIN_SAFE_INTEGER - 1);
  });
});
