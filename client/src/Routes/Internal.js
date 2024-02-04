/** @format */

// import { Register } from "../RegisterComponent/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {InternalMarks}  from "../components/Internal/staff/InternalMarks";
import { StudentView } from '../components/Common_Component/StudentView';
import { StaffView } from "../components/Common_Component/StaffView";
import { AdvisorView } from "../components/Common_Component/AdvisorView";
import Groups from '../components/ChatGroups'



export function Internal() {
  return (
      <Routes>
        <Route path="/staffInternal" element={<InternalMarks />} />
      <Route path="/" element={<StudentView />} />
      <Route path="/staff" element={<StaffView />} />
      <Route path="/advisor" element={<AdvisorView />} />
        <Route path="/Groups" element={< Groups/>} />
      </Routes>
    // </div>
  );
}
