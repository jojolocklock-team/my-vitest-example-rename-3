import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a default greeting message when no custom greeting is provided', () => {
    const result = greet('John');
    expect(result).toBe('Hello, John!');
  });

  it('should return a custom greeting message when a custom greeting is provided', () => {
    const result = greet('John', 'Good morning');
    expect(result).toBe('Good morning, John!');
  });

  it('should handle an empty name with a default greeting', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should handle an empty name with a custom greeting', () => {
    const result = greet('', 'Hi');
    expect(result).toBe('Hi, !');
  });

  it('should handle special characters in the name', () => {
    const result = greet('John Doe!');
    expect(result).toBe('Hello, John Doe!!');
  });

  it('should handle special characters in the custom greeting', () => {
    const result = greet('John', 'Hey there');
    expect(result).toBe('Hey there, John!');
  });
});
