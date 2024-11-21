import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the provided name and default to "Hello" when no greeting is provided', () => {
    const result = greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });

  it('should return a greeting with the provided name and custom greeting', () => {
    const result = greet('Alice', 'Hi');
    expect(result).toBe('Hi, Alice!');
  });

  it('should handle an empty string as a name with default greeting', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should handle an empty string as a name with custom greeting', () => {
    const result = greet('', 'Greetings');
    expect(result).toBe('Greetings, !');
  });

  it('should handle an empty string as a custom greeting', () => {
    const result = greet('Alice', '');
    expect(result).toBe('Hello, Alice!');
  });
});
