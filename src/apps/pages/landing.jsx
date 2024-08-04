/* eslint-disable react/no-unescaped-entities */
// import Link from "";

// components

import Footer from "../components/Footers/Footer";
import Navbar from "../components/Navbar/AuthNavbar";
import { IMAGES } from "../assets";
import { useNavigate } from "react-router-dom";
import { FaCat, FaHandPointRight } from "react-icons/fa";
import { FaBowlFood, FaUserDoctor } from "react-icons/fa6";
import { MdOutlineVaccines, MdTipsAndUpdates, MdWash } from "react-icons/md";
import { GiCage } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { LuClipboardList } from "react-icons/lu";
import FloatingButton from "../components/FloatingButton";
import { useEffect, useState } from "react";

export default function Landing() {
  const [bgPosition, setBgPosition] = useState('center');
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 568) {
        setBgPosition('589px'); // Atur posisi background untuk mobile
      } else if(window.innerWidth < 1068) {
        setBgPosition('1000px'); // Atur posisi background untuk mobile
      } else {
        setBgPosition('center'); // Atur posisi background untuk desktop
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Panggil sekali untuk mengatur posisi awal

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                `url(${IMAGES.hero})`,
              backgroundPosition: bgPosition
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto my-45">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className="text-white font-semibold text-5xl">
                    Pantau Kesehatan Kucingmu
                  </h1>
                  <p className="text-white mt-4 text-lg text-blueGray-200">
                    Jika terjadi gejala yang mencurigakan periksakan segera. Demi kesehatan dan keselamatannya
                  </p>
                  <button
                    onClick={() => navigate('/diagnosa')}
                    className="bg-orange-400 text-white active:bg-blueGray-50 text-xs font-black uppercase px-4 py-4 mt-5 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Diagnosa Disini
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-orange-400">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-black bg-white text-2xl p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
                      <FaUserDoctor />
                    </div>
                    <h6 className="text-xl font-semibold">Free Konsultasi</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Konsultasikan Kesehatan Kucing mu dengan klinik kami
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-black text-2xl bg-orange-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <LuClipboardList />
                    </div>
                    <h6 className="text-xl font-semibold">Diagnosa Cepat</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Diagnosa dengan cepat penyakit yang diderita dengan memasukan gejala yang timpul pada kucing anda
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center mt-5">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-orange-400">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-black bg-white p-3 text-center text-2xl inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <FaHandPointRight />
                    </div>
                    <h6 className="text-xl font-semibold">Easy to Use</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Penggunaan yang mudah memudahkan anda untuk melakukan diagnosa dengan cepat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
            </svg>
          </div>

          <div className="container mx-auto px-4 mt-20">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={IMAGES.image7}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 mt-3 text-center inline-flex items-center justify-center bg-orange-400 w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <MdTipsAndUpdates className="text-3xl ms-2" />
                  </div>
                  <h3 className="text-3xl font-semibold">Tips Memelihara kucing</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Pemeliharaan kucing tentu tidak semudah yang dikira. Banyak aspek yang perlu diperhatikan.
                    Beberapa hal yang perlu kamu perhatikan diantaranya
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500 hover:text-orange-400">
                            <a href="/tips/grouming" className="flex flex-row gap-3">
                              <FaCat />
                              Grouming
                            </a>
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500 hover:text-orange-400">
                            <a href="/tips/makanan" className="flex flex-row gap-3">
                              <FaBowlFood />
                              Makanan
                            </a>
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500 hover:text-orange-400">
                            <a href="/tips/kandang" className="flex flex-row gap-3">
                              <GiCage />
                              Kandang
                            </a>
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500 hover:text-orange-400">
                            <a href="/tips/memandikan" className="flex flex-row gap-3">
                              <MdWash />
                              Memandikan
                            </a>
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500 hover:text-orange-400">
                            <a href="/tips/vaksin" className="flex flex-row gap-3">
                              <MdOutlineVaccines />
                              Vaksin
                            </a>
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

            
          </div>
        </section>

        <section className="relative py-5 bg-orange-400">
          <div className="flex flex-wrap items-center mt-10">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <FcAbout className="text-3xl" />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  About Us
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                SPK Diagnosa Penyakit Kucing adalah platform yang dirancang untuk membantu pemilik kucing dengan cepat dan akurat mendiagnosis berbagai penyakit melalui gejala yang terlihat. Kami menyediakan informasi dan layanan bantu diagnosis berbasis metode C.45 untuk memastikan kucing kesayangan Anda mendapatkan diagnosa yang tepat.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto rounded-lg">
                <div className="relative flex flex-col min-w-0 bg-white w-full mb-6 shadow-lg rounded-xl bg-blueGray-700">
                  <img
                    alt="..."
                    src={IMAGES.image6}
                    className="w-full align-middle rounded-t-lg"
                  />
                </div>
              </div>
            </div>
        </section>

        <Footer />
        <FloatingButton />
      </main>
    </>
  );
}
