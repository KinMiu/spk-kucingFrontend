import API_ENDPOINT from '../global'
import { api } from '../global/config'

const { 
  ADD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  GET_USER,
  GET_COUNT_USER
} = API_ENDPOINT

class ServiceUser {
  static async addUser(data) {
    const response = await api.post(ADD_USER, data)
    return response.data
  }
  static async loginUser(data) {
    const response = await api.post(LOGIN_USER, data)
    return response.data
  }
  static async logoutUser(data) {
    const response = await api.post(LOGOUT_USER, data)
    return response.data
  }
  static async getUser() {
    const response = await api.get(GET_USER)
    return response.data
  }
  static async getCountUser() {
    const response = await api.get(GET_COUNT_USER)
    return response.data
  }
}

export default ServiceUser