import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(5, 7)).toBe(12);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
    expect(sum(-5, -7)).toBe(-12);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(5, -3)).toBe(2);
    expect(sum(-4, 6)).toBe(2);
  });

  it('should return the sum when one number is zero', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(7, 0)).toBe(7);
  });

  it('should return NaN when one or both numbers are NaN', () => {
    expect(sum(NaN, 5)).toBeNaN();
    expect(sum(3, NaN)).toBeNaN();
    expect(sum(NaN, NaN)).toBeNaN();
  });

  it('should return the correct sum for large numbers', () => {
    expect(sum(1000000000, 2000000000)).toBe(3000000000);
  });
});
