import { useEffect, useState } from "react";
import SweetAlertService from "../../helper/sweetalertService";
import ServiceDiagnosa from "../../api/service/Diagnosa.service";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const TableDiagnosa = ({ dataGejala }) => {
  const navigate = useNavigate()
  const [namaKucing, setNamaKucing] = useState('')
  const [user, setUser] = useState({})
  const [dataInput, setDataInput] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 1

  const actionData = [
    {
      ID: 2,
      Value: "Tidak"
    },
    {
      ID: 1,
      Value: "Ya"
    },

  ]

  const upsert = (prevData, newGejala) => {
    console.log(newGejala)
    const existingGejalaIndex = prevData.findIndex(g => g.IDGEJALA === newGejala.IDGEJALA);
    if (existingGejalaIndex === -1) {
      // If Gejala does not exist, add it
      return [...prevData, newGejala];
    } else {
      // If Gejala exists, update it
      return prevData.map(g =>
        g.IDGEJALA === newGejala.IDGEJALA ? newGejala : g
      );
    }
  };

  const handleButtonClick = (gejalaID, value) => {
    const newGejala = { IDGEJALA: gejalaID, VALUE: value };
    setDataInput(prevData => upsert(prevData, newGejala));
    handleNext();
  };

  const handleInput = async () => {
    try {

      console.log(dataInput)

      const updatedDataInput = dataInput.map(item => ({
        ...item,
        VALUE: item.VALUE === 2 ? 0 : item.VALUE
      }));

      const cekValueZero = updatedDataInput.every(item => item.VALUE === 0)
      const cekValueSatu = updatedDataInput.every(item => item.VALUE === 1)
      const countOfOnes = updatedDataInput.filter(item => item.VALUE === 1).length;

      if (cekValueSatu) {
        return SweetAlertService.showError("Peringatan", "Isi Gejala dengan benar.")
      }

      if (cekValueZero) {
        return SweetAlertService.showError("Peringatan", "Gejala tidak menunjukan adanya penyakit")
      }

      if (countOfOnes < 3) {
        return SweetAlertService.showError("Peringatan", "Isi Minimal 3 gejala")
      }

      if(updatedDataInput.length !== dataGejala.length || updatedDataInput === null || namaKucing === '') {
        return SweetAlertService.showError("Isi dengan lengkap !!", "Lengkapi Semua Pertanyaan")
      }
      
      const data = {
        IDPENYAKIT: "?",
        NAMAKUCING: namaKucing,
        IDUSER: user.IDUSER,
        DAFTARGEJALA: updatedDataInput
      }
      console.log("input", data)
      
      const response = await ServiceDiagnosa.addDiagnosa(data)
      console.log(response)
      if(response.result === "Unknown") {
        SweetAlertService.confirmFailed()
        setDataInput([])
        setCurrentPage(0)
        return navigate(`/diagnosa`)
      }
      SweetAlertService.showSuccess('Success', response.message)
      setDataInput([])
      if(user.ROLE === "1") {
        navigate(`/admin/hasil-diagnosa/${response.result}`)
        window.location.reload()
      } else {
        navigate(`/hasil-diagnosa/${response.result}`)
        window.location.reload()
      }
    } catch (error) {
      SweetAlertService.showError('Error', error.message)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('access-token')
    const decodeToken = jwtDecode(token)
    setUser(decodeToken)
  }, [])

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSymptoms = dataGejala.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < dataGejala.length) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };
  return (
    <div className="rounded-md border h-auto border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="m-4.5 w-100">
        <label className="mb-2.5 block text-black dark:text-white">
          Nama Kucing
        </label>
        <input
          type="text"
          value={namaKucing}
          onChange={(e) => setNamaKucing(e.target.value)}
          placeholder="Masukan Nama Kucing"
          className="w-fit rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
      <div>
      <p className="text-lg mx-4.5">Apakah kucing kamu mengalami gejala berikut ? </p>

        {
          currentSymptoms.map((gejala, index) => { 
            // console.log(dataInput.map(item => item.IDGEJALA === gejala.IDGEJALA))
            const selectedValue = dataInput
              .filter(item => item.IDGEJALA === gejala.IDGEJALA)
              .map(item => item.VALUE);
            // console.log(selectedValue)
          return (
            <div key={index} className="flex flex-col items-center gap-5 py-4.5 px-4 md:px-6 2xl:px-7.5 mt-5">
              <div className="col-span-2 md:col-span-7  items-center sm:flex">
                <p className="text-lg text-center text-black dark:text-white">{gejala.GEJALA}</p>
              </div>
              <div className="flex items-start md:items-center flex-row md:flex-row gap-3 ">
                {
                  actionData.map((item) => (
                    <button
                    key={item.ID}
                    onClick={() => handleButtonClick(gejala.IDGEJALA, item.ID)}
                    className={`${item.ID === 1 ? 'bg-blue-400 hover:bg-blue-600' : 'bg-red-400 hover:bg-red-600'}  rounded font-semibold text-white py-2 px-4 ${selectedValue.includes(item.ID) ? 'opacity-100' : 'opacity-50'}`}
                  >
                    {item.Value}
                  </button>
                  ))
                }
              </div>
            </div>
          )})
        }
      </div>
      {
        endIndex >= dataGejala.length ?
        <div className="float-end px-5 py-5">
          <button 
              onClick={handleInput}
              className="bg-orange-400 w-35 rounded font-semibold text-white py-3 px-2"
            >
              Diagnosa
            </button>
          </div>
          : null
      }

      
    </div>
  );
};

export default TableDiagnosa;
