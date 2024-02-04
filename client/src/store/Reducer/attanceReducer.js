import { createSlice } from "@reduxjs/toolkit";

const attanceReducer=createSlice({
    name:"attance",
    initialState:
    {
      stdAttanceData:[]
    },
    reducers:{
        recoverData:(state,action)=>{
            // console.log(action.payload.data)
            // state.stdAttanceData=action.payload.data;
            return {
                ...state,
                stdAttanceData: action.payload.data,
            };
        }
    }
})
export const { recoverData } = attanceReducer.actions;


export default attanceReducer.reducer;