import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should correctly add two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should correctly add a positive and a negative number', () => {
    expect(sum(5, -2)).toBe(3);
  });

  it('should correctly add two negative numbers', () => {
    expect(sum(-4, -6)).toBe(-10);
  });

  it('should return 0 when adding 0 and 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should correctly add a number and zero', () => {
    expect(sum(7, 0)).toBe(7);
  });
});
