import {IMAGES} from '../../assets/index'

const TableMakanan = () => {
  
  return (
    <div className="rounded-sm border p-5 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <p className="text-2xl font-semibold mb-5">Tips Memberi makan kucing</p>
      <img 
      className='mx-auto mb-5 w-full max-w-xl'
        src={IMAGES.image2} 
        alt="" 
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">1. Pilih Makanan Berkualitas</p>
          <div className="flex flex-col gap-2">
            <p><b>Jenis Makanan: </b>  Pilih makanan kucing yang berkualitas tinggi, baik itu makanan kering (dry food), makanan basah (wet food), atau kombinasi keduanya. Makanan harus sesuai dengan umur, ukuran, dan kondisi kesehatan kucing.</p>
            <p><b>Label Nutrisi: </b> Pastikan makanan yang Anda pilih mengandung protein hewani sebagai bahan utama. Periksa juga apakah makanan tersebut memenuhi standar nutrisi yang ditetapkan oleh asosiasi kesehatan hewan seperti AAFCO (Association of American Feed Control Officials).</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">2. Jadwal Pemberian Makan</p>
          <div className="flex flex-col gap-2">
            <p><b>Frekuensi: </b>  Berikan makan kucing 2-3 kali sehari. Anak kucing membutuhkan makanan lebih sering, sekitar 4 kali sehari.</p>
            <p><b>Konsistensi: </b> Usahakan untuk memberikan makan pada waktu yang sama setiap hari untuk membangun rutinitas.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">3. Jumlah Porsi</p>
          <div className="flex flex-col gap-2">
            <p><b>Ukuran Porsi: </b>  Ikuti petunjuk pada kemasan makanan kucing untuk menentukan ukuran porsi yang tepat. Jumlah porsi bisa disesuaikan dengan berat badan, umur, dan tingkat aktivitas kucing.</p>
            <p><b>Mengontrol Berat Badan: </b> Jika kucing Anda cenderung kelebihan berat badan, konsultasikan dengan dokter hewan untuk rencana diet yang tepat.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">4. Air Minum</p>
          <div className="flex flex-col gap-2">
            <p><b>Ketersediaan Air: </b>  Pastikan kucing selalu memiliki akses ke air bersih dan segar. Ganti air setidaknya sekali sehari.</p>
            <p><b>Hydration: </b> Kucing yang makan makanan kering mungkin memerlukan lebih banyak air dibandingkan dengan kucing yang makan makanan basah.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">5. Makanan Basah vs. Makanan Kering</p>
          <div className="flex flex-col gap-2">
            <p><b>Makanan Basah: </b>  Baik untuk menjaga kucing tetap terhidrasi dan biasanya lebih disukai oleh kucing karena teksturnya yang lembut dan rasanya yang kuat.</p>
            <p><b>Makanan Kering: </b> Praktis dan membantu menjaga kesehatan gigi kucing. Namun, pastikan kucing juga minum cukup air.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">6. Hindari Makanan Manusia</p>
          <div className="flex flex-col gap-2">
            <p><b>Berbahaya: </b>  Beberapa makanan manusia seperti cokelat, bawang, bawang putih, anggur, dan kismis bisa beracun bagi kucing.</p>
            <p><b>Tidak Seimbang: </b> Makanan manusia umumnya tidak memenuhi kebutuhan nutrisi kucing dan bisa menyebabkan masalah kesehatan jangka panjang.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">7. Suplemen dan Vitamin</p>
          <div className="flex flex-col gap-2">
            <p><b>Kebutuhan Khusus: </b>  Jika kucing Anda memiliki kebutuhan nutrisi khusus, dokter hewan mungkin merekomendasikan suplemen atau vitamin tambahan.</p>
            <p><b>Penggunaan Tepat: </b> Hanya gunakan suplemen yang direkomendasikan oleh dokter hewan, karena penggunaan yang tidak tepat bisa berbahaya.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">8. Mengatasi Masalah Makan</p>
          <div className="flex flex-col gap-2">
            <p><b>Picky Eaters: </b>  Jika kucing Anda pemilih, coba variasikan jenis dan merek makanan untuk menemukan yang paling disukai.</p>
            <p><b>Masalah Kesehatan: </b> Jika kucing tiba-tiba kehilangan nafsu makan atau mengalami masalah makan, segera konsultasikan dengan dokter hewan.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">9. Makanan Khusus untuk Kondisi Kesehatan</p>
          <div className="flex flex-col gap-2">
            <p><b>Diet Khusus: </b>  Kucing dengan kondisi kesehatan tertentu seperti diabetes, penyakit ginjal, atau alergi makanan mungkin memerlukan makanan khusus yang dirancang untuk kondisi mereka.</p>
            <p><b>Konsultasi Dokter Hewan: </b> Selalu konsultasikan dengan dokter hewan sebelum mengubah diet kucing Anda, terutama jika kucing memiliki kondisi kesehatan tertentu.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">10. Pemberian Camilan</p>
          <div className="flex flex-col gap-2">
            <p><b>Jumlah: </b>  Berikan camilan dalam jumlah yang wajar, tidak lebih dari 10% dari total asupan kalori harian kucing.</p>
            <p><b>Jenis Camilan: </b> Pilih camilan yang sehat dan bergizi, hindari camilan yang mengandung banyak gula atau bahan pengawet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableMakanan;
