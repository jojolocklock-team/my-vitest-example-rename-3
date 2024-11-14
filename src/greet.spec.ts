import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the default message when no custom greeting is provided', () => {
    const result = greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });

  it('should return a greeting with the custom message when a custom greeting is provided', () => {
    const result = greet('Bob', 'Good morning');
    expect(result).toBe('Good morning, Bob!');
  });

  it('should handle an empty name with a default greeting', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should handle an empty name with a custom greeting', () => {
    const result = greet('', 'Hi');
    expect(result).toBe('Hi, !');
  });

  it('should work with non-alphabetic characters in the name', () => {
    const result = greet('1234');
    expect(result).toBe('Hello, 1234!');
  });

  it('should work with non-alphabetic characters in the name and custom greeting', () => {
    const result = greet('1234', 'Hey');
    expect(result).toBe('Hey, 1234!');
  });

  it('should return a greeting with special characters in the custom greeting', () => {
    const result = greet('Charlie', '¡Hola');
    expect(result).toBe('¡Hola, Charlie!');
  });
});
