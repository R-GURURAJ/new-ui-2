import React from 'react'
import { useSelector } from 'react-redux'
const Subjectitem = ({ language }) => {
    return (
        <div>
            <label for="job-1" class="inline-flex items-center justify-between w-full bg-blue-600 text-white p-4 text-center rounded-md hover:bg-blue-700 transition duration-300">
                <div class="block">
                    <div class="w-full text-md font-semibold text-center" key={language}>{language}</div>
                </div>
                <svg class="w-5 h-4 ms-3 rtl:rotate-180 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 1l4 4-4 4" /></svg>
            </label>
        </div>
    )
}
function SubjectLists() {

    const subjectList = useSelector((state) => state.chat.fullData)
    let languages;
    subjectList.roll === "staff" || subjectList.roll === "advisor" ? languages = subjectList.subjects : languages = Object.keys(subjectList.subjects);
    return (
        <div class="overflow-y-auto  mb-4 top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full">
            <div class="pt-3 w-full max-h-full">

                <div class=" bg-white rounded-lg shadow dark:bg-gray-800">

                    <div class="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                        <h3 class="font-bold text-black text-md dark:text-white">
                            Subjects
                        </h3>
                        {/* <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="select-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button> */}
                    </div>

                    <div class="p-4 md:p-5">
                        <div class="space-y-4 mb-4 overflow-auto max-h-80 scrollbar-hide">
                            {/* <Subjectitems /> */}
                            {
                                languages.map((language) => {
                                    // {console.log(language)}
                                    return (
                                        <Subjectitem language={language} />
                                    );
                                })
                            }
                        </div>
                        {/* <button class="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Next step
                                </button> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SubjectLists
