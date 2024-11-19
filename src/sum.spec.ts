import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(100, 200)).toBe(300);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
    expect(sum(-100, -200)).toBe(-300);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(-1, 1)).toBe(0);
    expect(sum(100, -50)).toBe(50);
  });

  it('should return the sum when one of the numbers is zero', () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  it('should return NaN when one or both numbers are NaN', () => {
    expect(sum(NaN, 1)).toBeNaN();
    expect(sum(1, NaN)).toBeNaN();
    expect(sum(NaN, NaN)).toBeNaN();
  });
});
