import { createSlice } from "@reduxjs/toolkit";

const roomReducer=createSlice({
    name:"room",
    initialState:
    {
        fileData:{},
        currentSubject:"",
        roll:"",
        // subjectVal:["Harish"],
        // count:[10]
    },
    reducers:{
        fileDet:(state,action)=>{
            // console.log(state.payload.data)
            state.fileData = action.payload.data;
            state.currentSubject=action.payload.subject;
            state.roll=action.payload.roll;
        },  
        // fileData:(state,action)=>{
        //     // console.log(action.payload.subject,action.payload.count)
        //     // state.subjectVal=action.payload.subject;
        //     // state.count=action.payload.count;
        //     return {
        //         ...state,
        //         subjectVal: action.payload.subject,
        //         count: action.payload.count,
        //       };
        // }
    }
})
export const { fileDet,fileData } = roomReducer.actions;


export default roomReducer.reducer;