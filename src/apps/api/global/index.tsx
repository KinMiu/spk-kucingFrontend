const API_ENDPOINT = {
  ADD_USER: "/user/create",
  GET_COUNT_USER: "/user/count",
  GET_USER: "/user/get",
  LOGIN_USER: "/user/login",
  LOGOUT_USER: "/user/logout",
  GET_GEJALA:`/gejala/get`,
  GET_COUNT_GEJALA:`/gejala/count`,
  ADD_GEJALA: `/gejala/create`,
  ADD_PENYAKIT: `/penyakit/create`,
  GET_PENYAKIT: `/penyakit/get`,
  GET_COUNT_PENYAKIT:`/penyakit/count`,
  GET_PENYAKIT_BY_ID: (ID) => `/penyakit/get/${ID}`,
  GET_DIAGNOSA_BY_IDUSER: (ID) => `/diagnosa/get-diagnosa/${ID}`,
  ADD_DIAGNOSA: `/diagnosa/create`,
  GET_DIAGNOSA: `/diagnosa/get`,
  GET_COUNT_DIAGNOSA:  `/diagnosa/count`,
  ADD_SAMPLE: `/sample/create`,
  GET_SAMPLE: `/sample/get`,
  GET_BOBOT: `/bobot/get`,
}

export default API_ENDPOINT