import { useEffect, useState } from "react"
import Breadcrumb from "../components/Breadcrump"
import ServiceGejala from "../api/service/Gejala.service"
import SweetAlertService from "../helper/sweetalertService"
import TableDiagnosa from "../components/Table/TableDiagnosa"
import Navbar from "../components/Navbar/AuthNavbar"

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
    <div className="py-20 bg-blue-gray-800 w-full h-screen">
      <Navbar />
      <div className="flex flex-col gap-10 px-5 sm:px-12">
        <div className="bg-white px-5 py-5 rounded-md">
        <Breadcrumb pageName="Halaman Diagnosa" />
        <TableDiagnosa dataGejala={dataGejala}/>
        </div>
      </div>
    </div>
  )
}

export default Diagnosa