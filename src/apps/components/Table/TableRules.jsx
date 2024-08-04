import { useEffect, useState } from "react";
import ServicePenyakit from "../../api/service/Penyakit.service";
import SweetAlertService from "../../helper/sweetalertService";
import ServiceRules from "../../api/service/Rules.service";

const TableRules = ({ dataGejala }) => {
  const [dataPenyakit, setDataPenyakit] = useState([])
  const [dataInput, setDataInput] = useState([])
  const [sampleData, setSampleData] = useState([])
  const [penyakit, setPenyakit] = useState('')

  const actionData = [
    {
      ID: 0,
      Value: "Tidak"
    },
    {
      ID: 1,
      Value: "Ya"
    },

  ]

  const getPenyakit = async () => {
    try {
      const response = await ServicePenyakit.getPenyakit()
      setDataPenyakit(response.data)
      // console.log(response.data)
    } catch (error) {
      SweetAlertService.showError('Error', error.message)
    }
  }

  const getSample = async () => {
    try {
      const response = await ServiceRules.getSample()
      setSampleData(response.data)
      mapData(response.data)
      
    } catch (error) {
      SweetAlertService.showError('Error', error.message)
    }
  }

  const mapData = (data) => {
    const result = [];
  
    data.forEach((item) => {
      let penyakit = result.find(p => p.IDPENYAKIT === item.IDPENYAKIT);
  
      if (!penyakit) {
        penyakit = { IDPENYAKIT: item.IDPENYAKIT, DAFTARGEJALA: [] };
        result.push(penyakit);
      }
  
      penyakit.DAFTARGEJALA.push({ IDGEJALA: item.IDGEJALA, VALUE: item.VALUE });
    });
    console.log(result)
    // setDataSampleMapping(result)
  };

  const upsert = (array, newItem) => {
    console.log(array)
    const index = array.findIndex((item) => item.IDPENYAKIT === newItem.IDPENYAKIT && item.IDGEJALA === newItem.IDGEJALA)
    if(index === -1){
      // console.log("tidak ada yang sama", array, newItem)
      return [ ...array, newItem ]
    }else{
      // console.log("Ada yang sama", array, newItem)
      return array.map((item) => 
        item.IDPENYAKIT === newItem.IDPENYAKIT && item.IDKRITERIA === newItem.IDGEJALA ? { ...item, ...newItem } : item
    )
    }
  }

  const handleChange = (PenyakitID, gejalaID, value) => {
    const  newItem = { 
      IDPENYAKIT: PenyakitID, 
      IDGEJALA: gejalaID,
      VALUE: value
    }
    setDataInput(prevArray => upsert(prevArray, newItem))
    // console.log("Array Data Input  =>> ", dataInput)
  }

  const handleInput = async () => {
    try {
      console.log("hasil Array => ", dataInput)
      const response = await ServiceRules.addSample(dataInput)
      SweetAlertService.showSuccess('Success', response.message)
      setDataInput([])
      // console.log(response)
      window.location.reload()
    } catch (error) {
      SweetAlertService.showError('Error', error.message)
    }
  }
  
  useEffect(() => {
    getPenyakit()
    getSample()
  }, [])
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-2 py-2">
        <div className="bg-white dark:bg-form-input flex gap-3 w-full">
          <select 
          value={penyakit}
          onChange={(e) => setPenyakit(e.target.value)}
            className="appearance-none rounded border border-stroke bg-transparent py-3 px-5 sm:px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
          >
            <option value="">Pilih Penyakit</option>
            {
                dataPenyakit.map((item, index) => (
                  <option key={index} value={item.IDPENYAKIT}>
                    {item.PENYAKIT}
                  </option>
                ))
              }
          </select>
          <button 
            onClick={handleInput}
            className="bg-primary w-35 max-w-lg rounded font-semibold text-white py-3 px-2"
          >
            Simpan
          </button>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">No</p>
          </div>
          <div className="col-span-1 hidden sm:flex items-center">
            <p className="font-medium">ID</p>
          </div>
          <div className="col-span-2 sm:col-span-4 items-center sm:flex">
            <p className="font-medium">Nama</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Action</p>
          </div>
        </div>

        {
          penyakit === '' 
          ? 
          null 
          :
          dataGejala.map((gejala, index) => { 
            const dataValue = sampleData.find((item) => 
              item.IDPENYAKIT === penyakit && item.IDGEJALA === gejala.IDGEJALA 
            )
            console.log(dataValue)
          return (
            <div key={index} className="grid grid-cols-5 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
              <div className="col-span-1  items-center">
                <p className="text-sm text-black dark:text-white">{index+1}</p>
              </div>
              <div className="col-span-1 hidden hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">{gejala.IDGEJALA}</p>
              </div>
              <div className="col-span-3 sm:col-span-4 items-center sm:flex">
                <p className="text-sm text-black dark:text-white">{gejala.GEJALA}</p>
              </div>
              <div className="col-span-1 flex items-center gap-3">
                <select 
                  onChange={(e) => handleChange(penyakit, gejala.IDGEJALA, parseInt(e.target.value))}
                  // value={selectedValue}
                  className="appearance-none rounded border border-stroke bg-transparent py-3 px-3 sm:px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                >
                  <option className="disabled" >{dataValue ?  `Ya` : 'tidak'}</option>
                    {
                      actionData.map((item, index) => (
                        <option key={index} value={item.ID}>
                          {item.Value}
                        </option>
                      ))
                    }
                </select>
              </div>
            </div>
          )})
        }
      </div>
    </div>
  );
};

export default TableRules;
