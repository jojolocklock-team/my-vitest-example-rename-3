import { describe, it, expect } from 'vitest';
import { addNumbers } from './add';

describe('addNumbers', () => {
  it('should add two positive numbers correctly', () => {
    expect(addNumbers(2, 3)).toBe(5);
  });

  it('should add two negative numbers correctly', () => {
    expect(addNumbers(-2, -3)).toBe(-5);
  });

  it('should add a positive and a negative number correctly', () => {
    expect(addNumbers(5, -3)).toBe(2);
  });

  it('should add zero and a number correctly', () => {
    expect(addNumbers(0, 5)).toBe(5);
    expect(addNumbers(5, 0)).toBe(5);
  });

  it('should return zero when both numbers are zero', () => {
    expect(addNumbers(0, 0)).toBe(0);
  });
});
