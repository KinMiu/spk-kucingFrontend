import {IMAGES} from '../../assets/index'

const TableGrouming = () => {
  
  return (
    <div className="rounded-sm border p-5 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <p className="text-2xl font-semibold mb-5">Tips Grouming Kucing</p>
      <img 
      className='mx-auto mb-5 w-full max-w-xl'
        src={IMAGES.image1} 
        alt="" 
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">1. Menyisir Bulu Kucing</p>
          <div className="flex flex-col gap-2">
            <p><b>Frekuensi: </b>  Sisir bulu kucing secara teratur, terutama jika kucing memiliki bulu panjang. Untuk kucing berbulu pendek, menyisir seminggu sekali sudah cukup, sedangkan kucing berbulu panjang mungkin perlu disisir setiap hari.</p>
            <p><b>Alat: </b> Gunakan sisir atau sikat yang sesuai dengan jenis bulu kucing. Sisir bergigi halus baik untuk bulu pendek, sementara sikat pin atau sisir bergigi lebar cocok untuk bulu panjang.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">2. Merawat Kuku Kucing</p>
          <div className="flex flex-col gap-2">
            <p><b>Frekuensi: </b>  Potong kuku kucing setiap 1-2 minggu untuk mencegah kuku tumbuh terlalu panjang dan menyebabkan masalah.</p>
            <p><b>Alat: </b> Gunakan gunting kuku khusus kucing yang tajam dan bersih. Potong hanya ujung kuku dan hindari bagian yang mengandung pembuluh darah (quick).</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">3. Membersihkan Telinga</p>
          <div className="flex flex-col gap-2">
            <p><b>Frekuensi: </b>  Potong kuku kucing setiap 1-2 minggu untuk mencegah kuku tumbuh terlalu panjang dan menyebabkan masalah.</p>
            <p><b>Alat: </b> Gunakan gunting kuku khusus kucing yang tajam dan bersih. Potong hanya ujung kuku dan hindari bagian yang mengandung pembuluh darah (quick).</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">4. Merawat Mata</p>
          <div className="flex flex-col gap-2">
            <p><b>Frekuensi: </b>  Potong kuku kucing setiap 1-2 minggu untuk mencegah kuku tumbuh terlalu panjang dan menyebabkan masalah.</p>
            <p><b>Alat: </b> Gunakan gunting kuku khusus kucing yang tajam dan bersih. Potong hanya ujung kuku dan hindari bagian yang mengandung pembuluh darah (quick).</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">5. Menyikat Gigi</p>
          <div className="flex flex-col gap-2">
            <p><b>Frekuensi: </b>  Potong kuku kucing setiap 1-2 minggu untuk mencegah kuku tumbuh terlalu panjang dan menyebabkan masalah.</p>
            <p><b>Alat: </b> Gunakan gunting kuku khusus kucing yang tajam dan bersih. Potong hanya ujung kuku dan hindari bagian yang mengandung pembuluh darah (quick).</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">6. Konsultasi dengan Dokter Hewan</p>
          <div className="flex flex-col gap-2">
            <p><b>Frekuensi: </b>  Potong kuku kucing setiap 1-2 minggu untuk mencegah kuku tumbuh terlalu panjang dan menyebabkan masalah.</p>
            <p><b>Alat: </b> Gunakan gunting kuku khusus kucing yang tajam dan bersih. Potong hanya ujung kuku dan hindari bagian yang mengandung pembuluh darah (quick).</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableGrouming;
