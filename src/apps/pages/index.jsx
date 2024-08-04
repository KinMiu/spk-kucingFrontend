import Homepage from './admin/Homepage'
import Landing from './landing'
import Login from './LoginPage'
import SignupPage from './SignupPage'
import Profile from './Profile'
import Penyakit from './admin/Penyakit'
import GejalaPage from './admin/GejalaPage'
import RulesPage from './admin/RulesPage'
import DiagnosaAdmin from './admin/DiagnosaPage'
import Diagnosa from './Diagnosa'
import RiwajatDiagnosaAdmin from './admin/RiwayatDiagnosaPage'
import RiwajatDiagnosa from './RiwayatDiagnosa'
import HasilDiagnosaAdmin from './admin/HasilDiagnosaPage'
import HasilDiagnosa from './HasilDiagnosa'
import Users from './admin/UserPage'
import Grouming from './Tips/GroumingPage'
import Makanan from './Tips/MakananPage'
import Kandang from './Tips/KandangPage'
import Memandikan from './Tips/MemandikanPage'
import Vaksin from './Tips/VaksinPage'

export const page = {
  homepage: <Homepage />,
  landing: <Landing />,
  loginpage: <Login />,
  signup: <SignupPage />,
  profile: <Profile />,
  penyakit: <Penyakit />,
  gejalaPage: <GejalaPage />,
  rulesPage: <RulesPage />,
  diagnosaAdminPage: <DiagnosaAdmin />,
  riwayatDiagnosaAdmin: <RiwajatDiagnosaAdmin />,
  riwayatDiagnosa: <RiwajatDiagnosa />,
  hasilDiagnosaAdmin: <HasilDiagnosaAdmin />,
  hasilDiagnosa: <HasilDiagnosa />,
  users: <Users />,
  grouming: <Grouming />,
  makanan: <Makanan />,
  kandang: <Kandang />,
  memandikan: <Memandikan />,
  vaksin: <Vaksin />,
  diagnosaPage: <Diagnosa />,
}