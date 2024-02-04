import React from 'react'
import { GreenTick, BlackTick } from '../../../../assets/MyIcons'


const ToDoListItem1 = ({ Idno, Title, }) => {
    return (
        <div class="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
            <div class="flex items-center justify-start text-sm">
                <span class="mx-4">
                    01
                </span>
                <span className='bg-'>
                    Create wireframe
                </span>
            </div>
            <button>
                <BlackTick />
            </button>
        </div>
    )
}
const ToDoListItem2 = () => {
    return (
        <div class="flex items-center justify-between py-3 text-gray-400 border-b-2 border-gray-100 dark:border-gray-800">
            <div class="flex items-center justify-start text-sm">
                <span class="mx-4">
                    04
                </span>
                <span class="line-through">
                    Google logo design
                </span>
            </div>
            <button>
                <GreenTick />
            </button>
        </div>
    )
}
const ToDoList = () => {
  return (
    <div>
          <div class="mx-0 mb-4 sm:ml-4 xl:mr-4">
              <div class="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                  <p class="p-4 font-bold text-black text-md dark:text-white">
                      My Tasks
                      <span class="ml-2 text-sm text-gray-500 dark:text-white">
                          (05)
                      </span>
                  </p>
                  <div className=' overflow-auto scrollbar-hide max-h-[35vh]'>
                      <ToDoListItem1 />
                      <ToDoListItem2 />
                      <ToDoListItem2 />
                      <ToDoListItem2 />
                      <ToDoListItem2 />
                      <ToDoListItem2 />
                      <ToDoListItem2 />
                      <ToDoListItem2 />
                      <ToDoListItem2 />
                      <ToDoListItem2 />
                      <ToDoListItem2 />
                      <ToDoListItem2 />
                      <ToDoListItem2 />
                      <ToDoListItem2 />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default ToDoList
