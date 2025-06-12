import { average } from '../utils/math.js';

describe('average function', () => {
  test('should return 0 for empty array', () => {
    expect(average([])).toBe(0);
  });

  test('should return the single value for array with one element', () => {
    expect(average([5])).toBe(5);
  });

  test('should calculate correct average for multiple positive numbers', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });

  test('should calculate correct average for multiple numbers including zero', () => {
    expect(average([0, 2, 4])).toBe(2);
  });

  test('should calculate correct average for negative numbers', () => {
    expect(average([-1, -2, -3])).toBe(-2);
  });

  test('should calculate correct average for mixed positive and negative numbers', () => {
    expect(average([-2, 0, 2, 4])).toBe(1);
  });

  test('should calculate correct average for decimal numbers', () => {
    expect(average([1.5, 2.5, 3.5])).toBe(2.5);
  });

  test('should handle large arrays correctly', () => {
    const largeArray = Array.from({ length: 100 }, (_, i) => i + 1);
    expect(average(largeArray)).toBe(50.5);
  });
});
