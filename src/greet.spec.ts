import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a default greeting when no custom greeting is provided', () => {
    const name = 'Alice';
    const result = greet(name);
    expect(result).toBe('Hello, Alice!');
  });

  it('should return a custom greeting when a custom greeting is provided', () => {
    const name = 'Bob';
    const customGreeting = 'Hi';
    const result = greet(name, customGreeting);
    expect(result).toBe('Hi, Bob!');
  });
});
