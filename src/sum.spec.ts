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
    expect(sum(1, -2)).toBe(-1);
    expect(sum(-5, 7)).toBe(2);
  });

  it('should return the sum of a number and zero', () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(5, 0)).toBe(5);
    expect(sum(0, -7)).toBe(-7);
  });
});
