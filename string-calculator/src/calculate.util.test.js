import Add from './calculate.util';

describe('String Calculator Add Function', () => {
 test('should return 0 for an empty string', () => {
    expect(Add("")).toBe(0);
  });

  test('should return the number itself if only one number is provided', () => {
    expect(Add("1")).toBe(1);
  });

  test('should return the sum of two comma-separated numbers', () => {
    expect(Add("1,5")).toBe(6);
  });

  test('should handle multiple comma-separated numbers', () => {
    expect(Add("1,2,3,4")).toBe(10);
  });

  test('should handle new lines as delimiters', () => {
    expect(Add("1\n2,3")).toBe(6);
  });

  test('should support custom delimiters', () => {
    expect(Add("//;\n1;2")).toBe(3);
  });

  test('should throw an exception for negative numbers', () => {
    expect(() => Add("1,-2,3")).toThrow("Negative input not allowed: -2");
  });

  test('should throw an exception for multiple negative numbers', () => {
    expect(() => Add("-1,-2,3")).toThrow("Negative input not allowed: -1, -2");
  });
});
