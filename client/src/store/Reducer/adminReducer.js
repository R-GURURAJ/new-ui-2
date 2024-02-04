import { createSlice } from "@reduxjs/toolkit";

const adminReducer=createSlice({
    name:"admin",
    initialState:
    {
        allStaffData:[null],
        allStudentData:[],
        currentStaff:null,
        staffSubjectList:[]
    },
    reducers:{
        settingStaffData:(state,action)=>{
            state.allStaffData=action.payload.data;
        },
        currentStaffDet:(state,action)=>{
            state.currentStaff=action.payload.data;
        },
        staffSubjectAdd:(state,action)=>{
            state.staffSubjectList=action.payload.data;
        },
        settingStudentData:(state,action)=>{
            state.allStudentData=action.payload.data;
        }
    }
})
export const {settingStaffData,currentStaffDet,staffSubjectAdd,settingStudentData} = adminReducer.actions;


export default adminReducer.reducer;