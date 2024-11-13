import { describe, it, expect } from 'vitest'
import { greet } from './greet'

describe('greet', () => {
  it('should return a greeting with the given name and default greeting', () => {
    const result = greet('Alice')
    expect(result).toBe('Hello, Alice!')
  })

  it('should return a greeting with the given name and custom greeting', () => {
    const result = greet('Bob', 'Good morning')
    expect(result).toBe('Good morning, Bob!')
  })
})
