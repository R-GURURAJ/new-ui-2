import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import { URL } from '../config';

export const fileDetail = createAction('room/fileDet');
// export const fileFix = createAction('room/fileData');


export const shareFile = (file,uid,subject) => {
    return async (dispatch) => {
      console.log(file,uid,"+________",subject);
      try {
        await axios.post(URL + '/classInsert', { file: file, subject: subject, uid: uid }, {
          headers: {
            "Content-type": "multipart/form-data",
          }
        });
      } catch (error) {
        console.error(error); // Log any error that occurs during the request
      }
    };
  };
export const retriveFile = (subject,roll) => {
    return async (dispatch) => {
      try {
        const res=await axios.post(URL + '/classGet', {subject:subject});
        // console.log(res.data);
        dispatch(fileDetail({ data: res.data,subject:subject,roll:roll}))
      } catch (error) {
        console.error(error); // Log any error that occurs during the request
      }
    };
  };
export const FileCount = (subject) => {
    return async (dispatch) => {
      try {
        const res=await axios.post(URL + '/fileCount', {subject:subject});
        // console.log(res.data);
        console.log(res.data.fileCount);
        return Promise.resolve(res.data.fileCount);
        // dispatch(fileDetail({ data: res.data,subject:subject,roll:roll}))
      } catch (error) {
        console.error(error); // Log any error that occurs during the request
      }
    };
  };
// export const FixTheValue = (subject,count) => {
//     return async (dispatch) => {
//       try {
//         dispatch(fileFix({ subject:subject,count:count}))
//       } catch (error) {
//         console.error(error); // Log any error that occurs during the request
//       }
//     };
//   };
export const downloadFile = (subject,id,fileName) => {
    return async (dispatch) => {
      try {
        const response=await axios.post(URL + '/classDownload', {subject:subject,id:id}, { responseType: 'blob' , timeout: 60000});
        // console.log(res);
        // dispatch(fileDetail({ data: res.data}))
        // Create a Blob object from the response data
      const blob = new Blob([response.data], { type: response.headers['content-type'] });

      // Create a download link and trigger a click to initiate the download
      // const downloadLink = document.createElement('a');
      // downloadLink.href = window.URL.createObjectURL(blob);  
      // downloadLink.download = `downloaded-file-${id}.extension`; // Specify the filename
      // downloadLink.click();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName || 'downloaded_file';
      link.click();

      } catch (error) {
        console.error(error); // Log any error that occurs during the request
      }
    };
  };