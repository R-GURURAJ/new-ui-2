/** @format */
import { Routes, Route } from "react-router-dom";
import {StaffAttance} from '../Attance/StaffAttance'
import { StudentAttance } from "../Attance/StudentAttance";
import { AdvisorAttance } from "../Attance/AdvisorAttance";

export function AttanceRoute() {
  return (
    <div className="AttanceRoute">
      <Routes>
        <Route path="/staffAttance" element={<StaffAttance />}></Route> 
        <Route path="/studentAttance" element={<StudentAttance />}></Route> 
        <Route path="/advisorAttance" element={<AdvisorAttance />}></Route> 
      </Routes>
    </div>
  );
}
