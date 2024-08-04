import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import DropdownUser from "../Dropdown/DropdownUser";
import ServiceUser from "../../api/service/User.service";
import SweetAlertService from "../../helper/sweetalertService";
import DropdownNavbar from "../Dropdown/DropdownNavbar";
// import Link from "next/link";
// components

// import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function Navbar() {
  const [user, setUser] = useState('')
  const navigate = useNavigate()
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const handleLogout = async () => {
    try {
      const data = ''
      const response = await ServiceUser.logoutUser(data)
      console.log(response)
      localStorage.removeItem('access-token')
      SweetAlertService.showSuccess("Success", response.message)
      navigate('/')
      window.location.reload();
    } catch (error) {
      SweetAlertService.showError("Error", error.message)
    }
  }
  
  useEffect(() => {
    const token = localStorage.getItem('access-token')
    if(token) {
      const decodeToken = jwtDecode(token)
      setUser(decodeToken)
    }
  }, [])
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a href="/">
              <a
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="/"
              >
                SPK-PenyakitKucing
              </a>
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <CiMenuBurger className="text-white" /> 
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-orange-400 lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/diagnosa"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Diagnosa
                </a>
              </li>
              <li className="flex items-center ms-4">
                <DropdownNavbar  />
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

              {
                user === '' 
                ?
                  <li className="flex items-center">
                    <a
                      className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      href="/login"
                    >
                      <i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                      Login
                    </a>
                  </li>
                :
                navbarOpen ? 
                  <li className="flex items-center">
                    <a
                      className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      onClick={handleLogout}
                    >
                      <i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                      Logout
                    </a>
                  </li>
                :
                  <DropdownUser />
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
