/** @format */
import { AddinChatGroup } from "../Chat_Components/AddinChatGroup";
import { signOut } from "firebase/auth";
import { auth } from "../Chat_Components/firebase";
import { StudentLogin } from "../Login_Components/StudentLogin";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { StudView } from "../Common_Component/StudView";
import { StaffLogin } from "../Login_Components/StaffLogin";
import { Staffview } from "../Common_Component/StaffView";
import { AddView } from "../Common_Component/AddView";
import MainAdmin from "../Admin/MainAdmin";
import StudentCorrection from "../Admin/StudentCorrection";
import StaffCorrection from "../Admin/StaffCorrection";
import { ChatLayout } from "../Chat_Components/ChatLayout";
import StaffAdding from "../Admin/StaffAdding";
import StudentAdding from "../Admin/StudentAdding";
import AdvisorCorrection from "../Admin/AdvisorCorrection";

export function ChatApp() {  

  const _url = "http://localhost:3333";
  // const _url = "http://172.20.10.2:3333";

  // const navigate = useNavigate();
  
  // const signout = async () => {
  //   try {
  //     console.log("triggered");
  //     await signOut(auth);
  //     navigate("/");
  //     setuserdata({
  //       groupName: "",
  //       StaffEmail: "",
  //       accountType: "",
  //         uid:"",
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  return (
    <div className="ChatApp">
      <Routes>
        <Route path="/chatLayout"element={<ChatLayout/>}/>
        <Route path="/chatGroup/addinchatgroup" element={<AddinChatGroup />}/>
        <Route path="/StudentLogin" element={ <StudentLogin/>}></Route>
        <Route path="/staffLogin" element={<StaffLogin/>}></Route>
        <Route path="/LoginView" element={<StudView />}></Route>
        <Route path="/StafLoginView"element={<Staffview />}></Route>
        <Route path="/addView"element={<AddView/>}></Route>
        <Route path="/admin" element={<MainAdmin _url={_url} />}></Route>
        <Route path="/StudentCorrection"element={<StudentCorrection />}></Route>
        <Route path="/StaffAdd" element={<StaffAdding />}></Route>
        <Route path="/StudentAdd" element={<StudentAdding />}></Route>
        <Route path="/StaffCorrection" element={<StaffCorrection />}></Route>
        <Route path="/AdvisorCorrection" element={<AdvisorCorrection />}></Route>
      </Routes>
    </div>
  );
}
