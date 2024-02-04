    import { createSlice } from "@reduxjs/toolkit";

    const chatReducer=createSlice({
        name:"chat",
        initialState:
        {
            password:"",
            roll:"",
            fullData:null,
            validUser:false,
            uid:null,
            chatdata:[],
            Groupchats:[],
            studentlist:[],
            currentGroup:"",
            userList:[],
            user:"",
            file:"",
            dept:""
        },
        reducers:{
            validateUser:(state,action)=>{
                state.fullData = action.payload.data;
                state.validUser = action.payload.data;
                state.roll = action.payload.data.roll;
                state.dept=action.payload.data.dept;
            },
            authentication:(state,action)=>{
                state.uid=action.payload.uid;
            },
            chatList:(state,action)=>{
                state.chatdata=action.payload.data.groups;   
            },
            chatDetail:(state,action)=>{
                state.Groupchats=action.payload.data;
                state.currentGroup=action.payload.chatGroupName;
            },
            studentAdding:(state,action)=>{
                state.studentlist=action.payload.data;
            },
            userDetail:(state,action)=>{
                state.userList=action.payload.data;
                state.user=action.payload.user;
            },
            socketDataAdding:(state,action)=>{
                state.Groupchats = [...state.Groupchats,action.payload.data];
            },
            sendingFile:(state,action)=>{
                state.file=action.payload.data;
            },
            logout:(state,action)=>{
                return {
                    ...state,
                    password: "",
                    roll: "",
                    fullData: null,
                    validUser: false,
                    uid: null,
                    chatdata: [],
                    Groupchats: [],
                    studentlist: [],
                    currentGroup: "",
                    userList: [],
                    user: "",
                    file: "",
                    dept: "",
                  };
            },
            
        }
    })
    export const { validateUser,authentication,chatList,chatDetail,studentAdding,socketDataAdding,logout } = chatReducer.actions;


    export default chatReducer.reducer;