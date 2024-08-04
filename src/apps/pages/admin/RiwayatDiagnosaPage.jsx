import { useEffect, useState } from "react"
import Layout from "../Layout"
import Breadcrumb from "../../components/Breadcrump"
import SweetAlertService from "../../helper/sweetalertService"
import ServiceDiagnosa from "../../api/service/Diagnosa.service"
import TableRiwayatDiagnosa from "../../components/Table/TableRiwayatDiagnosa"

const RiwajatDiagnosa = () => {
  const [dataRiwayat, setDataRiwayat] = useState([])

  useEffect(() => {

    const getRiwayat = async () => {
      try {
        const response = await ServiceDiagnosa.getDiagnosa()
        setDataRiwayat(response.data)
        // console.log(response)
      } catch (error) {
        SweetAlertService.showError('Error', error.message)
      }
    }
    getRiwayat()
  }, [])

  return(
    <Layout>
      <Breadcrumb pageName="Halaman Riwayat Diagnosa" />
      <div className="flex flex-col gap-10">
        <TableRiwayatDiagnosa dataRiwayat={dataRiwayat}/>
      </div>
    </Layout>
  )
}

export default RiwajatDiagnosa