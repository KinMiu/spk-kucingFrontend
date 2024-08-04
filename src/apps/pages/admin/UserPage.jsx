import { useEffect, useState } from "react"
import Layout from "../Layout"
import Breadcrumb from "../../components/Breadcrump"
import SweetAlertService from "../../helper/sweetalertService"
import ServiceUser from "../../api/service/User.service"
import TableUsers from "../../components/Table/TableUsers"

const UsersPage = () => {
  const [userData, setUserData] = useState([])

  const getGejala = async () => {
    try {
      const response = await ServiceUser.getUser()
      setUserData(response.data)
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
      <Breadcrumb pageName="Halaman Users" />
      <div className="flex flex-col gap-10">
        <TableUsers dataUser={userData}/>
      </div>
    </Layout>
  )
}

export default UsersPage