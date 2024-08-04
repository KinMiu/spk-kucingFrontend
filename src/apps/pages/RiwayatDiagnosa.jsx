import { useEffect, useState } from "react"
import Breadcrumb from "../components/Breadcrump"
import SweetAlertService from "../helper/sweetalertService"
import ServiceDiagnosa from "../api/service/Diagnosa.service"
import TableRiwayatDiagnosa from "../components/Table/TableRiwayatDiagnosa"
import { jwtDecode } from "jwt-decode"
import Navbar from "../components/Navbar/AuthNavbar"

const RiwajatDiagnosa = () => {
  const [dataRiwayat, setDataRiwayat] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('access-token')
    const decodeToken = jwtDecode(token)

    const getRiwayat = async () => {
      try {
        const response = await ServiceDiagnosa.getDiagnosaByIdUser(decodeToken.IDUSER)
        setDataRiwayat(response.data)
        // console.log(response)
      } catch (error) {
        SweetAlertService.showError('Error', error.message)
      }
    }
    getRiwayat()
  }, [])

  return(
    <div className="py-20 bg-blue-gray-800 h-lvh">
      <Navbar />
      <div className="flex flex-col gap-10 px-6 sm:px-12">
        <div className="bg-white px-5 py-5 rounded-md">
          <Breadcrumb pageName="Halaman Riwayat Diagnosa" />
          <TableRiwayatDiagnosa dataRiwayat={dataRiwayat}/>
        </div>
      </div>
    </div>
  )
}

export default RiwajatDiagnosa