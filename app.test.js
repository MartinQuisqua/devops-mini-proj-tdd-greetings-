/* eslint-disable no-undef */
const greet = require('./app')

test('greet returns a greeting for the person', () => {
  expect(greet('Bob')).toBe('Hello, Bob')
})

test('greet returns a greeting for no name', () => {
  expect(greet()).toBe('Hello, my friend')
})

test('greet returns a greeting for null', () => {
  expect(greet(null)).toBe('Hello, my friend')
})

test('greet returns a greeting for empty string', () => {
  expect(greet('')).toBe('Hello, my friend')
})

test('greet returns a greeting for a UPPERCASE', () => {
  expect(greet('HAZIQ')).toBe('HELLO, HAZIQ')
})
