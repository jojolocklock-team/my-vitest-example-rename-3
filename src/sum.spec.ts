import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should add two positive numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should add two negative numbers correctly', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it('should add a positive and a negative number correctly', () => {
    expect(sum(2, -3)).toBe(-1);
  });

  it('should add zero correctly', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  it('should add two zeros correctly', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
