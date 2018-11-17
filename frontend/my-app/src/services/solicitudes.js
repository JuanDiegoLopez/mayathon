import appService from './app'

const solicitudesService = {}

solicitudesService.hacerSolitud = function (solicitud) {
  return appService.post('/solicitar', solicitud)
}

export default solicitudesService
