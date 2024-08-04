
import Breadcrumb from "../../components/Breadcrump"
import TableVaksin from "../../components/Table/TableVaksin"
import Navbar from "../../components/Navbar/AuthNavbar"

const VaksinPage = () => {

  return(
    <div className="py-20 bg-blue-gray-800">
      <Navbar />
      <div className="flex flex-col gap-10 px-12 ">
        <div className="bg-white px-5 py-5">
        <Breadcrumb pageName="Halaman Diagnosa" />
        <TableVaksin />
        </div>
      </div>
    </div>
  )
}

export default VaksinPage