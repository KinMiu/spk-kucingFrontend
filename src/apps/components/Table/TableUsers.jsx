import FormatDateAndTime from "../../helper/dateTime"


const TableUsers = ({ dataUser }) => {

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

      <div>
        <div className="grid grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">No</p>
          </div>
          {/* <div className="col-span-2 flex items-center">
            <p className="font-medium">ID</p>
          </div> */}
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="font-medium">Username</p>
          </div>
          <div className="col-span-2 items-center sm:flex">
            <p className="font-medium">Nama</p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="font-medium">Waktu</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Role</p>
          </div>
        </div>

        {
          dataUser.map((gejala, index) => { 
            const {formattedDate} = FormatDateAndTime(gejala.CREATED_AT)
          return (
            <div key={index} className="grid grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5">
              <div className="col-span-1 items-center">
                <p className="text-sm text-black dark:text-white">{index+1}</p>
              </div>
              {/* <div className="col-span-2 hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">{gejala._id}</p>
              </div> */}
              <div className="col-span-2 hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">{gejala.USERNAME}</p>
              </div>
              <div className="col-span-2 items-center">
                <p className="text-sm text-black dark:text-white">{gejala.NAME}</p>
              </div>
              <div className="col-span-2 hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">{formattedDate}</p>
              </div>
              <div className="col-span-1 items-center">
                <p className="text-sm text-black dark:text-white">{gejala.ROLE === "1" ? "Admin" : "User"}</p>
              </div>
            </div>
          )})
        }
      </div>
    </div>
  );
};

export default TableUsers;
