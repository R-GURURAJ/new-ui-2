import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import { URL } from '../config';


export const subjectRelatedStudentList=createAction('Internal/subjectRelatedStudentList')




export const calculateTotal = (uid,val,lan,dept) => {
    return async (dispatch) => {
        try {
            let sum = 0;
            for (let i = 0; i < val.length - 1; i++) {
              sum += val[i] / 5;
            }
            console.log(sum);
            await axios.post(URL+"/total", {
              sum: Math.round(sum),
              uid: uid,
              subject: lan,
              dept:dept
            });
      } catch (error) {
        console.log("error",error)
      }
    };
  };

export const fetchSubjectRelatedStudent = (currentSub,dept) => {
    return async (dispatch) => {
        console.log("hello"+"---"+currentSub)
        try {
            const response = await axios.post(URL+"/staffView", {
                subject: currentSub,
                dept:dept
            });
      console.log(response.data)
      dispatch(subjectRelatedStudentList({ data: response.data}));
      return {data:response.data}
      } catch (error) {
        console.log("error",error)
      }
    };
  };
export const InternalMark = (currentSub,current,data,IAT,dept) => {
    return async (dispatch) => {
        console.log("IAT"+"---"+currentSub)
        try {
            const res1 = await axios.post(URL+"/internal", {
             rollno: data,
             subject: currentSub,
             IAT: IAT,
             val:  current,
             dept:dept
            }
            );
            dispatch(fetchSubjectRelatedStudent(currentSub))
      } catch (error) {
        console.log("error",error)
      }
    };
  };