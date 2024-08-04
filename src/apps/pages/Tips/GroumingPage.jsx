import Breadcrumb from "../../components/Breadcrump"
import TableGrouming from "../../components/Table/TableGrouming"
import Navbar from "../../components/Navbar/AuthNavbar"

const GroumingPage = () => {

  return(
    <div className="py-20 bg-blue-gray-800">
      <Navbar />
      <div className="flex flex-col gap-10 px-12 ">
        <div className="bg-white px-5 py-5">
        <Breadcrumb pageName="Halaman Diagnosa" />
        <TableGrouming/>
        </div>
      </div>
    </div>
  )
}

export default GroumingPage