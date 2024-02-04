import { createSlice } from "@reduxjs/toolkit";

    const studentReducer=createSlice({
        name:"student",
        initialState:
        {
         subStudent:[]  
        },
        reducers:{
            settingStudentSubject:(state,action)=>{
                // console.log(action.payload.data)
                state.subStudent=action.payload.data;
            },
        }
    })
    export const {settingStudentSubject} = studentReducer.actions;


    export default studentReducer.reducer;