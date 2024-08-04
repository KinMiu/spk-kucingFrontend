/* eslint-disable react/no-unescaped-entities */

import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blue-gray-800 pt-8 pb-6 text-white">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Jaga Kesehatan Kucing Mu!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Jangan tunda - tunda, jika terjadi suatu gejala periksakan segera.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex flex-row">
                <button
                  className="bg-white text-blue-300 text-center shadow-lg text-xl font-normal h-10 w-10 items-center flex flex-row justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <BsTwitter className=" text-center"/>
                </button>
                <button
                  className="bg-white text-light-blue-600 flex text-xl shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaFacebook />
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg flex text-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <BsInstagram />
                </button>
                <button
                  className="bg-white text-green-600 shadow-lg flex text-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <BsWhatsapp />
                </button>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Notus NextJS by{" "}
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
