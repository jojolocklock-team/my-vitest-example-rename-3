import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the default "Hello" when no custom greeting is provided', () => {
    const result = greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });

  it('should return a greeting with the custom greeting when provided', () => {
    const result = greet('Bob', 'Good morning');
    expect(result).toBe('Good morning, Bob!');
  });

  it('should handle an empty name with the default greeting', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should handle an empty name with a custom greeting', () => {
    const result = greet('', 'Hi');
    expect(result).toBe('Hi, !');
  });

  it('should handle an empty custom greeting', () => {
    const result = greet('Charlie', '');
    expect(result).toBe('Hello, Charlie!');
  });

  it('should handle special characters in the name', () => {
    const result = greet('D@ve#');
    expect(result).toBe('Hello, D@ve#!');
  });

  it('should handle special characters in the custom greeting', () => {
    const result = greet('Eve', 'Gr33t!ng$');
    expect(result).toBe('Gr33t!ng$, Eve!');
  });

  it('should handle both name and custom greeting as empty strings', () => {
    const result = greet('', '');
    expect(result).toBe('Hello, !');
  });

  it('should handle null or undefined as the name', () => {
    const result = greet(null as unknown as string);
    expect(result).toBe('Hello, null!');
  });

  it('should handle null or undefined as the custom greeting', () => {
    const result = greet('Frank', null as unknown as string);
    expect(result).toBe('Hello, Frank!');
  });

  it('should handle NaN as the name', () => {
    const result = greet(NaN as unknown as string);
    expect(result).toBe('Hello, NaN!');
  });

  it('should handle NaN as the custom greeting', () => {
    const result = greet('George', NaN as unknown as string);
    expect(result).toBe('Hello, George!');
  });
});
