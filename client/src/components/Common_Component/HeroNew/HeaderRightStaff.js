import React from 'react'
import HeaderSection from './HeaderSection'
import Page from './HeaderRight/Page'
import SubjectLists from './HeaderRight/SubjectLists'
// import ToDoList from './HeaderRight/ToDoList'
import Pichart from './HeaderRight/Pichart'
import Calender from './HeaderRight/Calender'
import MessageList from './HeaderRight/MessageList'
import DepartList from './HeaderRight/DepartList'

const HeaderRightStaff = () => {
  return (
      <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <HeaderSection />
          <div class="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto scrollbar-hide md:pt-0 md:pr-0 md:pl-0">
              <div class="flex flex-col flex-wrap sm:flex-row ">
                  <div className='w-full sm:w-1/2 xl:w-1/3'>
                      <Page />
                      <MessageList />
                     
                  </div>
                  <div className='w-full sm:w-1/2 xl:w-1/3'>
                      {/* <ToDoList /> */}
                      <DepartList/>
                      <Pichart />
                  </div>
                  <div className='w-full sm:w-1/2 xl:w-1/3'>
                      <Calender />
                      <SubjectLists />
                  </div>

              </div>
          </div>
      </div>
  )
}

export default HeaderRightStaff
