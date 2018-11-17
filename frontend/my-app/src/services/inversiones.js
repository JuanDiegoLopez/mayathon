import appService from './app'

const inversionesServices = {}

inversionesServices.hacerInversion = function (data) {
  return appService.post('/invertir', data)
}

export default inversionesServices
