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
    expect(sum(5, -3)).toBe(2);
  });

  it('should correctly add zero', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  it('should correctly add two zeros', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
