import API_ENDPOINT from '../global'
import { api } from '../global/config'

const { 
  ADD_PENYAKIT,
  GET_PENYAKIT,
  GET_PENYAKIT_BY_ID,
  GET_COUNT_PENYAKIT,
} = API_ENDPOINT

class ServicePenyakit {
  static async addPenyakit(data) {
    const response = await api.post(ADD_PENYAKIT, data)
    return response.data
  }
  static async getPenyakit() {
    const response = await api.get(GET_PENYAKIT)
    return response.data
  }
  static async getPenyakitById(ID) {
    const response = await api.get(GET_PENYAKIT_BY_ID(ID))
    return response.data
  }
  static async getCountPenyakit() {
    const response = await api.get(GET_COUNT_PENYAKIT)
    return response.data
  }
}

export default ServicePenyakit