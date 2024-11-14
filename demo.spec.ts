import { describe, it, expect, vi } from 'vitest';
import { sortArray } from './demo';

describe('sortArray', () => {
  it('should return an empty array when input is an empty array', () => {
    const result = sortArray([]);
    expect(result).toEqual([]);
  });

  it('should sort numbers in ascending order by default', () => {
    const numbers = [10, 5, 3, 12, 7];
    const result = sortArray(numbers);
    expect(result).toEqual([3, 5, 7, 10, 12]);
  });

  it('should sort numbers in ascending order when specified', () => {
    const numbers = [10, 5, 3, 12, 7];
    const result = sortArray(numbers, 'asc');
    expect(result).toEqual([3, 5, 7, 10, 12]);
  });

  it('should sort numbers in descending order when specified', () => {
    const numbers = [10, 5, 3, 12, 7];
    const result = sortArray(numbers, 'desc');
    expect(result).toEqual([12, 10, 7, 5, 3]);
  });

  it('should sort strings in ascending order by default', () => {
    const strings = ['apple', 'orange', 'banana', 'grape'];
    const result = sortArray(strings);
    expect(result).toEqual(['apple', 'banana', 'grape', 'orange']);
  });

  it('should sort strings in ascending order when specified', () => {
    const strings = ['apple', 'orange', 'banana', 'grape'];
    const result = sortArray(strings, 'asc');
    expect(result).toEqual(['apple', 'banana', 'grape', 'orange']);
  });

  it('should sort strings in descending order when specified', () => {
    const strings = ['apple', 'orange', 'banana', 'grape'];
    const result = sortArray(strings, 'desc');
    expect(result).toEqual(['orange', 'grape', 'banana', 'apple']);
  });

  it('should return the same array if elements are not sortable', () => {
    const mixedArray = [{}, {}];
    const result = sortArray(mixedArray as any);
    expect(result).toEqual(mixedArray);
  });

  it('should log a warning when the input array is empty', () => {
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    sortArray([]);
    expect(consoleWarnSpy).toHaveBeenCalledWith('传入的数组为空');
    consoleWarnSpy.mockRestore();
  });

  it('should log an error when array elements are not sortable', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    sortArray([{}] as any);
    expect(consoleErrorSpy).toHaveBeenCalledWith('数组元素类型不支持排序');
    consoleErrorSpy.mockRestore();
  });
});
