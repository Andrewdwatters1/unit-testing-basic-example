const functions = require('./functions');

test('return two should return the number two', () => {
  expect(functions.returnTwo()).toBe(2);
});

test('greeting should return: Hello <name>', () => {
  expect(functions.greeting('James')).toBe('Hello, James.');
  expect(functions.greeting('Jill')).toBe('Hello, Jill.');
});

test('add function should add two numbers correctly', () => {
  expect(functions.add(1, 2)).toBe(3);
  expect(functions.add(5, 9)).toBe(14);
});

describe('unit tests for math functions', () => {
  test('multiply function should multiply two passed in numbers', () => {
    expect(functions.multiply(3, 4)).toBe(12);
    expect(functions.multiply(2, 7)).toBe(14);
  });
  test('divide function should divide the first parameter by the second', () => {
    expect(functions.divide(8, 2)).toBe(4);
    expect(functions.divide(24, 4)).toBe(6);
  });
  test('subtract function should subtract two passed in numbers', () => {
    expect(functions.subtract(13, 4)).toBe(9);
    expect(functions.subtract(3, 1)).toBe(2);
  });
})