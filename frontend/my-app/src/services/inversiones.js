import appService from './app'

const inversionesServices = {}

inversionesServices.hacerInversion = function (inversion) {
  return appService.post('/invertir', inversion)
}

export default inversionesServices
