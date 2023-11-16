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

test('greet returns a greeting for two names', () => {
  const names = ['Martin', 'Haziq']
  expect(greet(names)).toBe('Hello, Martin and Haziq')
})

test('greet returns a greeting for multiple names', () => {
  const names = ['Martin', 'Haziq', 'Louis']
  expect(greet(names)).toBe('Hello, Martin, Haziq, and Louis')
})

test('greet returns a greeting for multiple names', () => {
  const names = ['Martin', 'Haziq', 'Damien', 'Roberto']
  expect(greet(names)).toBe('Hello, Martin, Haziq, Damien, and Roberto')
})
