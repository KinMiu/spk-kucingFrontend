import { useEffect, useState } from "react"
import Layout from "../Layout"
import TablePenyakit from "../../components/Table/TablePenyakit"
import Breadcrumb from "../../components/Breadcrump"
import SweetAlertService from "../../helper/sweetalertService"
import ServicePenyakit from "../../api/service/Penyakit.service"

const Penyakit = () => {
  const [dataPenyakit, setDataPenyakit] = useState([])

  const getPenyakit = async () => {
    try {
      const response = await ServicePenyakit.getPenyakit()
      setDataPenyakit(response.data)
      console.log(response)
    } catch (error) {
      SweetAlertService.showError('Error', error.message)
    }
  }

  useEffect(() => {
    getPenyakit()
  }, [])

  return(
    <Layout>
      <Breadcrumb pageName="Halaman Penyakit" />
      <div className="flex flex-col gap-10">
        <TablePenyakit dataPenyakit={dataPenyakit}/>
      </div>
    </Layout>
  )
}

export default Penyakit