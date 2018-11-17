import appService from './app'

const userService = {}

userService.signUp = function (name, lastname, phone,  email, password) {
  const data = {
    nombre: name,
    apellido: lastname,
    celular: phone,
    correo: email,
    contrasena: password
  }
  return appService.post('/registrar', data)
}

userService.signIn = function (email, password) {
  const data = {
    correo: email,
    contrasena: password
  }
  return appService.post('/login', data)
}

userService.completarPerfil = function (user) {
  return appService.put('/completarPerfil', user)
}

export default userService
