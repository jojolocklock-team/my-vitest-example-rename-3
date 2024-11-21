import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with a custom message', () => {
    const result = greet('John', 'Good morning');
    expect(result).toBe('Good morning, John!');
  });

  it('should return a greeting with the default message when no custom greeting is provided', () => {
    const result = greet('Jane');
    expect(result).toBe('Hello, Jane!');
  });
});
