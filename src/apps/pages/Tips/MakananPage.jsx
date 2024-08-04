
import Breadcrumb from "../../components/Breadcrump"
import TableMakanan from "../../components/Table/TableMakanan"
import Navbar from "../../components/Navbar/AuthNavbar"

const MakananPage = () => {

  return(
    <div className="py-20 bg-blue-gray-800">
      <Navbar />
      <div className="flex flex-col gap-10 px-12 ">
        <div className="bg-white px-5 py-5">
        <Breadcrumb pageName="Halaman Diagnosa" />
        <TableMakanan />
        </div>
      </div>
    </div>
  )
}

export default MakananPage