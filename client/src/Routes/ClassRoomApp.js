import React from 'react'
import {ClassStaffView} from '../ClassRoom_Components/ClassStaffView';
import {ClassStudentView} from '../ClassRoom_Components/ClassStudentView';
import {ViewFile} from '../ClassRoom_Components/ViewFile';
import { Routes, Route } from "react-router-dom";

export function ClassRoomApp() {
  return (
    <div>
       <Routes>
       <Route path="/classroomStaff" element={<ClassStaffView />}></Route>
       <Route path="/classroomStudent" element={<ClassStudentView />}></Route>
       <Route path="/ViewFile" element={<ViewFile/>}></Route>
       </Routes>
    </div>
  )
}

