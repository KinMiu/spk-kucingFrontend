
import Breadcrumb from "../../components/Breadcrump"
import TableKandang from "../../components/Table/TableKandang"
import Navbar from "../../components/Navbar/AuthNavbar"

const KandangPage = () => {

  return(
    <div className="py-20 bg-blue-gray-800">
      <Navbar />
      <div className="flex flex-col gap-10 px-12 ">
        <div className="bg-white px-5 py-5">
        <Breadcrumb pageName="Halaman Diagnosa" />
        <TableKandang />
        </div>
      </div>
    </div>
  )
}

export default KandangPage