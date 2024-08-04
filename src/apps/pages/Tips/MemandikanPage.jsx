
import Breadcrumb from "../../components/Breadcrump"
import TableMemandikan from "../../components/Table/TableMemandikan"
import Navbar from "../../components/Navbar/AuthNavbar"

const MemandikanPage = () => {

  return(
    <div className="py-20 bg-blue-gray-800">
      <Navbar />
      <div className="flex flex-col gap-10 px-12 ">
        <div className="bg-white px-5 py-5">
        <Breadcrumb pageName="Halaman Diagnosa" />
        <TableMemandikan />
        </div>
      </div>
    </div>
  )
}

export default MemandikanPage