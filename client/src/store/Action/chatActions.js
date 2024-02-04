import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import { URL } from '../config';



export const validateUser = createAction('chat/validateUser');
export const chatList = createAction('chat/chatList');
export const chatData=createAction('chat/chatDetail')
export const studentAdding=createAction('chat/studentAdding')
export const userDetail=createAction('chat/userDetail')
export const studnetSubjectUpdate=createAction('Internal/studnetSubjectUpdate')
export const staffSubjectUpdate=createAction('Internal/staffSubjectUpdate')
export const logout=createAction('Internal/logout')





export const insertStudent = (input,allchecked,Subject) => {
  return async (dispatch) => {
      try {
        const wholeSubject = allchecked.concat(Subject[input.sem]);
        await axios.post(URL+"/insert", {
          name: input.name,
          rollno: input.rollno,
          DOB: input.DOB,
          gender: input.gender,
          email: input.email,
          th10: input.th10,
          th12: input.th12,
          dept: input.dept,
          subject: wholeSubject,
          sem: input.sem,
          groups: [],
          address: input.address,
          uid: input.uid,
        });    
        alert("Inteserted");
    } catch (error) {
      console.log("error",error)
    }
  };
};
export const insertStaff = (input) => {
  return async (dispatch) => {
      try {
        await axios.post(URL+"/insertStaff", {
          name: input.name,
          rollno: input.rollno,
          DOB: input.DOB,
          gender: input.gender,
          email: input.email,
          dept: input.dept,
          sem: [],
          groups: [],
          subjects: [],
          uid: input.uid,
          password: input.password,
    });
    alert("Succesfully Registered ");    
        // alert("Inteserted");
    } catch (error) {
      console.log("error",error)
    }
  };
};
export const fetchStudnetData = (uid,dept) => {
  return async (dispatch) => {
      try {
        console.log(dept)
        const response =await axios.post(URL+'/studentLogin', {
            uid:uid,dept:dept
        });
        console.log(response.data[0])
      dispatch(validateUser({ data: response.data[0]}));
      dispatch(studnetSubjectUpdate({ data: response.data[0]}));
    } catch (error) {
      console.log("error",error)
    }
  };
};

export const submitFile = (file,currentGrp,uid,curTime) => {
  return async (dispatch) => {
    console.log(file,uid,"+________");
    try {
      console.log("I am arrived ",currentGrp);
      await axios.post(URL + '/insertFile', { file: file, groupName: currentGrp, uid: uid,date:curTime }, {
        headers: {
          "Content-type": "multipart/form-data",
        }
      });
      await dispatch(fetchChatData(currentGrp));
    } catch (error) {
      console.error(error); // Log any error that occurs during the request
    }
  };
};

export const fetchStaffData = (uid) => {
  return async (dispatch) => {
      try {
        const response =await axios.post(URL+'/staffLogin', {
            uid:uid,
        });
      dispatch(validateUser({ data: response.data}));
      dispatch(staffSubjectUpdate({ data: response.data}));
    } catch (error) {
      console.log("error",error)
    }
  };
};

export const fetchChatList=(uid,userType,dept)=>{
  return async(dispatch)=>{
    try {
      const response = await axios.post(URL+"/getGroupsData", {
        uid:uid,
        accounttype: userType,
        dept:dept
      });
      console.log(response.data[0])
      dispatch(chatList({ data: response.data[0]}));
    } catch (error) {
      console.error(error);
    }
  }
}

export const fetchChatData=(chatGroupName)=>{
  return async(dispatch)=>{
    console.log("finding chats...",chatGroupName);
    try {
      const response = await axios.post(URL+"/clickedGroupDatas", {
        groupName: chatGroupName,
      });
      console.log(response.data)  
      dispatch(chatData({ data: response.data,chatGroupName:chatGroupName}));
    } catch (error) {
      console.error(error);
    }
  }
}

export const fetchStudentList=()=>{
  return async(dispatch)=>{
    try {
      const response = await axios.post(URL+"/DisplayStudentsList", {
        groupName: "student",
      });
      dispatch(studentAdding({ data: response.data}));
    } catch (error) {
      console.error(error);
    }
  }
}

export const sendMessage=(cgroup,message,uid,curTime)=>{
  return async(dispatch)=>{
    try {
      await axios.post(URL+"/SendMessage", {
        groupName: cgroup,
        message: message,
        uid: uid,
        date:curTime
      });
      dispatch(fetchChatData(cgroup))
    } catch (err) {
      console.error(err);
    }
  }
}

export const createGroupAxios = (uid, groupName) => {
  return async (dispatch) => {
    try {
      // const response =
       await axios.post(URL+"/createGroup", {
        groupName: groupName,
        uid: uid,
      });
      dispatch(fetchChatList(uid, "staff"));
    } catch (error) {
      console.error(error);
    }
  };
};
export const removeGroupAxios = (uid, groupName) => {
  return async (dispatch) => {
    try {
      // const res =
      await axios.post(URL+"/removeGroups", {
        grpname: groupName,
        uid: uid,
      });
  
      // Dispatch the action to fetch the updated chat list after removing the group
      dispatch(fetchChatList(uid, "staff"));
    } catch (error) {
      console.error(error);
    }
  };
};
export const searchUsers=(dept)=>{
  return async(dispatch)=>{
    let user;
      try {
        if (dept.includes("FACULTY")) {
          user = "staff";
        } else {
          user = "student";
        }
        const response = await axios.post(URL+'/addUsersList', { deptval: dept, userval: user });

      dispatch(userDetail({ data: response.data,user:user}));
      } catch (error) {
        console.error(error);
      }
  }
}
export const addStudent=(dept,rollno,currentGroup)=>{
  return async(dispatch)=>{
    try {
      console.log(dept);
      const response=await axios.post(URL+'/addStudentInGroup',{dept:dept,rollno:rollno,groupName:currentGroup});
      alert(response.data)
    } catch (error) {
      console.error(error); 
    }
  }
}
export const handelFileDecode=(id,subject,date)=>{

  const downloadFile = (base64Data,fileName) => {
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName || 'downloaded_file';
    link.click();
  }
  return async(dispatch)=>{
    try {
      const response = await axios.post(URL+'/fileDownload',{id:id,groupName:subject,date:date});

      downloadFile(response.data[0],response.data[1]);
      
    } catch (error) {
      console.error(error); 
    }
  }
}
export const Logout=()=>{
  return async(dispatch)=>{
    try {
      
      dispatch(logout());
    } catch (error) {
      console.error(error);
    }
  }
}



