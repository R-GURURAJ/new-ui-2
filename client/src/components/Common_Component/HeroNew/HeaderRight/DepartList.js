import React, { useEffect, useState } from "react";
import { InternalMarksIcon } from "../../../../assets/MyIcons";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubRelatedStudent } from "../../../../store/Action/studentAction";

const UsersList = ({ Name, Email }) => {
  return (
    <div class="flex items-center justify-center  my-4 rounded-lg">
      <div class="flex-shrink-0 ">
        <img
          class="w-8 h-8 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="Thomas"
        />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
          {Name}
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">{Email}</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        <InternalMarksIcon />
      </div>
    </div>
  );
};
const DeptList = ({ deptVal, subVal, handleDept }) => {
  const subjectStudent = useSelector((state) => state.student.subStudent);
  // console.log(subjectStudent);
  return (
    <div
      className="card bg-blue-950 overflow-hidden"
      // onClick={() => handleDept(deptVal)}
    >
      <button
        className="card-body"
        onClick={() => {
          document.getElementById("my_modal_4").showModal();
          handleDept(deptVal);
        }}
      >
        {deptVal}
      </button>
      <dialog id="my_modal_4" className="modal overflow-auto">
        <div className="modal-box w-10/12 max-w-4xl overflow-auto scrollbar-hide max-h-[70vh]">
          {subjectStudent.map((data) => {
            return <UsersList Name={data.Name} Email={data.email} />;
          })}
          {/* <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} />
          <UsersList Name={"guru"} Email={"my@gmail.com"} /> */}
        </div>
        <div className="modal-action flex justify-center">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

const SubjectModelList = ({ subjectName, onSubjectClick, handleDept }) => {
  const deptVal = [
    "CSEAI",
    "CSEBI",
    "CSEAII",
    "CSEBII",
    "CSEAIII",
    "CSEBIII",
    "CSEAIV",
    "CSEBIV",
  ];
  return (
    <div className="text-center shadow-md w-36 border-y-4 card bg-grey-600 text-white">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="card-body overflow-hidden"
        onClick={() => {
          document.getElementById("my_modal_3").showModal();
          onSubjectClick(subjectName);
        }}
      >
        {subjectName}
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <div
              className="flex gap-5 max-h-72 flex-col justify-center items-center scrollbar-hide overflow-auto py-5 flex-wrap"
              // onClick={() => onSubjectClick(subjectName)}
            >
              {deptVal.map((data) => {
                return (
                  <DeptList
                    deptVal={data}
                    subVal={subjectName}
                    onSubjectClick={onSubjectClick}
                    handleDept={handleDept}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
const DepartList = () => {
  const dispatch = useDispatch();
  const subjectList = useSelector((state) => state.chat.fullData);
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedSub, setSelectedSub] = useState("");
  const handleDept = (deptVal) => {
    setSelectedDept(deptVal);
    // console.log(selectedDept, selectedSub);
    dispatch(fetchSubRelatedStudent(selectedSub, selectedDept));
  };

  const handleSubjectClick = (subVal) => {
    setSelectedSub(subVal);
  };
  useEffect(()=>{
    dispatch(fetchSubRelatedStudent(selectedSub, selectedDept));
  },[handleSubjectClick])
  return (
    <div className="flex items-center justify-center w-full mb-4 px-4 ">
      <div class=" w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <div class="flex justify-between items-start w-full">
          <p class="font-bold text-black text-md dark:text-white">Department</p>
        </div>
        <div className=" overflow-auto  flex flex-col flex-wrap scrollbar-hide max-h-80 py-5 gap-5 ">
          {subjectList.subjects.map((language) => {
            return (
              <SubjectModelList
                key={language}
                subjectName={language}
                onSubjectClick={handleSubjectClick}
                handleDept={handleDept}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DepartList;
