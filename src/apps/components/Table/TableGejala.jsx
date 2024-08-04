import { useEffect, useState } from "react";
import FormAddGejala from "../Form/FormAddGejala";
import { jwtDecode } from "jwt-decode";

const TableGejala = ({ dataGejala }) => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [role, setToken] = useState('')

  const openFormModal = () => {
    setIsFormModalOpen(true)
  }

  const closeFormModal = () => {
    setIsFormModalOpen(false)
  }

  useEffect(() => {
    const token = localStorage.getItem('access-token')
    const decodeToken = jwtDecode(token)
    setToken(decodeToken.ROLE)
  }, [])
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5 flex items-center justify-between">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Table Gejala
        </h4>
        {
          role === "1" ?
            <button 
              onClick={openFormModal}
              className="bg-primary w-35 rounded font-semibold text-white py-3 px-2"
            >
              Tambah Gejala
            </button>
            :
            null
        }
      </div>

      <div>
        <div className="grid grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">No</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">ID</p>
          </div>
          <div className="col-span-2 sm:col-span-5 hidden items-center sm:flex">
            <p className="font-medium">Nama</p>
          </div>
        </div>

        {
          dataGejala.map((item, index) => (
            <div key={index} className="grid grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
              <div className="col-span-1 items-center sm:flex">
                <p className="text-sm text-black dark:text-white">{index+1}</p>
              </div>
              <div className="col-span-1 hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">{item.IDGEJALA}</p>
              </div>
              <div className="col-span-2 sm:col-span-5 items-center">
                <p className="text-sm text-black dark:text-white">{item.GEJALA}</p>
              </div>
            </div>
          ))
        }
        {
          isFormModalOpen ? (
            <FormAddGejala onClose={closeFormModal} />
          ) : null
        }
      </div>
    </div>
  );
};

export default TableGejala;
