
const TableHasilDiagnosa = ({ dataGejala }) => {
  const solusiList = dataGejala && dataGejala.SOLUSI ? dataGejala.SOLUSI.split(/\d+\.\s/).filter(Boolean) : []

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-5">
      <p className="mb-3 text-base">Berdasarkan hasil diagnosa, Kucing mu menderita penyakit <b>{dataGejala.PENYAKIT} !!!</b></p>
      <p>Penyakit <b>{dataGejala.PENYAKIT}</b> biasanya disebabkan oleh <b>{dataGejala.PENYEBAB}</b>. Untuk mengatasi hal ini ada beberapa penanganan yang bisa anda lakukan.</p>
      <div className="my-5">
        <p className="font-bold text-lg">SOLUSI : </p>
        <div className="">
          {
            solusiList.map((solusi, index) => (
              <p key={index} className="my-2">{index + 1}. {solusi.trim()}</p>
            ))
          }
        </div>
      </div>
      <p>Ayo segera cek konsultasikan lebih lanjut dengan dokter untuk keselamatan kucing mu. Konsultasikan sekarang juga ke Klinik Hewan
        <a 
          className="text-blue-800 hover:text-blue-600 font-bold ms-1" 
          href="https://sumateravetcare.crativa.id/" 
          target="_blank" 
        >
          Disini
        </a>
      </p>
    </div>
  );
};

export default TableHasilDiagnosa;
