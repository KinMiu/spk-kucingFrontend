import {IMAGES} from '../../assets/index'

const TableMemandikan = () => {
  
  return (
    <div className="rounded-sm border p-5 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <p className="text-2xl font-semibold mb-5">Tips Memandikan kucing</p>
      <img 
      className='mx-auto mb-5 w-full max-w-xl'
        src={IMAGES.image4} 
        alt="Memandikan" 
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">1. Persiapan Sebelum Mandi</p>
          <div className="flex flex-col gap-2">
            <p><b>Sisir Bulu: </b>  Sebelum memandikan, sisir bulu kucing untuk menghilangkan kotoran, rambut rontok, dan kusut. Ini akan mempermudah proses mandi.</p>
            <p><b>Potong Kuku: </b> Potong kuku kucing beberapa hari sebelum mandi untuk mengurangi risiko tercakar.</p>
            <p><b>Perlengkapan: </b> Siapkan semua perlengkapan yang diperlukan seperti sampo khusus kucing, handuk, sikat, dan pengering rambut jika diperlukan.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">2. Pemilihan Produk</p>
          <div className="flex flex-col gap-2">
            <p><b>Sampo: </b>  Gunakan sampo khusus kucing yang lembut dan tidak mengandung bahan kimia keras. Jangan gunakan sampo manusia karena dapat menyebabkan iritasi kulit pada kucing.</p>
            <p><b>Pengering: </b> Jika menggunakan pengering rambut, pilih yang memiliki pengaturan suhu rendah untuk menghindari luka bakar.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">3. Suasana yang Tenang</p>
          <div className="flex flex-col gap-2">
            <p><b>Lingkungan Tenang: </b>  Mandi di tempat yang tenang dan tidak bising untuk mengurangi stres pada kucing.</p>
            <p><b>Air Hangat: </b> Pastikan air yang digunakan hangat, tidak terlalu panas atau terlalu dingin. Air hangat lebih nyaman bagi kucing.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">4. Proses Mandi</p>
          <div className="flex flex-col gap-2">
            <p><b>Isi Bak: </b> Isi bak mandi atau wastafel dengan air hangat setinggi sekitar 5-10 cm (2-4 inci). Pastikan air cukup dangkal sehingga kucing tidak merasa terlalu terendam.</p>
            <p><b>Basahi Kucing: </b> Perlahan basahi kucing mulai dari leher hingga ke bawah menggunakan cangkir atau pancuran tangan yang lembut. Hindari area wajah.</p>
            <p><b>Aplikasikan Sampo: </b> Oleskan sampo secara merata pada tubuh kucing, hindari wajah dan telinga. Gosok dengan lembut untuk membersihkan bulu dan kulit.</p>
            <p><b>Bilas: </b> Bilas kucing secara menyeluruh untuk memastikan semua sampo hilang dari bulu. Sisa sampo dapat menyebabkan iritasi kulit.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">5. Membersihkan Wajah</p>
          <div className="flex flex-col gap-2">
            <p><b>Lap Basah: </b>  Gunakan kain lap basah atau kapas untuk membersihkan wajah kucing dengan lembut. Jangan gunakan air langsung untuk menghindari air masuk ke mata atau telinga.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">6. Pengeringan</p>
          <div className="flex flex-col gap-2">
            <p><b>Handuk: </b> Keringkan kucing dengan handuk lembut. Gosok dengan lembut untuk menyerap air sebanyak mungkin dari bulu.</p>
            <p><b>Pengering Rambut: </b> Jika kucing nyaman dengan suara pengering rambut, gunakan dengan pengaturan suhu rendah. Jaga jarak yang aman dari bulu kucing dan terus gerakkan pengering untuk menghindari panas berlebih.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">7. Pasca Mandi</p>
          <div className="flex flex-col gap-2">
            <p><b>Sisir Ulang: </b> Setelah kucing cukup kering, sisir bulunya lagi untuk menghindari kekusutan.</p>
            <p><b>Hadiah: </b> Beri kucing camilan atau pujian untuk memberikan pengalaman positif setelah mandi.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">8. Frekuensi Mandi</p>
          <div className="flex flex-col gap-2">
            <p><b>Kebutuhan: </b> Kucing umumnya tidak perlu dimandikan terlalu sering. Mandi setiap beberapa bulan sudah cukup, kecuali jika kucing sangat kotor atau memiliki masalah kesehatan yang memerlukan mandi lebih sering.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">9. Penanganan Khusus</p>
          <div className="flex flex-col gap-2">
            <p><b>Kucing Tua atau Sakit: </b> Jika kucing Anda tua, sakit, atau memiliki kondisi medis tertentu, konsultasikan dengan dokter hewan sebelum memandikannya.</p>
            <p><b>Kucing yang Takut Air: </b> Jika kucing sangat takut air, pertimbangkan menggunakan pembersih kering atau tisu basah khusus kucing sebagai alternatif.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableMemandikan;
