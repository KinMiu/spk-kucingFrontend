import {IMAGES} from '../../assets/index'

const TableKandang = () => {
  
  return (
    <div className="rounded-sm border p-5 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <p className="text-2xl font-semibold mb-5">Tips Kandang Pada kucing</p>
      <img 
      className='mx-auto mb-5 w-full max-w-xl'
        src={IMAGES.image3} 
        alt=""
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">1. Ukuran Kandang</p>
          <div className="flex flex-col gap-2">
            <p><b>Cukup Ruang: </b> Pastikan kandang cukup besar untuk memungkinkan kucing bergerak, berbaring, dan berdiri dengan nyaman. Kandang harus memiliki ruang yang cukup untuk tempat tidur, tempat makan, dan kotak pasir.</p>
            <p><b>Ketinggian: </b> Kucing suka memanjat dan memiliki tempat tinggi untuk mengawasi lingkungan mereka. Jika memungkinkan, pilih kandang yang memiliki tingkat atau platform yang lebih tinggi.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">2. Lokasi Kandang</p>
          <div className="flex flex-col gap-2">
            <p><b>Tempat yang Tenang: </b> Letakkan kandang di tempat yang tenang dan tidak terlalu bising, jauh dari area yang sering dilalui orang.</p>
            <p><b>Ventilasi: </b> Pastikan kandang memiliki ventilasi yang baik untuk menjaga sirkulasi udara yang sehat.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">3. Kebersihan Kandang</p>
          <div className="flex flex-col gap-2">
            <p><b>Bersihkan Secara Rutin: </b> Bersihkan kandang secara rutin, termasuk tempat tidur, mangkuk makan dan minum, serta kotak pasir.</p>
            <p><b>Desinfeksi: </b> Gunakan desinfektan yang aman untuk hewan peliharaan untuk membersihkan kandang, terutama jika kucing menunjukkan tanda-tanda penyakit.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">4. Tempat Tidur</p>
          <div className="flex flex-col gap-2">
            <p><b>Nyaman: </b> Sediakan tempat tidur yang nyaman dan hangat. Gunakan bahan yang lembut seperti selimut atau alas tidur khusus kucing.</p>
            <p><b>Bisa Dicuci: </b> Pilih tempat tidur yang mudah dicuci untuk menjaga kebersihannya.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">5. Tempat Makan dan Minum</p>
          <div className="flex flex-col gap-2">
            <p><b>Mudah Diakses: </b>  Letakkan mangkuk makan dan minum di tempat yang mudah dijangkau oleh kucing.</p>
            <p><b>Bersih: </b> Gantilah air setiap hari dan bersihkan mangkuk makanan dan minuman secara teratur untuk mencegah pertumbuhan bakteri.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">6. Kotak Pasir</p>
          <div className="flex flex-col gap-2">
            <p><b>Akses Mudah: </b>  Tempatkan kotak pasir di dalam kandang dan pastikan mudah diakses oleh kucing.</p>
            <p><b>Jenis Pasir: </b>  Pilih pasir kucing yang disukai kucing Anda dan yang mampu menyerap bau dengan baik.</p>
            <p><b>Bersihkan Rutin: </b>  Gantilah pasir secara rutin dan bersihkan kotak pasir setiap hari.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">7. Keamanan</p>
          <div className="flex flex-col gap-2">
            <p><b>Tidak Berbahaya: </b>  Pastikan tidak ada benda tajam atau berbahaya di dalam kandang yang dapat melukai kucing.</p>
            <p><b>Kunci Aman: </b>  Jika kandang memiliki pintu, pastikan kunci pintu berfungsi dengan baik untuk mencegah kucing keluar tanpa pengawasan.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">8. Perhatikan Suhu</p>
          <div className="flex flex-col gap-2">
            <p><b>Hangat dan Sejuk: </b>  Pastikan kandang berada di tempat yang tidak terlalu panas atau terlalu dingin. Kucing lebih nyaman pada suhu yang stabil dan tidak ekstrem.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">6. Kotak Pasir</p>
          <div className="flex flex-col gap-2">
            <p><b>Akses Mudah: </b>  Tempatkan kotak pasir di dalam kandang dan pastikan mudah diakses oleh kucing.</p>
            <p><b>Jenis Pasir: </b>  Pilih pasir kucing yang disukai kucing Anda dan yang mampu menyerap bau dengan baik.</p>
            <p><b>Bersihkan Rutin: </b>  Gantilah pasir secara rutin dan bersihkan kotak pasir setiap hari.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">6. Kotak Pasir</p>
          <div className="flex flex-col gap-2">
            <p><b>Akses Mudah: </b>  Tempatkan kotak pasir di dalam kandang dan pastikan mudah diakses oleh kucing.</p>
            <p><b>Jenis Pasir: </b>  Pilih pasir kucing yang disukai kucing Anda dan yang mampu menyerap bau dengan baik.</p>
            <p><b>Bersihkan Rutin: </b>  Gantilah pasir secara rutin dan bersihkan kotak pasir setiap hari.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableKandang;
