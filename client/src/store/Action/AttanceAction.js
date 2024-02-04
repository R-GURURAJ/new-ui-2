import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import { URL } from '../config';

export const recoverData = createAction('attance/recoverData');


export const advisorAttance = (dept,acadmic,date) => {
    return async (dispatch) => {
        try {
        //   console.log(dept)
          const response =await axios.post(URL+'/advisorAttance', {
              dept:dept,acadmic:acadmic,date:date
          });
          // console.log(response.data)
          dispatch(recoverData({data:response.data}));
      } catch (error) {
        console.log("error",error)
      }
    };
  };
  export const newAttanceAdding = (dept,acadmic,date,student) => {
    return async (dispatch) => {
        try {
        //   console.log(dept)
          const response =await axios.post(URL+'/newAttanceAdding', {
              dept:dept,acadmic:acadmic,date:date,student:student
          });
          // console.log(response.data)
          // dispatch(recoverData({data:response.data}));
      } catch (error) {
        console.log("error",error)
      }
    };
  };
  export const UpdateAttanceAdding = (dept,date,student) => {
    return async (dispatch) => {
        try {
        //   console.log(dept)
          const response =await axios.post(URL+'/updateAttance', {
              dept:dept,date:date,student:student
          });
          // console.log(response.data)
          // dispatch(recoverData({data:response.data}));
      } catch (error) {
        console.log("error",error)
      }
    };
  };