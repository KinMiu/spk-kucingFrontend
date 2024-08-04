import API_ENDPOINT from '../global'
import { api } from '../global/config'

const { 
  GET_GEJALA,  
  ADD_GEJALA, 
  GET_COUNT_GEJALA,
} = API_ENDPOINT

class ServiceGejala {
  static async addGejala(data) {
    const response = await api.post(ADD_GEJALA, data)
    return response.data
  }
  static async getGejala() {
    const response = await api.get(GET_GEJALA)
    return response.data
  }
  static async getCountGejala() {
    const response = await api.get(GET_COUNT_GEJALA)
    return response.data
  }
}

export default ServiceGejala