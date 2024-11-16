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

  it('should return the sum when one of the numbers is zero', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  it('should return NaN when one or both arguments are NaN', () => {
    expect(sum(NaN, 2)).toBeNaN();
    expect(sum(2, NaN)).toBeNaN();
    expect(sum(NaN, NaN)).toBeNaN();
  });
});
