import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { FaClipboardList, FaHome, FaUser } from "react-icons/fa";
import { MdDashboard, MdWorkHistory } from 'react-icons/md';
import { FaVirusCovid } from 'react-icons/fa6';
import { BiHealth } from 'react-icons/bi';
import { jwtDecode } from 'jwt-decode';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [role, setToken] = useState('')

  const itemMenuSidebar = [
    {
      name: "Home",
      icon: FaHome,
      path: '/dashboard'
    },
    {
      name: "Diagnosa",
      icon: FaClipboardList ,
      path: '/admin/diagnosa'
    },
    {
      name: "Riwayat Diagnosa",
      icon: MdWorkHistory ,
      path: '/admin/riwayat-diagnosa'
    },
    {
      name: "Penyakit",
      icon: FaVirusCovid,
      path: '/penyakit'
    },
    {
      name: "Gejala",
      icon: BiHealth,
      path: '/gejala'
    },
  ]
  const itemRulesSidebar = [
    {
      name: "User",
      icon: FaUser,
      path: '/users'
    },
    {
      name: "Rules",
      icon: FaClipboardList,
      path: '/rules'
    },
  ]

  // const itemTips = [
  //   {
  //     name: "Grouming",
  //     path: '/tips/grouming'
  //   },
  //   {
  //     name: "Makanan",
  //     path: '/tips/makananan'
  //   },
  //   {
  //     name: "Kandang",
  //     path: '/tips/kandang'
  //   },
  //   {
  //     name: "Mandi",
  //     path: '/tips/memandikan'
  //   },
  //   {
  //     name: "Vaksin",
  //     path: '/tips/vaksin'
  //   },
  // ]

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('access-token')
    const decodeToken = jwtDecode(token)
    setToken(decodeToken.ROLE)
  }, [])
  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/" className="flex flex-wrap items-center gap-4" >
          <MdDashboard className='text-white text-3xl' />
          <p className='text-white font-bold text-2xl'>Dashboard</p>
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="flex flex-col gap-1.5">
              {
                itemMenuSidebar.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                        pathname.includes('calendar') &&
                        'bg-graydark dark:bg-meta-4'
                      }`}
                    >
                      <item.icon />
                      { item.name }
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          {
            role === '1' ?
              <div>
                <h3 className="my-4 ml-4 text-sm font-semibold text-bodydark2">
                  MENU ADMIN
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                  {
                    itemRulesSidebar.map((item, index) => (
                      <li key={index}>
                        <NavLink
                          to={item.path}
                          className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                            pathname.includes('calendar') &&
                            'bg-graydark dark:bg-meta-4'
                          }`}
                        >
                          <item.icon />
                          { item.name }
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
              </div>
            :
            null
          }
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
