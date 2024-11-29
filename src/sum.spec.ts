import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should correctly add two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should correctly add two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it('should correctly add a positive and a negative number', () => {
    expect(sum(2, -3)).toBe(-1);
  });

  it('should correctly add zero to a number', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  it('should correctly add two zeros', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should return NaN when one of the inputs is NaN', () => {
    expect(sum(NaN, 5)).toBeNaN();
    expect(sum(5, NaN)).toBeNaN();
    expect(sum(NaN, NaN)).toBeNaN();
  });

  it('should correctly add two floating point numbers', () => {
    expect(sum(1.5, 2.5)).toBe(4);
  });

  it('should correctly add a large number and a small number', () => {
    expect(sum(1e10, 1)).toBe(10000000001);
  });
});
