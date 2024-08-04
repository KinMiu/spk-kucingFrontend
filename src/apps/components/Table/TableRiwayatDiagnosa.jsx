import FormatDateAndTime from "../../helper/dateTime"
import { useNavigate } from "react-router-dom";


const TableRiwayatDiagnosa = ({ dataRiwayat }) => {
  const navigate = useNavigate()

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

      <div>
        <div className="grid grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5">
          <div className="col-span-1 hidden sm:flex items-center">
            <p className="font-medium">No</p>
          </div>
          {/* <div className="col-span-2 flex items-center">
            <p className="font-medium">ID</p>
          </div> */}
          <div className="col-span-1 sm:col-span-2 items-center sm:flex">
            <p className="font-medium">Nama Kucing</p>
          </div>
          <div className="col-span-1 sm:col-span-2 hidden items-center sm:flex">
            <p className="font-medium">Penyakit</p>
          </div>
          <div className="col-span-2   items-center sm:flex">
            <p className="font-medium">Tanggal</p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="font-medium">Waktu</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Action</p>
          </div>
        </div>

        {
          dataRiwayat.map((gejala, index) => { 
            // console.log(gejala)
            const {formattedDate, formattedTime} = FormatDateAndTime(gejala.CREATED_AT)
          return (
            <div key={index} className="grid grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5">
              <div className="col-span-1 hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">{index+1}</p>
              </div>
              <div className="col-span-1 sm:col-span-2 items-center">
                <p className="text-sm text-black dark:text-white">{gejala.NAMAKUCING}</p>
              </div>
              <div className="col-span-2 sm:col-span-2 hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">{gejala.DATA_PENYAKIT?.PENYAKIT}</p>
              </div>
              <div className="col-span-2  items-center sm:flex">
                <p className="text-sm text-black dark:text-white">{formattedDate}</p>
              </div>
              <div className="col-span-2 hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">{formattedTime}</p>
              </div>
              <div className="col-span-1 flex items-center gap-3">
                <button 
                  onClick={() => navigate(`/admin/hasil-diagnosa/${gejala.IDPENYAKIT}`)}
                  className="bg-primary w-25 rounded font-semibold text-white py-2 px-1"
                >
                  Cek
                </button>
              </div>
            </div>
          )})
        }
      </div>
    </div>
  );
};

export default TableRiwayatDiagnosa;
