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

  it('should correctly add zero and a positive number', () => {
    expect(sum(0, 3)).toBe(3);
  });

  it('should correctly add zero and a negative number', () => {
    expect(sum(0, -3)).toBe(-3);
  });

  it('should return zero when both numbers are zero', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
