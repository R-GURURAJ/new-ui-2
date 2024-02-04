/** @format */
import { Routes, Route } from "react-router-dom";
import { SubjectAddStudent } from "../StudentHandling/SubjectAddStudent";
import { AddvisorStudent } from "../StudentHandling/AddvisorStudent";

export function StudentRoute() {
  return (
    <div className="AttanceRoute">
      <Routes>
        <Route path="/subStudent" element={<SubjectAddStudent />}></Route> 
        <Route path="/EditStudent" element={<AddvisorStudent />}></Route> 
      </Routes>
    </div>
  );
}
