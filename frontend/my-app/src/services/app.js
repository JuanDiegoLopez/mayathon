import axios from 'axios'
import config from './config'

const appService = axios.create({
  baseURL: config.apiUrl,
  timeout: 3000,
  headers: {'Content-Type': 'application/json'}
})

export default appService