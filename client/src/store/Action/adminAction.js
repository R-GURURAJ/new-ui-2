import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import { URL } from '../config';


export const settingStaffData=createAction('admin/settingStaffData')
export const staffSubjectAdd=createAction('admin/staffSubjectAdd')
export const settingStudentData=createAction('admin/settingStudentData')


export const fetchStaffAll = () => {
    return async (dispatch) => {
        try {
            const response = await axios.post(URL+'/staffAll');
            // console.log(response.data);
            dispatch(settingStaffData({ data: response.data}));
          } catch (error) {
              console.error("Error fetching staff details:", error);
          }
    };
  };
export const fetchStudentAll = () => {
    return async (dispatch) => {
        try {
            const response = await axios.post(URL+'/studentAll');
            console.log(response.data[0]);
            console.log("hell");
            dispatch(settingStudentData({ data: response.data}));
          } catch (error) {
              console.error("Error fetching student details:", error);
          }
    };
  };
export const staffAdd = (sDet) => {
    return async (dispatch) => {
        try {
            const res= await axios.post(URL+"/staffAdd",{name:sDet.name,roll:sDet.roll,uid:sDet.uid,password:sDet.password})
            dispatch(fetchStaffAll())
          } catch (error) {
              console.error("Error fetching staff details:", error);
          }
    };
};
export const RemoveStaff = (sDet,selected) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(URL+"/removeStaff",{name:sDet.name,uid:selected.uid});
          } catch (error) {
              console.error("Error remove staff details:", error);
          }
    };
};
export const subjectAdd = (data,det,subjects2) => {
    return async (dispatch) => {
        try {
            if(data.roll==="staff"){
                const res=await axios.post(URL+"/subAddstaff",{subject:subjects2,roll:data.roll,uid:data.uid,year:""})
                alert("Suceesfully added")
              }
              if(data.roll==="advisor"){
                const res1=await axios.post(URL+"/subAddstaff",{subject:subjects2,roll:data.roll,uid:data.uid,year:det.advisorYear})
                alert("Suceesfully added")
              }
              alert("subjectAdded")
          } catch (error) {
              console.error("Error adding staff details:", error);
          }
    };
};
export const ListingSubjectStaff = (data) => {
    return async (dispatch) => {
        try {
            const res=await axios.post(URL+"/getGroupsData",{accounttype:"staff",uid:data.uid});
            dispatch(staffSubjectAdd({ data: res.data[0].subjects}));
          } catch (error) {
              console.error("Error listing Subject:", error);
          }
    };
};