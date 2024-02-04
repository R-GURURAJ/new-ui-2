import React from "react";
import logo from "../../../assets/logo_login.png";
import {
  AttendanceIcon,
  ChatIcon,
  ClassRoomIcon,
  InternalMarksIcon,
  TaskManageIcon,
} from "../../../assets/MyIcons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function SideBar() {
  const fulldata = useSelector((state) => state.chat.fullData);
  const Navigate = useNavigate();

  const HandleRoot = (data) => {
    if (data === "Internal Marks") {
      if (fulldata.roll === "staff") {
        Navigate("/staffInternal");
      }
    }
  };

  const ItemsListed = ({ Logo, data }) => {
    return (
      // text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100
      <a
        class="flex items-center justify-stretch w-full p-4 my-2 font-thin  text-white  hover:bg-blue-500 rounded-xl"
        onClick={() => HandleRoot(data)}
      >
        <span class="text-left ml-10">{Logo}</span>
        <span class="mx-4 text-sm  w-full flex font-normal">{data}</span>
      </a>
    );
  };

  return (
    <div class="relative hidden h-[95vh] rounded-2xl my-4 ml-4 lg:block w-80 dark:bg-gray-800 ">
      <div class="h-full rounded-2xl flex flex-col">
        {/* <div class="flex items-center justify-center pt-6">
                    <img className="w-1/5" src={logo} alt="ksrce" />
                </div> */}
        <div className="flex justify-around  h-28 ">
          <div className=" flex justify-center items-center w-full">
            <div class="relative flex items-center justify-start w-1/4 p-1 sm:mr-0 sm:right-auto">
              <a href="/" class="relative block">
                <img
                  alt="profil"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  class="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
            </div>
            <div>
              <h1 className="uppercase">{fulldata.Name}</h1>
              {fulldata.roll === "staff" ? (
                <p>@{fulldata.password}</p>
              ) : (
                <p>@{fulldata.Rollno}</p>
              )}
            </div>
          </div>
        </div>
        <nav class="mt-3 text-center">
          <div className="flex justify-center items-center flex-col">
            <ItemsListed data={"Groups"} Logo={<ChatIcon />} />
            <ItemsListed data={"Internal Marks"} Logo={<InternalMarksIcon />} />
            <ItemsListed data={"Class Room"} Logo={<ClassRoomIcon />} />
            <ItemsListed data={"Attendance"} Logo={<AttendanceIcon />} />
            <ItemsListed data={"Task Management"} Logo={<TaskManageIcon />} />
          </div>
        </nav>
      </div>

      {/* <div className="flex flex-col justify-between h-30 w-4/5 rounded-md">
        <div className="bg-blue-400 w-full h-24 rounded-b-2xl rounded-t-md uppercase text-center items-center flex justify-center">
          <h1 className="text-black font-bold">gururaj r</h1>
        </div>
        <div className="h-full bg-slate-100 rounded-3xl flex justify-center items-center text-center">
          <p className="text-black font-medium">guru@gmail.com</p>
        </div>
      </div> */}
    </div>
  );
}

export default SideBar;
