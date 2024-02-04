import { createSlice } from "@reduxjs/toolkit";

const InternalReducer=createSlice({
    name:"Internal",
    initialState:
    {
        studentSubject:null,
        staffSubject:null,
        subjectRelatedStudent:null
    },
    reducers:{
        studnetSubjectUpdate:(state,action)=>{
            state.studentSubject=action.payload.data.subjects;
        },
        staffSubjectUpdate:(state,action)=>{
            // console.log(action.payload.data)
            state.staffSubject=action.payload.data.subjects;
        },
        subjectRelatedStudentList:(state,action)=>{
            state.subjectRelatedStudent=action.payload.data;
        }
    }
})
export const {studnetSubjectUpdate,staffSubjectUpdate,subjectRelatedStudentList } = InternalReducer.actions;


export default InternalReducer.reducer;