import { useState } from "react";
import SweetAlertService from "../../helper/sweetalertService";
import ServiceGejala from "../../api/service/Gejala.service";


const FormAddGejala = ({ onClose }) => {

  const [gejala, setGejala] = useState('')

  const handleSubmit = async () => {
    try {
      const data = {
        GEJALA: gejala,
      }
      console.log(data)
      const response = await ServiceGejala.addGejala(data)
      if (response.status === false) {
        return SweetAlertService.showError(`${response.message}`, response.message)
      }
      SweetAlertService.showSuccess(`${response.message}`, response.message)
      window.location.reload();
    } catch (error) {
      SweetAlertService.showError('Error !!', error)
    }
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <div 
      className="relative z-10" 
      aria-labelledby="modal-title" 
      role="dialog" 
      aria-modal="true"
    >
      <div 
        className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" 
        aria-hidden="true"
      >
      </div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-blue-gray-800 bg-opacity-75 transition-opacity">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Sign In Form
              </h3>
            </div>
                <div className="px-6 pt-4">
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Gejala
                    </label>
                    <input
                      type="text"
                      value={gejala}
                      onChange={(e) => setGejala(e.target.value)}
                      placeholder="Tambah Gejala"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>
              <div className="bg-gray-50 px-4 pb-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button 
                  type="button" 
                  onClick={handleSubmit}
                  className="inline-flex w-full justify-center rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-300 sm:ml-3 sm:w-auto"
                >
                  Tambah
                </button>
                <button 
                  type="button" 
                  onClick={handleClose}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default FormAddGejala