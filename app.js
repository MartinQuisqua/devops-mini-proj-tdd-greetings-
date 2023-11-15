/* eslint-disable eqeqeq */
function greet (name) {
  if (name === undefined || name === null || name === '') {
    return 'Hello, my friend'
  }
  if (name == name.toUpperCase()) {
    console.log('jjgh')
    return 'HELLO, ' + name
  }
  return 'Hello, ' + name
}

module.exports = greet
