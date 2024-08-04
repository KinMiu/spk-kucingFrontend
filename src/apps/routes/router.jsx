import { createBrowserRouter } from "react-router-dom";
import { page } from '../pages'
import {RequireAuth, RequireRole} from "./utils/requireAuth";

const router = createBrowserRouter([
  {
    path: '/login',
    element: page.loginpage
  },
  {
    path: '/sign-up',
    element: page.signup
  },
  {
    path: '/',
    element: page.landing
  },
  {
    path: '/',
    element: <RequireAuth redirectPath="/login" />,
    children: [
      
      {
        path: '/profile',
        element: page.profile
      },
      {
        path: '/admin/diagnosa',
        element: page.diagnosaAdminPage
      },
      {
        path: '/diagnosa',
        element: page.diagnosaPage
      },
      {
        path: '/riwayat-diagnosa',
        element: page.riwayatDiagnosa
      },
      {
        path: '/hasil-diagnosa/:IDPENYAKIT',
        element: page.hasilDiagnosa
      },
      {
        path: '/tips/grouming',
        element: page.grouming
      },
      {
        path: '/tips/makanan',
        element: page.makanan
      },
      {
        path: '/tips/kandang',
        element: page.kandang
      },
      {
        path: '/tips/memandikan',
        element: page.memandikan
      },
      {
        path: '/tips/vaksin',
        element: page.vaksin
      },
    ]
  },
  {
    path: '/',
    element: <RequireRole allowedRoles={['1']} redirectPath="/" />,
    children: [
      {
        path: '/dashboard',
        element: page.homepage
      },
      {
        path: '/users',
        element: page.users
      },
      {
        path: '/rules',
        element: page.rulesPage
      },
      {
        path: '/admin/riwayat-diagnosa',
        element: page.riwayatDiagnosaAdmin
      },
      {
        path: '/admin/hasil-diagnosa/:IDPENYAKIT',
        element: page.hasilDiagnosaAdmin
      },
      {
        path: '/penyakit',
        element: page.penyakit
      },
      {
        path: '/gejala',
        element: page.gejalaPage
      },
    ]
  }
])

export default router