import {IMAGES} from '../../assets/index'

const TableVaksin = () => {
  
  return (
    <div className="rounded-sm border p-5 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <p className="text-2xl font-semibold mb-5">Tips Memberi Vaksin Pada kucing</p>
      <img 
      className='mx-auto mb-5 w-full max-w-xl'
        src={IMAGES.image5} 
        alt=""
      />
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">1. Pemahaman Tentang Vaksin</p>
          <div className="flex flex-col gap-2">
            <p><b>Vaksin Utama: </b> Vaksin utama yang biasanya diberikan pada kucing termasuk FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia), rabies, dan FeLV (Feline Leukemia Virus).</p>
            <p><b>Vaksin Tambahan: </b> Vaksin tambahan mungkin termasuk vaksin untuk Bordetella, Chlamydia, dan FIP (Feline Infectious Peritonitis).</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">2. Jadwal Vaksinasi</p>
          <div className="flex flex-col gap-2">
            <p><b>Anak Kucing: </b> Anak kucing biasanya menerima vaksin pertama pada usia 6-8 minggu. Vaksin booster diberikan setiap 3-4 minggu hingga usia 16 minggu.</p>
            <p><b>Kucing Dewasa: </b> Kucing dewasa biasanya membutuhkan vaksin booster tahunan atau setiap tiga tahun, tergantung pada jenis vaksin dan rekomendasi dokter hewan.</p>
            <p><b>Vaksin Rabies: </b> Vaksin rabies pertama biasanya diberikan pada usia 12-16 minggu dan kemudian diulang setiap tahun atau tiga tahun tergantung pada peraturan setempat dan jenis vaksin yang digunakan.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">3. Konsultasi dengan Dokter Hewan</p>
          <div className="flex flex-col gap-2">
            <p><b>Pemeriksaan Kesehatan: </b> Sebelum vaksinasi, lakukan pemeriksaan kesehatan menyeluruh untuk memastikan kucing dalam kondisi sehat dan tidak mengalami stres atau sakit.</p>
            <p><b>Riwayat Kesehatan: </b> Diskusikan riwayat kesehatan kucing dengan dokter hewan, termasuk vaksinasi sebelumnya dan kondisi kesehatan yang mungkin mempengaruhi jadwal vaksinasi.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">4. Persiapan Sebelum Vaksinasi</p>
          <div className="flex flex-col gap-2">
            <p><b>Makanan dan Air: </b> Berikan makanan dan air secukupnya sebelum kunjungan ke dokter hewan untuk memastikan kucing tidak merasa lapar atau haus.</p>
            <p><b>Kenyamanan: </b> Bawa kucing dalam carrier yang nyaman dan aman untuk mengurangi stres selama perjalanan ke klinik hewan.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">5. Selama Vaksinasi</p>
          <div className="flex flex-col gap-2">
            <p><b>Penantian Tenang: </b> Tunggu dengan tenang di ruang tunggu. Usahakan kucing tetap tenang dengan memeluknya atau berbicara dengan suara lembut.</p>
            <p><b>Ketenangan: </b> Pegang kucing dengan lembut tetapi tegas selama proses vaksinasi. Dokter hewan atau asistennya biasanya akan membantu dalam menahan kucing.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">6. Pasca Vaksinasi</p>
          <div className="flex flex-col gap-2">
            <p><b>Observasi: </b> Setelah vaksinasi, observasi kucing selama beberapa jam untuk melihat reaksi terhadap vaksin. Reaksi umum termasuk sedikit lemas atau demam ringan yang biasanya hilang dalam 24-48 jam.</p>
            <p><b>Efek Samping: </b> Jika kucing menunjukkan tanda-tanda reaksi serius seperti pembengkakan, muntah, diare, atau kesulitan bernapas, segera hubungi dokter hewan.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">7. Rekam Medis</p>
          <div className="flex flex-col gap-2">
            <p><b>Catatan Vaksinasi: </b> Simpan catatan vaksinasi kucing dengan baik. Ini akan membantu Anda dan dokter hewan melacak jadwal vaksinasi berikutnya dan memastikan kucing tetap terlindungi.</p>
            <p><b>Pengingat: </b> Buat pengingat untuk vaksin booster berikutnya sesuai dengan jadwal yang diberikan oleh dokter hewan.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">8. Perawatan Lanjutan</p>
          <div className="flex flex-col gap-2">
            <p><b>Pemantauan Kesehatan: </b> Pantau kesehatan kucing secara keseluruhan setelah vaksinasi. Pastikan kucing tetap makan, minum, dan berperilaku normal.</p>
            <p><b>Perhatian Ekstra: </b> Berikan perhatian ekstra pada kucing jika ia merasa tidak nyaman setelah vaksinasi. Buat lingkungan yang tenang dan nyaman untuk memulihkannya.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableVaksin;
