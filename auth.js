const fakeUser = 'admin'
const fakeUserPassword = 'admin'
const fakeToken = 'fakeToken'

const authenticate = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === fakeUser && password === fakeUserPassword) {
      resolve({ authenticate: true, token: fakeToken })
    } else {
      reject({ error: 'Invalid username or password' })
    }
  })
}

module.exports = {
  authenticate,
}
