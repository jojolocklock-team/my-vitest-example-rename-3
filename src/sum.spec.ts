@@ -0,0 +1,26 @@
+@@ -0,0 +1,25 @@
++import { describe, it, expect } from 'vitest';
++import { sum } from './sum';
++
++describe('sum', () => {
++  it('should return the sum of two positive numbers', () => {
++    expect(sum(1, 2)).toBe(3);
++  });
++
++  it('should return the sum of a positive number and a negative number', () => {
++    expect(sum(5, -3)).toBe(2);
++  });
++
++  it('should return the sum of two negative numbers', () => {
++    expect(sum(-4, -6)).toBe(-10);
++  });
++
++  it('should return the sum of a number and zero', () => {
++    expect(sum(7, 0)).toBe(7);
++    expect(sum(0, 7)).toBe(7);
++  });
++
++  it('should return zero when both numbers are zero', () => {
++    expect(sum(0, 0)).toBe(0);
++  });
++});
\ No newline at end of file