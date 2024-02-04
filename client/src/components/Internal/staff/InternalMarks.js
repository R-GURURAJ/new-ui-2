import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import HeaderSection from "../../Common_Component/HeroNew/HeaderSection";

import {
  InternalMark,
  calculateTotal,
  fetchSubjectRelatedStudent,
} from "../../../store/Action/InternalAction";

export function InternalMarks() {
  const dispatch = useDispatch();
  const [currentSub, setCurrentSub] = useState("");
  const [state, setState] = useState(false);
  const [exam, SetExam] = useState("");
  const [currentVal, setCurrentVal] = useState({});
  const staffDet = useSelector((state) => state.chat.fullData);
  const subject = useSelector((state) => state.internal.staffSubject);
  const [tableVal, setTableVal] = useState("");
  const [dept, setdept] = useState("");
  const [viewAll, setViewAll] = useState(false);
  let d;
  const handleResult = async () => {
    console.log(exam + "---" + currentSub);
    if (exam != "" && currentSub != "") {
      await dispatch(fetchSubjectRelatedStudent(currentSub, dept));
      const updatedResponse = await dispatch(
        fetchSubjectRelatedStudent(currentSub, dept)
      );
      setTableVal(updatedResponse.data);
      setState(true);
      setViewAll(false);
    } else {
      alert("Choose Subject And Choose the IAT to Enter Mark");
    }
  };
  const handleInputChange = (e, i) => {
    const value = e.target.value;
    setCurrentVal({ ...currentVal, [i]: value }); //This will update value in given i is index of the row
  };

  const viewingAllMarks = async (e, i) => {
    if (currentSub != "") {
      await dispatch(fetchSubjectRelatedStudent(currentSub, dept));
      const updatedResponse = await dispatch(
        fetchSubjectRelatedStudent(currentSub, dept)
      );
      setTableVal(updatedResponse.data);
      setState(true);
      setViewAll(true);
    } else {
      alert("Choose Subject");
    }
    setViewAll(true);
  };

  const AddMark = async (i, data) => {
    const currentVal1 = currentVal[i];
    await dispatch(InternalMark(currentSub, currentVal1, data, exam, dept));
    const updatedResponse = await dispatch(
      fetchSubjectRelatedStudent(currentSub, dept)
    );
    setTableVal(updatedResponse.data);
    console.log(currentVal1);
  };

  const handleCalculate = async (uid, subjectVal, curSub) => {
    console.log(uid);
    console.log(subjectVal.slice(0, 3));
    console.log(curSub);
    dispatch(calculateTotal(uid, subjectVal.slice(0, 3), curSub, dept));
    const updatedResponse = await dispatch(
      fetchSubjectRelatedStudent(currentSub, dept)
    );
    setTableVal(updatedResponse.data);
  };
  const SpecificMarkComponent = () => {
    return (
      <div>
        {!viewAll && singleMarkView()}
        {viewAll && multiMarkView()}
      </div>
    );
  };

  const Subjectitems = () => {
    return (
      <tr className="">
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>76</td>
        <td className="gap-6 flex">
          <input
            type="text"
            placeholder="0"
            className="input input-bordered input-info w-20"
          />
          <button className="btn btn-info">Edit</button>
        </td>
      </tr>
    );
  };
  const singleMarkView = () => {
    return (
      <div className="overflow-x-auto w-4/5 m-auto my-10">
        {/* <h3>Student Detail IAT{Number(exam) + 1}</h3> */}
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>RollNo</th>
              <th>Subject</th>
              <th>IAT{Number(exam) + 1} Mark</th>
              <th className="ml-8 w-24">Enter Mark</th>
            </tr>
          </thead>
          <tbody>
            {tableVal.map((data, i) => {
              return (
                <tr key={data.Rollno} className="">
                  <td>{i + 1}</td>
                  <td>{data.Name}</td>
                  <td>{data.Rollno}</td>
                  <td>{currentSub}</td>
                  <td>{data.subjects[currentSub][exam]}</td>
                  <td className="gap-6 flex">
                    <input
                      type="text"
                      placeholder="0"
                      className="input input-bordered input-info w-20"
                      onChange={(e) => handleInputChange(e, i)}
                    ></input>
                    <button
                      type="submit"
                      className="btn btn-info"
                      onClick={() => {
                        AddMark(i, data.Rollno);
                      }}
                    >
                      EDIT
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  const multiMarkView = () => {
    return (
      <div className="overflow-x-auto w-4/5 m-auto my-10">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>RollNo</th>
              <th>Subject</th>
              <th>IAT 1</th>
              <th>IAT 2</th>
              <th>Model</th>
              <th>Total</th>
              <th>Calculate Toatal</th>
            </tr>
          </thead>
          <tbody>
            {tableVal.map((data, i) => {
              return (
                <tr key={data.Rollno} className="">
                  <td>{i + 1}</td>
                  <td>{data.Name}</td>
                  <td>{data.Rollno}</td>
                  <td>{currentSub}</td>
                  {data.subjects[currentSub].map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                  <td>
                    <button
                    className="btn btn-info"
                      onClick={() => {
                        handleCalculate(
                          data.uid,
                          data.subjects[currentSub],
                          currentSub
                        );
                      }}
                    >
                      Calculate
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="h-screen w-full justify-center items-center">
        <HeaderSection/>
      <div className="flex gap-4 p-10 justify-center">
        <select
          className="select select-bordered join-item"
          onChange={(e) => {
            setCurrentSub(e.target.value);
            setState(false);
          }}
        >
          <option disabled selected>
            Subject
          </option>
          {subject.map((item, i) => {
            return (
              <option value={item} key={i}>
                {item}
              </option>
            );
          })}
        </select>
        <select
          className="select select-bordered join-item"
          onChange={(e) => {
            SetExam(e.target.value);
            setState(false);
          }}
        >
          <option disabled selected>
            Exam
          </option>
          <option value={0}>IAT1</option>
          <option value={1}>IAT2</option>
          <option value={2}>Model</option>
        </select>
        <select
          className="select select-bordered join-item"
          onChange={(e) => {
            setdept(e.target.value);
            setState(false);
          }}
        >
          <option disabled selected>
            Year
          </option>
          <option value="CSEAI">CSEAI</option>
          <option value="CSEBI">CSEBI</option>
          <option value="CSEAII">CSEAII</option>
          <option value="CSEBII">CSEBII</option>
          <option value="CSEAIII">CSEAIII</option>
          <option value="CSEBIII">CSEBIII</option>
          <option value="CSEAIV">CSEAIV</option>
          <option value="CSEBIV">CSEBIV</option>
        </select>
      </div>
      <div className="flex justify-center gap-3">
        <button className="btn btn-info" type="submit" onClick={handleResult}>Add Specific Marks</button>
        <button className="btn btn-info" type="submit" onClick={viewingAllMarks}>View All Marks</button>
      </div>
        {state && SpecificMarkComponent()}
      {/* <div>
        <div className="overflow-x-auto w-4/5 m-auto my-10">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>RollNo</th>
                <th>Subject</th>
                <th>Marks</th>
                <th className="ml-8 w-24">Enter Marks</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {/* <Subjectitems />
              <Subjectitems />
              <Subjectitems />
              <Subjectitems />
              <Subjectitems />
            </tbody>
          </table>
        </div>
      </div> */} 
    </div>
  );
}
