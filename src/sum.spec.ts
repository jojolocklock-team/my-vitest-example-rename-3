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

  it('should return the sum of zero and a number', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  it('should return the sum of two zeros', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should handle floating point precision issues', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 5);
  });

  it('should return NaN if one of the arguments is NaN', () => {
    expect(sum(NaN, 1)).toBeNaN();
    expect(sum(1, NaN)).toBeNaN();
  });

  it('should return NaN if both arguments are NaN', () => {
    expect(sum(NaN, NaN)).toBeNaN();
  });

  it('should handle large numbers', () => {
    expect(sum(1e10, 1e10)).toBe(2e10);
  });

  it('should handle small numbers', () => {
    expect(sum(1e-10, 1e-10)).toBe(2e-10);
  });
});
