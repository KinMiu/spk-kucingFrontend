import { useEffect, useState } from "react"
import Layout from "../Layout"
import ServiceGejala from "../../api/service/Gejala.service"
import SweetAlertService from "../../helper/sweetalertService"
import CardUser from "../../components/Card/CardUser"
import CardPenyakit from "../../components/Card/CardPenyakit"
import CardGejala from "../../components/Card/CardGejala"
import CardDiagnosa from "../../components/Card/CardDiagnosa"
import ServicePenyakit from "../../api/service/Penyakit.service"
import ServiceDiagnosa from "../../api/service/Diagnosa.service"
import { jwtDecode } from "jwt-decode"
import ServiceUser from "../../api/service/User.service"

const Homepage = () => {
  const [role, setToken] = useState('')
  const [jumlahGejala, setJumlahGejala] = useState(0)
  const [jumlahPenyakit, setJumlahPenyakit] = useState(0)
  const [jumlahDiagnosa, setJumlahDiagnosa] = useState(0)
  const [jumlahUser, setJumlahUser] = useState(0)

  const getCountUser = async () => {
    try {
      const response = await ServiceUser.getCountUser()
      setJumlahUser(response.data)
      // console.log(response)
    } catch (error) {
      SweetAlertService.showError('Error', error.message)
    }
  }
  const getCountGejala = async () => {
    try {
      const response = await ServiceGejala.getCountGejala()
      setJumlahGejala(response.data)
      // console.log(response)
    } catch (error) {
      SweetAlertService.showError('Error', error.message)
    }
  }
  const getCountPenyakit = async () => {
    try {
      const response = await ServicePenyakit.getCountPenyakit()
      setJumlahPenyakit(response.data)
      // console.log(response)
    } catch (error) {
      SweetAlertService.showError('Error', error.message)
    }
  }
  const getCountDiagnosa = async () => {
    try {
      const response = await ServiceDiagnosa.getCountDiagnosa()
      setJumlahDiagnosa(response.data)
      // console.log(response)
    } catch (error) {
      SweetAlertService.showError('Error', error.message)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('access-token')
    const decodeToken = jwtDecode(token)
    getCountUser()
    getCountGejala()
    getCountPenyakit()
    getCountDiagnosa(decodeToken.IDUSER)
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('access-token')
    const decodeToken = jwtDecode(token)
    setToken(decodeToken.ROLE)
  }, [])

  return(
    <Layout>
      <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-${role === '1' ? "4" : "3"} 2xl:gap-7.5`}>
        {
          role === '1' ? <CardUser jumlahUser={jumlahUser} /> : null
        }
        <CardPenyakit jumlahPenyakit={jumlahPenyakit}/>
        <CardGejala jumlahGejala={jumlahGejala}/>
        <CardDiagnosa jumlahDiagnosa={jumlahDiagnosa}/>
      </div>
    </Layout>
  )
}

export default Homepage