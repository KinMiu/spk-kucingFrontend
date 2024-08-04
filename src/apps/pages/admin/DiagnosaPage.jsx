import { useEffect, useState } from "react"
import Layout from "../Layout"
import Breadcrumb from "../../components/Breadcrump"
import ServiceGejala from "../../api/service/Gejala.service"
import SweetAlertService from "../../helper/sweetalertService"
import TableDiagnosa from "../../components/Table/TableDiagnosa"

const Diagnosa = () => {
  const [dataGejala, setDataGejala] = useState([])

  const getGejala = async () => {
    try {
      const response = await ServiceGejala.getGejala()
      setDataGejala(response.data)
      // console.log(response)
    } catch (error) {
      SweetAlertService.showError('Error', error.message)
    }
  }

  useEffect(() => {
    getGejala()
  }, [])

  return(
    <Layout>
      <Breadcrumb pageName="Halaman Diagnosa" />
      <div className="flex flex-col gap-10">
        <TableDiagnosa dataGejala={dataGejala}/>
      </div>
    </Layout>
  )
}

export default Diagnosa