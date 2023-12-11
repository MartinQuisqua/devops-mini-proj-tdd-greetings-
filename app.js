/* eslint-disable eqeqeq */
function greet (name, language = 'en') {
  if (name === undefined || name === null || name === '') {
    return 'Hello, my friend'
  }
  if (language === 'fr') {
    return 'Bonjour, ' + name
  }
  if (language === 'nl') {
    return 'Hallo, ' + name
  }
  if (Array.isArray(name)) {
    if (name.length === 2) {
      return 'Hello, ' + name[0] + ' and ' + name[1]
    } else {
      let temp = ''
      let tempUpperCase = ''
      for (let i = 0; i < name.length - 1; i++) {
        if (name[i] === name[i].toUpperCase()) {
          tempUpperCase += name[i] + ', '
        } else {
          temp += name[i] + ', '
        }
      }
      if (tempUpperCase !== '') {
        tempUpperCase = tempUpperCase.slice(0, -2)
        tempUpperCase = ' AND HELLO ' + tempUpperCase + '!'
      }
      temp = temp.slice(0, -2)
      return (
        'Hello, ' +
                temp +
                ', and ' +
                name[name.length - 1] +
                tempUpperCase
      )
    }
  }
  if (name === name.toUpperCase()) {
    return 'HELLO, ' + name
  }
  return 'Hello, ' + name
}

module.exports = greet
