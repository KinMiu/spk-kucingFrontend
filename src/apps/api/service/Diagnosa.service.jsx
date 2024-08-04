import API_ENDPOINT from '../global'
import { api } from '../global/config'

const { 
  ADD_DIAGNOSA,
  GET_DIAGNOSA,
  GET_COUNT_DIAGNOSA,
  GET_DIAGNOSA_BY_IDUSER,
} = API_ENDPOINT

class ServiceDiagnosa {
  static async addDiagnosa(data) {
    const response = await api.post(ADD_DIAGNOSA, data)
    return response.data
  }
  static async getDiagnosa() {
    const response = await api.get(GET_DIAGNOSA)
    return response.data
  }
  static async getDiagnosaByIdUser(ID) {
    const response = await api.get(GET_DIAGNOSA_BY_IDUSER(ID))
    return response.data
  }
  static async getCountDiagnosa() {
    const response = await api.get(GET_COUNT_DIAGNOSA)
    return response.data
  }
}

export default ServiceDiagnosa