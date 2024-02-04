/** @format */

// import { Register } from "../RegisterComponent/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StudLogin } from "../components/Login/StudLogin";
import { StudentView } from '../components/Common_Component/StudentView';
import { StaffView } from "../components/Common_Component/StaffView";
import { AdvisorView } from "../components/Common_Component/AdvisorView";


export function Login() {
  return (
    <div className="Internal h-full flex justify-center w-full items-center">
      <Routes>
        <Route path="/" element={<StudLogin />} />
        <Route path="/student" element={<StudentView />} />
        <Route path="/staff" element={<StaffView />} />
        <Route path="/advisor" element={<AdvisorView />} />
      </Routes>
    </div>
  );
}
