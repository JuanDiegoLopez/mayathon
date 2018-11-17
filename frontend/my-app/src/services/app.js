import axios from 'axios'
import config from './config'

const appService = axios.create({
  baseURL: config.apiUrl,
  headers: {'Content-Type': 'application/json'}
})

export default appService