import { useEffect, useState } from "react";
import FormAddPenyakit from "../Form/FormAddPenyakit";
import { jwtDecode } from "jwt-decode";

const TablePenyakit = ({ dataPenyakit }) => {
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
          Table Penyakit
        </h4>
        {
          role === '1' ? 
            <button 
              onClick={openFormModal}
              className="bg-primary w-35 rounded font-semibold text-white py-3 px-2"
            >
              Tambah
            </button>
            :
            null
        }
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full">
          <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
            <div className="col-span-1 flex items-center">
              <p className="font-medium">No</p>
            </div>
            <div className="col-span-3 sm:col-span-2 items-center sm:flex">
              <p className="font-medium">Nama</p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="font-medium">Penyebab</p>
            </div>
            <div className="col-span-2 hidden sm:flex items-center">
              <p className="font-medium">Solusi</p>
            </div>
          </div>

          {
            dataPenyakit.map((data, index) => (
              <div key={index} className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div className="col-span-1  items-center sm:flex">
                  <p className="text-sm text-black dark:text-white">{index+1}</p>
                </div>
                <div className="col-span-3 sm:col-span-2 items-center sm:flex">
                  <p className="text-sm text-black dark:text-white">{data.PENYAKIT}</p>
                </div>
                <div className="col-span-2  items-center sm:flex">
                  <p className="text-sm text-black dark:text-white">{data.PENYEBAB}</p>
                </div>
                <div className="col-span-3 hidden sm:flex items-center">
                  <p className="text-sm text-black dark:text-white">{data.SOLUSI}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      
      {
        isFormModalOpen ? (
          <FormAddPenyakit onClose={closeFormModal} />
        ) : null
      }
    </div>
  );
};

export default TablePenyakit;
