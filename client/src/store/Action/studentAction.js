import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import { URL } from '../config';

export const settingStudentSubject = createAction('student/settingStudentSubject');

export const subjectToStudent = (rollno,subject,dept) => {
    return async (dispatch) => {
        try {
            const res=await axios.post(URL+"/subToStudent",{rollno:rollno,subject:subject,dept:dept});
            alert(res.data.message)
      } catch (error) {
        console.log("error",error)
      }
    };
  };
  
export const addAllStudent = (dept,currentSub) => {
    return async (dispatch) => {
        try {
            const res=await axios.post(URL+"/suballStudent",{dept:dept,subject:currentSub});
            // alert(res)
            alert(res.data.message);
      } catch (error) {
        console.log("error",error)
      }
    };
  };
export const fetchSubRelatedStudent = (currentSub,dept) => {
    return async (dispatch) => {
        try {
            const res=await axios.post(URL+"/fetchSubStudent",{subject:currentSub,dept:dept});
            // console.log(res.data.students);
            dispatch(settingStudentSubject({data:res.data.students}))
            
      } catch (error) {
        console.log("error",error)
      }
    };
  };
  export const RemovesubjectToStudent = (rollno,subject,dept) => {
    return async (dispatch) => {
        try {
            await axios.post(URL+"/RemovesubToStudent",{rollno:rollno,subject:subject,dept:dept});
            dispatch(fetchSubRelatedStudent(subject,dept))
      } catch (error) {
        console.log("error",error)
      }
    };
  };

