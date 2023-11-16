/* eslint-disable eqeqeq */
function greet (name) {
  if (name === undefined || name === null || name === '') {
    return 'Hello, my friend'
  }
  if (name instanceof Array) {
    if (name.length === 2) {
      return 'Hello, ' + name[0] + ' and ' + name[1]
    }
  }
  if (name === name.toUpperCase()) {
    return 'HELLO, ' + name
  }
  return 'Hello, ' + name
}

module.exports = greet
