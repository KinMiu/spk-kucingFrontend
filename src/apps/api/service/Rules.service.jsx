import API_ENDPOINT from '../global'
import { api } from '../global/config'

const { 
  ADD_SAMPLE,
  GET_SAMPLE,
} = API_ENDPOINT

class ServiceRules {
  static async addSample(data) {
    const response = await api.post(ADD_SAMPLE, data)
    return response.data
  }
  static async getSample() {
    const response = await api.get(GET_SAMPLE)
    return response.data
  }
}

export default ServiceRules