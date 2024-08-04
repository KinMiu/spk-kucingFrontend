import { useEffect, useState } from "react"
import Layout from "../Layout"
import Breadcrumb from "../../components/Breadcrump"
import TableGejala from "../../components/Table/TableGejala"
import ServiceGejala from "../../api/service/Gejala.service"
import SweetAlertService from "../../helper/sweetalertService"

const Penyakit = () => {
  const [dataGejala, setDataGejala] = useState([])

  const getGejala = async () => {
    try {
      const response = await ServiceGejala.getGejala()
      setDataGejala(response.data)
      console.log(response)
    } catch (error) {
      SweetAlertService.showError('Error', error.message)
    }
  }

  useEffect(() => {
    getGejala()
  }, [])

  return(
    <Layout>
      <Breadcrumb pageName="Halaman Gejala" />
      <div className="flex flex-col gap-10">
        <TableGejala dataGejala={dataGejala}/>
      </div>
    </Layout>
  )
}

export default Penyakit