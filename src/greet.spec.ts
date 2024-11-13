import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the provided name and default greeting', () => {
    const result = greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });

  it('should return a custom greeting with the provided name and greeting', () => {
    const result = greet('Bob', 'Good morning');
    expect(result).toBe('Good morning, Bob!');
  });

  it('should handle empty name with default greeting', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should handle empty name with custom greeting', () => {
    const result = greet('', 'Howdy');
    expect(result).toBe('Howdy, !');
  });

  it('should handle empty greeting with name', () => {
    const result = greet('Charlie', '');
    expect(result).toBe('Hello, Charlie!');
  });

  it('should handle both name and greeting being empty', () => {
    const result = greet('', '');
    expect(result).toBe('Hello, !');
  });
});
