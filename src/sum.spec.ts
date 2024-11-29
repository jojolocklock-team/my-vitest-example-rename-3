import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(5, -3)).toBe(2);
  });

  it('should return the sum of zero and a positive number', () => {
    expect(sum(0, 5)).toBe(5);
  });

  it('should return the sum of zero and a negative number', () => {
    expect(sum(0, -5)).toBe(-5);
  });

  it('should return zero when both numbers are zero', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should return NaN when a non-numeric value is passed as the first argument', () => {
    expect(sum(NaN, 5)).toBeNaN();
  });

  it('should return NaN when a non-numeric value is passed as the second argument', () => {
    expect(sum(5, NaN)).toBeNaN();
  });

  it('should return NaN when both arguments are non-numeric values', () => {
    expect(sum(NaN, NaN)).toBeNaN();
  });
});
